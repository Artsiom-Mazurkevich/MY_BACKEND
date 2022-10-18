const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./src/routes/authRouter')


const PORT = process.env.PORT || 3000
const URL = process.env.URL || 'mongodb+srv://MazurkevichArtsiom:Mazurkevich1995@cluster0.4dzgdcw.mongodb.net/auth_roles?retryWrites=true&w=majority'

const app = express();
app.use(express.json());
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(URL)
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()