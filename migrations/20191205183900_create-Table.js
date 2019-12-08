//change we want to apply to schema
exports.up = function(knex) {
return knex.schema.createTable('user', tbl => {
tbl.increments();

tbl.string('username',128)
.unique()
.notNullable();
tbl.string('password', 128)
.notNullable();
})
};
// undo changes to the schema 
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user");
};
