const bcrypt = require('bcrypt')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Inserts seed entries
      const hash = await bcrypt.hash('admin', 10)
      const hash2 = await bcrypt.hash('teste', 10)
      return knex('users').insert([
        {name: 'Admin', password: hash, access: '0'},
        {name: 'User1', password: hash2, access: '1'},
        {name: 'User2', password: hash2, access: '1'}
      ]);
    });
};
