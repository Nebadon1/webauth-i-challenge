const router = require('express').Router();
const User  = require('./users-model.js');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res)=>{
    console.log(req.body)
 const {username, password} = req.body

 User.insert({ username, password: bcrypt.hashSync(password, 7) })
 .then(id =>{
     res.status(200).json({ message: "User successfully registered" });
 })
 .catch( err => {
     console.log(err);
     res,status(500).json({ message: "We had a problem registering user" });
     })
});

router.post('/login', (req, res)=>{
    
 const {username, password} = req.body

 User.findByUsername(username)
 .then(user =>{
     if(user && bcrypt.compareSync(password, user.password)){
     res.status(201).json({ message: "User successfully loged in" });
     } else{
         res.status(401).json({ message: "Invalid user or password!" })
     }
 })
 .catch( err => {
     console.log(err);
     res,status(500).json({ message: "We had a problem loging the user"});
     })
});
module.exports = router;
