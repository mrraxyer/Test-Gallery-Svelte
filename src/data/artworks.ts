import alegoria from '../assets/non-cdn/alegoriadelafermentacion.png';
import amanecer from '../assets/non-cdn/amanecerenelteccelayacampus2.jpg';
import campana1 from '../assets/non-cdn/campana1.png';
import campana2 from '../assets/non-cdn/campana2.png';
import estudio from '../assets/non-cdn/elestudioyelsuperhombre.png';
import giroscopio from '../assets/non-cdn/elgiroscopio.jpg';
import hombreMit from '../assets/non-cdn/elhombremitificado.png';
import pensador from '../assets/non-cdn/elpensador.png';
import principioFin from '../assets/non-cdn/elprincipioyelfin.jpg';
import encelaya from '../assets/non-cdn/encelayasetejenlosvaloreslainnovacionylacreacion.png';
import fractal from '../assets/non-cdn/fractalfaeton.png';
import jardinLince from '../assets/non-cdn/jardindellince.png';
import abolicion from '../assets/non-cdn/laaboliciondelaesclavitud.jpg';
import eraTrans from '../assets/non-cdn/laeradelatransmodernidad.png';
import evolucionHombre from '../assets/non-cdn/laevoluciondelhombre.png';
import evolucionMexico from '../assets/non-cdn/laevoluciondemexico.png';
import persistencia from '../assets/non-cdn/lapersistenciadelamemoria.png';
import letrasTec from '../assets/non-cdn/letrastecnmcampus1.png';
import lince from '../assets/non-cdn/lince.png';
import linceCantera from '../assets/non-cdn/lincedecantera.png';
import lincePoligonal from '../assets/non-cdn/lincepoligonal.png';
import enemigosSol from '../assets/non-cdn/losenemigosdelsol.png';
import naturaleza from '../assets/non-cdn/naturalezaculturaytecnologia.png';
import orgulloLince from '../assets/non-cdn/orgullolince.png';
import prometeo from '../assets/non-cdn/prometeo.png';
import quetz1 from '../assets/non-cdn/quetzalcoalt.png';
import quetz2 from '../assets/non-cdn/quetzalcoatl2.png';
import quijote from '../assets/non-cdn/quijote.png';
import quijoteContra from '../assets/non-cdn/quijotecontramolinodeviento.png';
import quijoteSancho from '../assets/non-cdn/quijoteysancho.png';
import symbolum from '../assets/non-cdn/symbolumblince.png';
import tecnologia from '../assets/non-cdn/tecnologiayculturahaciaelhombreuniversal.png';
import vitrina from '../assets/non-cdn/vitrinadetrofeos.jpg';

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
    { id: 'alegoria-de-la-fermentacion', title: 'ALEGORÍA DE LA FERMENTACIÓN', image: alegoria, source: 'local', category: 'OBRA' },
    { id: 'amanecer-tec-celaya-ii', title: 'AMANECER EN EL TEC CELAYA, CAMPUS II', image: amanecer, source: 'local', category: 'OBRA' },
    { id: 'campanas-tecnm-celaya-1', title: 'CAMPANAS TECNM EN CELAYA (1)', image: campana1, source: 'local', category: 'OBRA' },
    { id: 'campanas-tecnm-celaya-2', title: 'CAMPANAS TECNM EN CELAYA (2)', image: campana2, source: 'local', category: 'OBRA' },
    { id: 'el-estudio-y-el-superhombre', title: 'EL ESTUDIO Y EL SUPERHOMBRE', image: estudio, source: 'local', category: 'OBRA' },
    { id: 'el-giroscopio', title: 'EL GIROSCOPIO', image: giroscopio, source: 'local', category: 'OBRA' },
    { id: 'el-hombre-mitificado', title: 'EL HOMBRE MITIFICADO', image: hombreMit, source: 'local', category: 'OBRA' },
    { id: 'el-pensador', title: 'EL PENSADOR', image: pensador, source: 'local', category: 'OBRA' },
    { id: 'el-principio-y-el-fin', title: 'EL PRINCIPIO Y EL FIN', image: principioFin, source: 'local', category: 'OBRA' },
    { id: 'en-celaya-se-tejen-los-valores', title: 'EN CELAYA SE TEJEN LOS VALORES, LA INNOVACIÓN Y LA CREACIÓN', image: encelaya, source: 'local', category: 'OBRA' },
    { id: 'fractal-faeton', title: 'FRACTAL FAETON', image: fractal, source: 'local', category: 'OBRA' },
    { id: 'jardin-del-lince', title: 'JARDÍN DEL LINCE', image: jardinLince, source: 'local', category: 'OBRA' },
    { id: 'la-abolicion-de-la-esclavitud', title: 'LA ABOLICIÓN DE LA ESCLAVITUD', image: abolicion, source: 'local', category: 'OBRA' },
    { id: 'la-era-de-la-transmodernidad', title: 'LA ERA DE LA TRANSMODERNIDAD', image: eraTrans, source: 'local', category: 'OBRA' },
    { id: 'la-evolucion-del-hombre', title: 'LA EVOLUCIÓN DEL HOMBRE', image: evolucionHombre, source: 'local', category: 'OBRA' },
    { id: 'la-evolucion-de-mexico', title: 'LA EVOLUCIÓN DE MÉXICO', image: evolucionMexico, source: 'local', category: 'OBRA' },
    { id: 'la-persistencia-de-la-memoria', title: 'LA PERSISTENCIA DE LA MEMORIA', image: persistencia, source: 'local', category: 'OBRA' },
    { id: 'letras-tecnm-celaya-1', title: 'LETRAS TECNM EN CELAYA, CAMPUS I', image: letrasTec, source: 'local', category: 'OBRA' },
    { id: 'lince', title: 'LINCE', image: lince, source: 'local', category: 'OBRA' },
    { id: 'lince-de-cantera', title: 'LINCE DE CANTERA', image: linceCantera, source: 'local', category: 'OBRA' },
    { id: 'lince-poligonal', title: 'LINCE POLIGONAL', image: lincePoligonal, source: 'local', category: 'OBRA' },
    { id: 'los-enemigos-del-sol', title: 'LOS ENEMIGOS DEL SOL', image: enemigosSol, source: 'local', category: 'OBRA' },
    { id: 'naturaleza-cultura-y-tecnologia', title: 'NATURALEZA, CULTURA Y TECNOLOGÍA', image: naturaleza, source: 'local', category: 'OBRA' },
    { id: 'orgullo-lince', title: 'ORGULLO LINCE', image: orgulloLince, source: 'local', category: 'OBRA' },
    { id: 'prometeo', title: 'PROMETEO', image: prometeo, source: 'local', category: 'OBRA' },
    { id: 'quetzalcoatl-1', title: 'QUETZALCÓATL (1)', image: quetz1, source: 'local', category: 'OBRA' },
    { id: 'quetzalcoatl-2', title: 'QUETZALCÓATL (2)', image: quetz2, source: 'local', category: 'OBRA' },
    { id: 'quijote', title: 'QUIJOTE', image: quijote, source: 'local', category: 'OBRA' },
    { id: 'quijote-contra-molino', title: 'QUIJOTE CONTRA MOLINO DE VIENTO', image: quijoteContra, source: 'local', category: 'OBRA' },
    { id: 'quijote-y-sancho', title: 'QUIJOTE Y SANCHO PANZA', image: quijoteSancho, source: 'local', category: 'OBRA' },
    { id: 'symbolum-lince', title: 'SYMBOLUM LINCE', image: symbolum, source: 'local', category: 'OBRA' },
    { id: 'tecnologia-y-cultura', title: 'TECNOLOGÍA Y CULTURA: HACIA EL HOMBRE UNIVERSAL', image: tecnologia, source: 'local', category: 'OBRA' },
    { id: 'vitrina-de-trofeos', title: 'VITRINA DE TROFEOS', image: vitrina, source: 'local', category: 'OBRA' }
];