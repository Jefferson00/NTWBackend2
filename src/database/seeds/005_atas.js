
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('atas').del()
    .then(function () {
      // Inserts seed entries
      return knex('atas').insert([
        {
          descricao: 'Processador intel, 16GB de memória DDR4 2400, SSD 256GB, Windows 10 Pro',
          orgao: 'TJDFT',
          id_produtos: 1,
          quantidade: 200,
          garantia:'60 meses',
          validade: 'Janeiro 2020',
          valor:200000
        },
        { 
          descricao: 'Processador intel, 16GB de memória DDR4 2400, SSD 256GB, Windows 10 Pro',
          orgao: 'TRF',
          id_produtos: 2,
          quantidade: 200,
          garantia:'60 meses',
          validade: 'Janeiro 2020',
          valor:200000
        },
        {
          descricao: 'Tela FULLHD 21,5 polegadas ',
          orgao: 'FUB',
          id_produtos: 3,
          quantidade: 200,
          garantia:'60 meses',
          validade: 'Janeiro 2020',
          valor:200000
        },

      ]);
    });
};
