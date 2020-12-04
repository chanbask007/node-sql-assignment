const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('../api/models/index')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())

require('../api/routes/routes')(app)



sequelize.sync({})
.then(()=>{
    
    app.listen(3000)
    console.log(`Server started on port ${3000}`)
})