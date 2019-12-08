
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
       {username:'danni', password:'12345'}, 
       {username:'carlos', password:'123452'},
       {username:'don', password:'123453'}
      ]);
    });
};
