
exports.up = function(knex) {
    return knex.schema.createTable('parceiros', function(table){
        table.increments('id');

        table.string('imagem').notNullable();
        table.string('nome').notNullable();
        table.string('site').notNullable();
        table.boolean('isValid').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('parceiros');
};
