
exports.up = function(knex) {
    return knex.schema.createTable('atas', function(table){
        table.increments('id_atas');
        table.integer('id_produtos').notNullable();
        table.foreign('id_produtos').references('id_produto').inTable('produtos');

        table.string('descricao').notNullable();
        table.string('orgao').notNullable();
        table.integer('quantidade').notNullable();
        table.string('garantia').notNullable();
        table.string('validade').notNullable();
        table.decimal('valor',17,2).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('atas');
};
