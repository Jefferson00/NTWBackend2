
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produtos').del()
    .then(function () {
      // Inserts seed entries
      return knex('produtos').insert([
        {categoria: 'desktops', 
        modelo: 'M920q', 
        fabricante: 'Lenovo',
        caracteristica: 'Processadores Intel, gabinete tiny, gerenciamento VPro',
        imagem:'ThinkCentre_M920_Tiny.png',
        catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M920_Tiny_datasheet_EN.pdf',
        isEOL: false
      },
      {categoria: 'desktops', 
      modelo: 'M720q', 
      fabricante: 'Lenovo',
      caracteristica: 'Processadores Intel, gabinete tiny',
      imagem:'ThinkCentre_M720_Tiny.png',
      catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M720_Tiny_datasheet_EN.pdf',
      isEOL: false
    },
    {categoria: 'monitor', 
    modelo: '22P1E', 
    fabricante: 'AOC',
    caracteristica: '22 polegadas, FullHD, VGA, HDMI e DisplayPort',
    imagem:'aoc22p1e.png',
    catalogo:'http://www.aoc.com.br/monitores/escritorio/monitor-widescreen-21-pol-22p1e',
        isEOL: false
        },
      ]);
    });
};
