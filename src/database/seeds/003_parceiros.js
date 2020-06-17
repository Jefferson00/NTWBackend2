
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parceiros').del()
    .then(function () {
      // Inserts seed entries
      return knex('parceiros').insert([
        {imagem: 'Lenovo-logo.png', nome: 'Lenovo', site: 'http://lenovo.com.br', isValid: true},
        {imagem: 'fujitsu-logo.png', nome: 'Fujitsu', site: 'http://fujtsu.com.br', isValid: true},
        {imagem: 'aoc-logo.png', nome: 'AOC', site: 'http://aoc.com.br', isValid: true},
        {imagem: 'Nutanix_Logo.png', nome: 'Nutanix', site: 'http://nutanix.com', isValid: true},
        {imagem: 'Philips-logo.png', nome: 'Philips', site: 'http://philips.com.br', isValid: true},
        {imagem: 'polycom-logo.png', nome: 'Polycom', site: 'http://polycom.com', isValid: true},
      ]);
    });
};
