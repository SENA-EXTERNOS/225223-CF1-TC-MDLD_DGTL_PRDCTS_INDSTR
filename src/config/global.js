export default {
  global: {
    componenteFormativo:
      'Fundamentos para la realización del boceto manual de un producto',
    descripcionCurso:
      'La forma adecuada para expresar una idea a nivel técnico, cuando se refiere a un producto industrial, es tomar papel y lápiz. Se realiza un primer dibujo de ese objeto, llamado boceto, el cual es elaborado con dimensiones exactas y para ello se utilizan diferentes instrumentos de dibujo. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Dibujo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Teoría del color',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Materiales e instrumentos para el dibujo',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Perspectiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Técnicas de representación de volumen, escala, dibujo vectorial estilo libre',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normativa',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Información contenida',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cotas anotaciones, simbología, escala, formatos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Proyección de vistas y tipos de vistas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Geometría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Unidades de medida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Herramientas para escalado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '5. Geometría',
      referencia:
        'GCF Global. (2022) Elementos básicos de la geometría 09/08/2022, de gcf Global Sitio web: https://edu.gcfglobal.org/es/geometria-basica/elementos-basicos-de-la-geometria/1/',
      tipo: 'Página web',
      link:
        'https://edu.gcfglobal.org/es/geometria-basica/elementos-basicos-de-la-geometria/1/',
    },
    {
      tema: '7.2 Vistas',
      referencia:
        'AREATECOLOGIA. 08/08/2022, vista de un de un objeto. https://www.youtube.com/watch?v=-ZCH3rpII8E&t=3s',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-ZCH3rpII8E&t=3',
    },
    {
      tema: '1.2 Materiales e instrumentos para el dibujo',
      referencia: 'Anexo1_Importancia del papel.docx',
      tipo: 'Documento que amplía la información sobre el papel.',
      descarga: '/downloads/doc1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acotado',
      significado:
        'expresar por medio de palabras, números con signos si se requiere, líneas o símbolos, lo correspondiente al contenido de un objeto dentro de un dibujo.',
    },
    {
      termino: 'Apuntes',
      significado:
        'informes complementarios al dibujo, concerniente al ensamble, funcionamiento, empleo, etc.',
    },
    {
      termino: 'Boceto',
      significado:
        'la primera representación gráfica de una idea, susceptible de modificaciones y elaborada a mano alzada.',
    },
    {
      termino: 'Croquis',
      significado:
        'representación gráfica definitiva y dimensionada que especifica la totalidad de los detalles.',
    },
    {
      termino: 'Descriptiva',
      significado:
        'el estudio de los cuerpos en el espacio por medio de sus proyecciones sobre determinados planos.',
    },
    {
      termino: 'Dibujo técnico',
      significado:
        'representación gráfica, precisa y dimensionada; ceñida a normas, que permite interpretar o realizar un diseño.',
    },
    {
      termino: 'Documentos de redacción',
      significado:
        'los dibujos en los documentos son acompañados con especificaciones.',
    },
    {
      termino: 'Esquema',
      significado:
        'representación gráfica de una idea en la cual solamente figuran los detalles más importantes o esenciales.',
    },
    {
      termino: 'Geometría',
      significado:
        'es una rama que viene de las matemáticas y estudia las propiedades y las medidas de una figura.',
    },
    {
      termino: 'Gráfica',
      significado:
        'es la representación de un diagrama y la relación que existe entre 2 o más magnitudes (distancia – tiempo, velocidad-distancia, etc.).',
    },
    {
      termino: 'Nomenclatura',
      significado:
        'lista completa de elementos representados en un ensamble o subensamble.',
    },
    {
      termino: 'Perspectiva',
      significado:
        'manera de representar uno o varios objetos en una superficie plana, que da idea de la posición, volumen y situación que ocupan en el espacio con respecto al ojo del observador.',
    },
    {
      termino: 'Representación volumétrica',
      significado:
        'es una actividad gráfica donde se representa de manera visual un objeto en sus tres dimensiones.',
    },
    {
      termino: 'Sistema de coordenadas',
      significado:
        'sirve para localizar elementos en el dibujo con precisión, se distribuye con un eje horizontal denominado eje X, y otro vertical también conocido como el eje Y.',
    },
    {
      termino: 'Unidades de medidas',
      significado:
        'es una referencia convencional que se utiliza en diferentes áreas del conocimiento, donde se utiliza para expresar la unidad de longitud a nivel mundial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ferrando, E. (2019) Medida y proporción. Universidad Oberta de Catalunya.',
      link: 'http://art-toolkit.recursos.uoc.edu/es/medida-y-proporcion/',
    },
    {
      referencia: 'Universidad Politécnica de Madrid (2022).',
      link: 'http://ocw.upm.es/',
    },
    {
      referencia: 'Aldo, S. (2022) Historia del dibujo.Academia.edu.',
      link: 'https://www.academia.edu/13544206/HISTORIA_DEL_DIBUJO',
    },
    {
      referencia: 'Timetoast timelines (2022) HISTORIA DEL DIBUJO. Timeline.. ',
      link:
        'https://www.timetoast.com/timelines/historia-del-dibujo-e4a3cae9-8c57-4ce5-ad6a-495e88406ea2',
    },
    {
      referencia:
        ' https://www.crehana.com 2022. Mejores ejercicios de perspectiva para ser un pro',
      link:
        'https://www.crehana.com/blog/dibujo-pintura/mejores-ejercicios-perspectiva-arte/#:~:text=Regularmente%2C%20se%20dibuja%20con%20el,conocida%20tambi%C3%A9n%20como%20perspectiva%20oblicua',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
