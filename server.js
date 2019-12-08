
const express =require('express');

const server = express();
server.use(express.json());
// always set your Middleware under the use(express.json)

const authRouter = require('./auth/auth-router.js');
const userRouter = require('./auth/user-router')

server.use('/auth', authRouter);
server.use('/users', userRouter);


server.get('/', (req, res)=>{
    res.send(`<h1> 🔨 server is up and running</h1>`)
})

module.exports = server;