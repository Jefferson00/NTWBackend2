
exports.up = function(knex) {
    return knex.schema.createTable('cases', function(table){
        table.increments('id');

        table.string('imagem').notNullable();
        table.string('orgao').notNullable();
        table.string('descricao').notNullable();
        table.string('categoria').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cases');
};
