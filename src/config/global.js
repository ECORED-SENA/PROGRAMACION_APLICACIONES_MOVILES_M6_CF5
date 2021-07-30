export default {
  global: {
    componenteFormativo: 'Despliegue de la aplicación nativa',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos clave para el despliegue de las aplicaciones móviles, en donde encontrarán temáticas relacionadas con las tiendas de aplicaciones, así como sus características, cuentas, y creación de APK.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Tiendas de aplicaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Play Store',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Subida aplicación Play Store',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Crear APK Android Studio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Publicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia: 'Developers. (2021). Bienvenido a Android Developers. ',
      link: 'https://developer.android.com',
    },
  ],
  glosario: [
    {
      termino: 'APK',
      significado:
        '(Android Application Package) archivo ejecutable de aplicaciones Android.',
    },
    {
      termino: 'Cuenta de desarrollador',
      significado:
        'cuenta de publicación que se asigna a un desarrollador para la distribución de productos en la Google Play.',
    },
    {
      termino: 'Google',
      significado:
        'organización multinacional dedicada a productos y servicios electrónicos informáticos vinculados con internet.',
    },
    {
      termino: 'Google Play',
      significado:
        'software o los servicios (incluido Play Console) que permiten que los desarrolladores distribuyen productos a los usuarios de los dispositivos.',
    },
    {
      termino: 'Play Console',
      significado:
        'herramienta o servicio en línea de Google para desarrolladores.',
    },
  ],
  complementario: [
    {
      texto:
        'Colaboradores de los proyectos Wikimedia. (2021). Tienda de software - Wikipedia, la enciclopedia libre. ',
      tipo: 'Página',
      link:
        'https://es.wikipedia.org/w/index.php?title=Tienda_de_software&oldid=135587569',
    },
    {
      texto: 'Google Play. (2021). Google Play Store. ',
      tipo: 'Página Oficial',
      link: 'https://play.google.com/store/apps?hl=es_CO%E2%89%B7=US',
    },
    {
      texto: 'Desarrolladores de Android. (2021, June 07). Firma tu app. ',
      tipo: 'Página Oficial',
      link:
        'https://developer.android.com/studio/publish/app-signing?hl=es#generate-ke',
    },
    {
      texto:
        'Edteam. (2020). ¿Cómo subir tu app a la Play Store? [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=EOkKc1Oc92M',
    },
    {
      texto:
        'Brais, M., M. (2020). Google play store cómo publicar tu primera app Android. [Video]. YouTube. ',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=vBHmJHp8Ldo',
    },
    {
      texto: 'Google Play. (2021). Definiciones. ',
      tipo: 'Página Oficial',
      link:
        'https://play.google.com/intl/ALL_ar/about/developer-distribution-agreement.html',
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
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zulema Yidney Leon Escobar',
        cargo: 'Experta temática',
        centro: 'Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro de la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },

      {
        nombre: 'Juan Carlos Tapias Rueda	',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },

      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
