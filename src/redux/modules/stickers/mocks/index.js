// @flow
import sunday from 'src/res/stickers/days/sunday.png'
import monday from 'src/res/stickers/days/monday.png'
import tuesday from 'src/res/stickers/days/tuesday.png'
import wednesday from 'src/res/stickers/days/wednesday.png'
import thursday from 'src/res/stickers/days/thursday.png'
import friday from 'src/res/stickers/days/friday.png'
import friday2 from 'src/res/stickers/days/friday2.png'
import saturday from 'src/res/stickers/days/saturday.png'
import lunes from 'src/res/stickers/days/lunes.png'
import martes from 'src/res/stickers/days/martes.png'
import miercoles from 'src/res/stickers/days/miercoles.png'
import jueves from 'src/res/stickers/days/jueves.png'
import viernes from 'src/res/stickers/days/viernes.png'
import sabado from 'src/res/stickers/days/sabado.png'
import domingo from 'src/res/stickers/days/domingo.png'
import saturdayDisco from 'src/res/stickers/days/saturday-disco.png'
import sundayFunday from 'src/res/stickers/days/sunday-funday.png'
import modayClock from 'src/res/stickers/days/monday-clock.png'
import fryday from 'src/res/stickers/days/fryday.png'
import mondayCup from 'src/res/stickers/days/monday-cup.png'
import saturdayNight from 'src/res/stickers/days/saturday-night.png'
import wednesdayCamel from 'src/res/stickers/days/wednesday-camel.png'
// cats
import cat01 from 'src/res/stickers/cat/cat01.png'
import cat02 from 'src/res/stickers/cat/cat02.png'
import cat03 from 'src/res/stickers/cat/cat03.png'
import cat04 from 'src/res/stickers/cat/cat04.png'
import cat05 from 'src/res/stickers/cat/cat05.png'
import cat06 from 'src/res/stickers/cat/cat06.png'
import cat07 from 'src/res/stickers/cat/cat07.png'
import cat08 from 'src/res/stickers/cat/cat08.png'
import cat09 from 'src/res/stickers/cat/cat09.png'
// others
import extraterrestrialAlien from 'src/res/stickers/others/extraterrestrialAlien.png'
import hearNoEvilMonkey from 'src/res/stickers/others/hearNoEvilMonkey.png'
import japaneseGoblin from 'src/res/stickers/others/japaneseGoblin.png'
import japaneseOgre from 'src/res/stickers/others/japaneseOgre.png'
import pileOfPoo from 'src/res/stickers/others/pileOfPoo.png'
import seeNoEvilMonkey from 'src/res/stickers/others/seeNoEvilMonkey.png'
import skull from 'src/res/stickers/others/skull.png'
import speakNoEvilMonkey from 'src/res/stickers/others/speakNoEvilMonkey.png'


