
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parceiros').del()
    .then(function () {
      // Inserts seed entries
      return knex('parceiros').insert([
        {imagem: 'imagem.png', nome: 'Lenovo', site: 'lenovo.com.br', isValid: true},
        {imagem: 'imagem.png', nome: 'Fujitsu', site: 'fujtsu.com.br', isValid: true},
        {imagem: 'imagem.png', nome: 'AOC', site: 'aoc.com.br', isValid: true}
      ]);
    });
};
