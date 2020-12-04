const {TB_USER, sequelize} = require('../models/')
const {Op} = require('sequelize')
module.exports = {
    
    pagination(req,res){
        // res.json({"msg":"pagination called!"})
        try {
            const page = parseInt(req.query.page - 1)
            const limit = parseInt(req.query.limit)

            const offset = page ? page * limit : 0
            console.log(`page: ${page}, limit : ${limit}`);

            TB_USER.findAndCountAll({limit:limit, offset: offset})
            .then(data =>{
                const totalPages = Math.ceil(data.count / limit)
                const response = {
                    data:{
                        totalItems: data.count,
                        tatalPages: totalPages,
                        limit: limit,
                        currentPageNumber: page + 1,
                        currentPageSize: data.rows.length,
                        users: data.rows
                    }
                }
            res.send({response:response})


            })

            
        } catch (error) {
            res.send({"error": error})
            
        }

    },
    async userWithIDs(req,res){
        try {

        const users = await TB_USER.findAll({where:{user_id:[1,5,7]}})
        res.send({users: users})
            
        } catch (error) {
            res.send({error:error})
            
        }
    },

   async moreThanThreeUsers(req,res){
        // res.send({msg:'these users admin have more than 3 users'})
        try {
            const users = await TB_USER.findAll({
                where:{
                    admin_id:{
                    [Op.in] : sequelize.literal(`(select admin_id from tb_user group by admin_id having count(*)>=3)`)
                    }
                }
            })
            res.send({'users':users})
    
        } catch (error) {
            res.send({error: error})
            
        }
    }
}