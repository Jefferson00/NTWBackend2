
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cases').del()
    .then(function () {
      // Inserts seed entries
      return knex('cases').insert([
        {imagem: 'imagem.png', orgao: 'STJ', descricao: 'Case 1', categoria: 'desktop'},
      ]);
    });
};
