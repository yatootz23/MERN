require('dotenv').config()
const express = require('express')
const mongoogse = require('mongoose')

// import routes
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//use routes
app.use('/workouts', workoutRoutes)

//connect to db
mongoogse.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

