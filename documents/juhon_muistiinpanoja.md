# Tekninen onnistuminen

Esim loppuesitystä varten tms

# AngularJS

- Ihan kiva mutta:
  - Monen asean toteuttaminen hienosti tarvii jQuery pluginin (koska angularille ei ole vastaavia palikoita)
- Ratkaisu
  - Toteutetiin usealle palikalle oma Angular directive
    silloin directive toimii välikappaleena Angular ja jQuery koodille
  - Valitettavan vaikeata ja virheherkkää.
    Vaatii varmaan noin 9kk kokemuksen Angularista (ja hitosti JS kokemusta)

- Autocomplete (kaksi erilaista, selectize.js)
- Graphit (jquery flot)

# Mongoose

- Tarjoaa middleware/hook funktiot
  pre('save', fn), post('save', fn)
  joilla koodia voidaan suorittaa ennen ja jälkeen kun tavaraa tallennetaaan, poistetaam tms tietokantaan
- Tarjoaa validation modelien datalle
- Valittevasti nämä eivät toimi mongon .update kanssa
- Ratkaisu
  - Kun mahdollista käytetään Mongoosen tapaa:
    - Etsi muutettava resurssi, findById
    - Nyt sivulla on model joka viittaa tuohon resurssiin
    - muokkaa model ja kutsu .save
  - Tällä ei kuitenkaan ole mahdollista muokata montaa dokumenttia kerrallaan
    tai monia muita hienoja juttuja jota mongon update:lla voi tehdä (mm. atomiset operaatiot)
    - update({_id: {$in: [1, 2]}, {$inc: {count: 2}})
