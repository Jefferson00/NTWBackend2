
exports.up = function(knex) {
    return knex.schema.createTable('logs', function(table){
        table.increments('id_log');
        table.integer('id_user').notNullable();
        table.foreign('id_user').references('id').inTable('users');

        table.string('acao').notNullable();
        table.string('tabela').notNullable();
        table.string('detalhe',5000).notNullable();
        table.timestamp('data', { useTz: true }).defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('logs');
};