const stickersMock = [
  {
    id: 1,
    name: 'sunday',
    tags: 'sunday domingo dia',
    source: sunday,
  },
  {
    id: 2,
    name: 'monday',
    tags: 'monday lunes day dia',
    source: monday,
  },
  {
    id: 3,
    name: 'tuesday',
    tags: 'tuesday martes day dia',
    source: tuesday,
  },
  {
    id: 4,
    name: 'wednesday',
    tags: 'wednesday miercoles day dia',
    source: wednesday,
  },
  {
    id: 5,
    name: 'thursday',
    tags: 'jueves thursday day dia',
    source: thursday,
  },
  {
    id: 6,
    name: 'friday',
    tags: 'viernes friday dia day',
    source: friday,
  },
  {
    id: 7,
    name: 'friday2',
    tags: 'friday viernes dia day',
    source: friday2,
  },
  {
    id: 8,
    name: 'lunes',
    tags: 'monday lunes day dia',
    source: lunes,
  },
  {
    id: 9,
    name: 'martes',
    tags: 'tuesday martes day dia',
    source: martes,
  },
  {
    id: 10,
    name: 'miercoles',
    tags: 'wednesday miercoles day dia',
    source: miercoles,
  },
  {
    id: 11,
    name: 'jueves',
    tags: 'jueves thursday day dia',
    source: jueves,
  },
  {
    id: 12,
    name: 'viernes',
    tags: 'viernes friday dia day',
    source: viernes,
  },
  {
    id: 13,
    name: 'sabado',
    tags: 'saturday sabado dia day',
    source: sabado,
  },
  {
    id: 14,
    name: 'domingo',
    tags: 'sunday domingo dia day',
    source: domingo,
  },
  {
    id: 15,
    name: 'saturday',
    tags: 'saturday sabado dia day',
    source: saturday,
  },
  {
    id: 16,
    name: 'saturday-disco',
    tags: 'saturday dico sabado dia day',
    source: saturdayDisco,
  },
  {
    id: 17,
    name: 'sunday-funday',
    tags: 'sunday funday domingo dia day',
    source: sundayFunday,
  },
  {
    id: 18,
    name: 'monday-clock',
    tags: 'monday clock reloj hora lunes tiempo dia day',
    source: modayClock,
  },
  {
    id: 19,
    name: 'fryday',
    tags: 'fryday viernes friday papa fritas french fries dia day',
    source: fryday,
  },
  {
    id: 20,
    name: 'monday-cup',
    tags: 'monday cup lunes taza cafe dia day',
    source: mondayCup,
  },
  {
    id: 21,
    name: 'saturday-night',
    tags: 'sabado saturday noche night dia day',
    source: saturdayNight,
  },
  {
    id: 22,
    name: 'wednesday-camel',
    tags: 'miercoles camel wednesday camello dia day',
    source: wednesdayCamel,
  },
  {
    id: 23,
    name: 'cat01',
    tags: 'cat gato TEARS OF JOY lagrimas de alegria',
    source: cat01,
  },
  {
    id: 24,
    name: 'cat02',
    tags: 'cat gato WRY SMILE SONRISA TORCIDA',
    source: cat02,
  },
  {
    id: 25,
    name: 'cat03',
    tags: 'cat gato sad triste',
    source: cat03,
  },
  {
    id: 26,
    name: 'cat04',
    tags: 'cat gato SMILING EYES OJOS SONRIENTES',
    source: cat04,
  },
  {
    id: 27,
    name: 'cat05',
    tags: 'cat gato CLOSED EYES OJOS CERRADOS',
    source: cat05,
  },
  {
    id: 28,
    name: 'cat06',
    tags: 'cat gato angry enojado furioso',
    source: cat06,
  },
  {
    id: 29,
    name: 'cat07',
    tags: 'cat gato HEART SHAPED EYES OJOS EN FORMA DE CORAZÓN',
    source: cat07,
  },
  {
    id: 30,
    name: 'cat08',
    tags: 'cat gato OPEN MOUTH BOCA ABIERTA',
    source: cat08,
  },
  {
    id: 31,
    name: 'cat09',
    tags: 'cat gato Surprised sorprendido terror',
    source: cat09,
  },
  {
    id: 32,
    name: 'extraterrestrial-alien',
    tags: 'extraterrestrial Alien marciano extraterreste',
    source: extraterrestrialAlien,
  },
  {
    id: 33,
    name: 'hear-no-evil-monkey',
    tags: 'monkey mono tapa oidos no evil',
    source: hearNoEvilMonkey,
  },
  {
    id: 34,
    name: 'japanese-goblin',
    tags: 'evil dialo careta mask red rojo',
    source: japaneseGoblin,
  },
  {
    id: 35,
    name: 'skull',
    tags: 'skull caravela hueso',
    source: skull,
  },
  {
    id: 36,
    name: 'skull',
    tags: 'monkey mono tapa boca speak no evil',
    source: speakNoEvilMonkey,
  },
  {
    id: 37,
    name: 'japaneseOgre',
    tags: 'evil diablo mask mascara antifaz',
    source: japaneseOgre,
  },
  {
    id: 38,
    name: 'pile-of-poo',
    tags: 'sorete  chocolate poo pile cagada',
    source: pileOfPoo,
  },
  {
    id: 39,
    name: 'skusee-no-evil-monkeyll',
    tags: 'monkey mono see tapa vista ojos eyes',
    source: seeNoEvilMonkey,
  },
]

export default stickersMock
