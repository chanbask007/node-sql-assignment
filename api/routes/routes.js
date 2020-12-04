const ApiController = require('../controllers/ApiController')

module.exports = (app) =>{
    app.get('/pagination',ApiController.pagination)
    app.get('/userId',ApiController.userWithIDs)
    app.get('/moreThanThreeUsers',ApiController.moreThanThreeUsers)
}