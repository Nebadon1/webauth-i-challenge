const db = require('../data/db-config.js');

function insert(user){
return db('user')
.insert(user, 'id')
.then(([id])=> id);
};

function findBy(where){
    return db('user')
    .where(where)
}

function findByUsername(username){
    return findBy({ username })
    .first()

};

function find(){
    return db('user');
}

module.exports= {
    insert, 
    findBy, 
    findByUsername,
    find
}