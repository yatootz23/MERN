require('dotenv').config()
const express = require('express')

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

//listen for requests
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})