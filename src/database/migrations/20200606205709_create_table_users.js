exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id');
        table.string('name').unique().notNullable();
        table.string('password').notNullable();
        table.string('access').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
