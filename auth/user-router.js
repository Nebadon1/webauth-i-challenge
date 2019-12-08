const router = require('express').Router()
const User = require('./users-model');
const restrict = require('./restrict.js');

router.get('/', restrict, (req, res) => {
    User.find()
.then(user => {
    res.json(user);
})
.catch(err => {
 console.log(err);
 res.status(500).json({ message: "We had a error getting users"});
})
})

module.exports = router; 
