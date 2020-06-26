
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produtos').del()
    .then(function () {
      // Inserts seed entries
      return knex('produtos').insert([
        {categoria: 'desktops', 
        modelo: 'M920q', 
        fabricante: 'Lenovo',
        caracteristica: '8ª e 9ª Geração de Processadores Intel com gerenciamento Vpro, gabinete Ultra compacto, possui a mais recente tecnologia de processamento, memória e várias opções de armazenamento',
        imagem:'ThinkCentre_M920_Tiny.png',
        catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M920_Tiny_datasheet_EN.pdf',
        isEOL: false
      },
      {categoria: 'desktops', 
        modelo: 'M920S', 
        fabricante: 'Lenovo',
        caracteristica: '8ª e 9ª Geração de Processadores Intel com gerenciamento Vpro, gabinete Ultra compacto, possui a mais recente tecnologia de processamento, memória e várias opções de armazenamento',
        imagem:'ThinkCentre_M920_SFF.png',
        catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M920_SFF_datasheet_EN.pdf',
        isEOL: false
      },
      {categoria: 'desktops', 
        modelo: 'M720S', 
        fabricante: 'Lenovo',
        caracteristica: '8ª e 9ª Geração de Processadores Intel, gabinete SFF, possui a mais recente tecnologia de processamento, memória e várias opções de armazenamento',
        imagem:'ThinkCentre_M720_SFF.png',
        catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M720_SFF_datasheet_EN.pdf',
        isEOL: false
      },
      {categoria: 'desktops', 
      modelo: 'M720q', 
      fabricante: 'Lenovo',
      caracteristica: '8ª e 9ª Geração de Processadores Intel, gabinete Ultra compacto, possui a mais recente tecnologia de processamento, memória e várias opções de armazenamento',
      imagem:'ThinkCentre_M720_Tiny.png',
      catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M720_Tiny_datasheet_EN.pdf',
      isEOL: false
    },
      {categoria: 'notebooks', 
      modelo: 'T490', 
      fabricante: 'Lenovo',
      caracteristica: '8ª Geração de Processadores Intel com gerenciamento Vpro, gabinete Ultra fino, possui a mais recente tecnologia de processamento, memória e várias opções de armazenamento',
      imagem:'ThinkPad_T490.png',
      catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M720_Tiny_datasheet_EN.pdf',
      isEOL: false
    },
      {categoria: 'notebooks', 
      modelo: 'E14', 
      fabricante: 'Lenovo',
      caracteristica: '10ª Geração de Processadores Intel, gabinete Ultra fino e resistente, possui a mais recente tecnologia de processamento, memória e várias opções de armazenamento',
      imagem:'ThinkPad_E14.png',
      catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M720_Tiny_datasheet_EN.pdf',
      isEOL: false
    },
      {categoria: 'notebooks', 
      modelo: 'T495', 
      fabricante: 'Lenovo',
      caracteristica: 'Última Geração de Processadores AMD com gerenciamento DASH, gabinete Ultra fino, possui a mais recente tecnologia de processamento, memória e várias opções de armazenamento',
      imagem:'ThinkPad_T495.png',
      catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkCentre_M720_Tiny_datasheet_EN.pdf',
      isEOL: false
    },
      {categoria: 'monitores', 
      modelo: 'T22i-10', 
      fabricante: 'Lenovo',
      caracteristica: 'Tela LED Full HD IPS 21.5 polegadas, possui ajustes de altura, inclinação e rotação, conectores HDMI, DisplayPort e VGA, além de possuir HUB USB 3.0',
      imagem:'ThinkVision_T22i.png',
      catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkVision_T22i_Datasheet_EN.pdf',
      isEOL: false
    },
      {categoria: 'monitores', 
      modelo: 'T23i-10', 
      fabricante: 'Lenovo',
      caracteristica: 'Tela LED Full HD IPS 23 polegadas, possui ajustes de altura, inclinação e rotação, conectores HDMI, DisplayPort e VGA, além de possuir HUB USB 3.0',
      imagem:'ThinkVision_T23i.png',
      catalogo:'http://psref.lenovo.com/syspool/Sys/PDF/datasheet/ThinkVision_T23i_Datasheet_EN.pdf',
      isEOL: false
    },
      {categoria: 'monitores', 
      modelo: '243V5QHABA/57', 
      fabricante: 'Philips',
      caracteristica: 'Tela LED MVA Full HD 23,6 polegadas, com HDMI e caixas acústicas estéreo',
      imagem:'243V5QHABA_01.jpg',
      catalogo:'https://www.download.p4c.philips.com/files/2/243v5qhaba_57/243v5qhaba_57_pss_brpbr.pdf?_ga=2.185552750.638658962.1593119803-1033020902.1587678122',
      isEOL: false
    },
      {categoria: 'monitores', 
      modelo: '22P1E', 
      fabricante: 'AOC',
      caracteristica: '22 polegadas, FullHD, VGA, HDMI e DisplayPort',
      imagem:'aoc22p1e.png',
      catalogo:'http://www.aoc.com.br/monitores/escritorio/monitor-widescreen-21-pol-22p1e',
        isEOL: false
        },
      {categoria: 'scanners', 
      modelo: 'ScanSnap iX500', 
      fabricante: 'Fujitsu',
      caracteristica: 'fornece aos usuários de PC e Mac uma maneira eficaz de reduzir consideravelmente a desordem de papel, o espaço de armazenamento e os riscos de segurança associados à documentação não gerenciada em casa ou no escritório.',
      imagem:'ix500.jpg',
      catalogo:'https://www.fujitsu.com/br/Images/Cat%C3%A1logo%20-%20ScanSnap%20iX500_PO.pdf',
        isEOL: false
        },
      {categoria: 'scanners', 
      modelo: 'fi-7260', 
      fabricante: 'Fujitsu',
      caracteristica: 'Oferece desempenho incomparável e recursos de geração de imagens de documentos líderes de mercado com velocidades de digitalização mais rápidas',
      imagem:'fi7260.png',
      catalogo:'https://www.fujitsu.com/br/Images/Cat%C3%A1logo%20-%20fi-7260%20-%2001BR.pdf',
        isEOL: false
        },
      {categoria: 'networking', 
      modelo: 'Switch Cisco SG250-50', 
      fabricante: 'Cisco',
      caracteristica: ' 48 PORTAS GIGABIT | 2X SFP | LAYER 3 | GERENCIÁVEL | MPN: SG250-50-K9-BR',
      imagem:'sg200-50p.jpg',
      catalogo:'https://www.cisco.com/c/en/us/products/collateral/switches/250-series-smart-switches/datasheet-c78-737061.html',
        isEOL: false
        },
      ]);
    });
};
