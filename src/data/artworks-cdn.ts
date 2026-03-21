export type Artwork = {
    id: string;
    title: string;
    image: string;
    imageWebp?: string;
    imageAvif?: string;
    thumb?: string;
    source: 'local' | 'cdn';
    category?: string;
    location?: string;
    author?: string;
};

export const artworks: Artwork[] = [
    { id: 'alegoria-de-la-fermentacion', title: 'ALEGORÍA DE LA FERMENTACIÓN', image: 'https://cdn.abonce.dev/alegoriadelafermentacion.png', source: 'cdn', category: 'OBRA' },
    { id: 'amanecer-tec-celaya-ii', title: 'AMANECER EN EL TEC CELAYA, CAMPUS II', image: 'https://cdn.abonce.dev/amanecerenelteccelayacampus2.jpg', source: 'cdn', category: 'OBRA' },
    { id: 'campanas-tecnm-celaya-1', title: 'CAMPANAS TECNM EN CELAYA (1)', image: 'https://cdn.abonce.dev/campana1.png', source: 'cdn', category: 'OBRA' },
    { id: 'campanas-tecnm-celaya-2', title: 'CAMPANAS TECNM EN CELAYA (2)', image: 'https://cdn.abonce.dev/campana2.png', source: 'cdn', category: 'OBRA' },
    { id: 'el-estudio-y-el-superhombre', title: 'EL ESTUDIO Y EL SUPERHOMBRE', image: 'https://cdn.abonce.dev/elestudioyelsuperhombre.png', source: 'cdn', category: 'OBRA' },
    { id: 'el-giroscopio', title: 'EL GIROSCOPIO', image: 'https://cdn.abonce.dev/elgiroscopio.jpg', source: 'cdn', category: 'OBRA' },
    { id: 'el-hombre-mitificado', title: 'EL HOMBRE MITIFICADO', image: 'https://cdn.abonce.dev/elhombremitificado.png', source: 'cdn', category: 'OBRA' },
    { id: 'el-pensador', title: 'EL PENSADOR', image: 'https://cdn.abonce.dev/elpensador.png', source: 'cdn', category: 'OBRA' },
    { id: 'el-principio-y-el-fin', title: 'EL PRINCIPIO Y EL FIN', image: 'https://cdn.abonce.dev/elprincipioyelfin.jpg', source: 'cdn', category: 'OBRA' },
    { id: 'en-celaya-se-tejen-los-valores', title: 'EN CELAYA SE TEJEN LOS VALORES, LA INNOVACIÓN Y LA CREACIÓN', image: 'https://cdn.abonce.dev/encelayasetejenlosvaloreslainnovacionylacreacion.png', source: 'cdn', category: 'OBRA' },
    { id: 'fractal-faeton', title: 'FRACTAL FAETON', image: 'https://cdn.abonce.dev/fractalfaeton.png', source: 'cdn', category: 'OBRA' },
    { id: 'jardin-del-lince', title: 'JARDÍN DEL LINCE', image: 'https://cdn.abonce.dev/jardindellince.png', source: 'cdn', category: 'OBRA' },
    { id: 'la-abolicion-de-la-esclavitud', title: 'LA ABOLICIÓN DE LA ESCLAVITUD', image: 'https://cdn.abonce.dev/laaboliciondelaesclavitud.jpg', source: 'cdn', category: 'OBRA' },
    { id: 'la-era-de-la-transmodernidad', title: 'LA ERA DE LA TRANSMODERNIDAD', image: 'https://cdn.abonce.dev/laeradelatransmodernidad.png', source: 'cdn', category: 'OBRA' },
    { id: 'la-evolucion-del-hombre', title: 'LA EVOLUCIÓN DEL HOMBRE', image: 'https://cdn.abonce.dev/laevoluciondelhombre.png', source: 'cdn', category: 'OBRA' },
    { id: 'la-evolucion-de-mexico', title: 'LA EVOLUCIÓN DE MÉXICO', image: 'https://cdn.abonce.dev/laevoluciondemexico.png', source: 'cdn', category: 'OBRA' },
    { id: 'la-persistencia-de-la-memoria', title: 'LA PERSISTENCIA DE LA MEMORIA', image: 'https://cdn.abonce.dev/lapersistenciadelamemoria.png', source: 'cdn', category: 'OBRA' },
    { id: 'letras-tecnm-celaya-1', title: 'LETRAS TECNM EN CELAYA, CAMPUS I', image: 'https://cdn.abonce.dev/letrastecnmcampus1.png', source: 'cdn', category: 'OBRA' },
    { id: 'lince', title: 'LINCE', image: 'https://cdn.abonce.dev/lince.png', source: 'cdn', category: 'OBRA' },
    { id: 'lince-de-cantera', title: 'LINCE DE CANTERA', image: 'https://cdn.abonce.dev/lincedecantera.png', source: 'cdn', category: 'OBRA' },
    { id: 'lince-poligonal', title: 'LINCE POLIGONAL', image: 'https://cdn.abonce.dev/lincepoligonal.png', source: 'cdn', category: 'OBRA' },
    { id: 'los-enemigos-del-sol', title: 'LOS ENEMIGOS DEL SOL', image: 'https://cdn.abonce.dev/losenemigosdelsol.png', source: 'cdn', category: 'OBRA' },
    { id: 'naturaleza-cultura-y-tecnologia', title: 'NATURALEZA, CULTURA Y TECNOLOGÍA', image: 'https://cdn.abonce.dev/naturalezaculturaytecnologia.png', source: 'cdn', category: 'OBRA' },
    { id: 'orgullo-lince', title: 'ORGULLO LINCE', image: 'https://cdn.abonce.dev/orgullolince.png', source: 'cdn', category: 'OBRA' },
    { id: 'prometeo', title: 'PROMETEO', image: 'https://cdn.abonce.dev/prometeo.png', source: 'cdn', category: 'OBRA' },
    { id: 'quetzalcoatl-1', title: 'QUETZALCÓATL (1)', image: 'https://cdn.abonce.dev/quetzalcoalt.png', source: 'cdn', category: 'OBRA' },
    { id: 'quetzalcoatl-2', title: 'QUETZALCÓATL (2)', image: 'https://cdn.abonce.dev/quetzalcoatl2.png', source: 'cdn', category: 'OBRA' },
    { id: 'quijote', title: 'QUIJOTE', image: 'https://cdn.abonce.dev/quijote.png', source: 'cdn', category: 'OBRA' },
    { id: 'quijote-contra-molino', title: 'QUIJOTE CONTRA MOLINO DE VIENTO', image: 'https://cdn.abonce.dev/quijotecontramolinodeviento.png', source: 'cdn', category: 'OBRA' },
    { id: 'quijote-y-sancho', title: 'QUIJOTE Y SANCHO PANZA', image: 'https://cdn.abonce.dev/quijoteysancho.png', source: 'cdn', category: 'OBRA' },
    { id: 'symbolum-lince', title: 'SYMBOLUM LINCE', image: 'https://cdn.abonce.dev/symbolumblince.png', source: 'cdn', category: 'OBRA' },
    { id: 'tecnologia-y-cultura', title: 'TECNOLOGÍA Y CULTURA: HACIA EL HOMBRE UNIVERSAL', image: 'https://cdn.abonce.dev/tecnologiayculturahaciaelhombreuniversal.png', source: 'cdn', category: 'OBRA' },
    { id: 'vitrina-de-trofeos', title: 'VITRINA DE TROFEOS', image: 'https://cdn.abonce.dev/vitrinadetrofeos.jpg', source: 'cdn', category: 'OBRA' }
];