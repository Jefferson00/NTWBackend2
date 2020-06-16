
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cases').del()
    .then(function () {
      // Inserts seed entries
      return knex('cases').insert([
        {imagem: 'stj-case.jpg', orgao: 'STJ', descricao: 'A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ', categoria: 'scanners'},
        {imagem: 'censipam-cases.jpg', orgao: 'Censipam', descricao: 'A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ', categoria: 'hiperconvergencia'},
        {imagem: 'tjrs-cases.jpg', orgao: 'TJRS', descricao: 'A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ', categoria: 'networking'},
        {imagem: 'anac-cases.jpg', orgao: 'ANAC', descricao: 'A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ', categoria: 'desktop'},
      ]);
    });
};
