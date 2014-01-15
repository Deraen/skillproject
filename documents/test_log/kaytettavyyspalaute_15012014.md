Käytettävyystestauspalautteet (parsittu lista) 15.01.2014

# 1. Rekisteröitymis- ja kirjautumissivu
- Hyväksyy kaikenlaiset merkkijonot sähköpostiksi
    - [x] Tuotantoonviejä säätää asetukset
- Salasana min. 4 merkkiä, ehkä liian löyhä
    - [x] Tuotantoonviejän vastuulla säätää asetukset
- Salasanan kelpaamattomuudesta voisi antaa myös paremman virheviestin
    - [x] Niin voisi... ei kerkeä toteuttamaan
- Rekisteröityminen onnistui, vaikka toinen salasanakenttä jäi tyhjäksi
    - Edelliseen liittyen, sama onnistui myös salasanan palautuksessa
- Virheviesti ei kovin informatiivinen, jos yrittää rekisteröityä jo olemassaolevalla tunnuksella
    - [x] Selkeytetty hieman, mutta edelleen käytännössä näyttää MongoDB virheen suoraan
- Salasanan vaihtolomake (linkki) toimii vain ajoittain, ei oikein johdonmukaisuutta
    - [x] Olisikohan kyseessä ollut se että vain viimeisimmät spostin linkki toimii?
- "Palauta salasana" -> "Unohtuiko salasana?"
- Salasanan "palautuksen" sivulle ohjeteksti, esim. "Voimme lähettää sähköpostiisi linkin..."
    - [x] Juuri näinhän siinä lukeekin?
- "Palauta salasana" sivulle ei ole järkevää antaa "Kirjaudu" ja "Rekisteröidy" linkkejä. käyttäjä on
  tehnyt juuri toimenpiteen valitessaan "Unohtuiko salasana?" ja tähän reagoidan joko lähettämällä
  sähköpostiosoite tai "Peruuta". Sama pätee rekisteröitymissivulle.
    - [x] Korjattu
- Rekisteröityminen ei antanut mitään ilmoitusta. Aukeavan kirjautumissivun yläpuolella tulisi lukea
  tyyliin "Rekisteröinti onnistui. Kirjaudu nyt sisään." tms
- Salasanan vaihtaminen ei tarjoa vaihtoehtoa "peruuta"
    - [x] Korjattu

# 2. Käyttäjälistaus ja profiilisivu
- Kun käyttäjärajaus on tehty, käydään jossain toisessa näkymässä ja
  palataan takaisin, niin rajaus on aktiivisena, mutta itse rajauskentässä
  ei näy rajausehtoa
- Syntymäajan nykyinen arvo ei ole näkyvissä muokkaustilassa
- Kuvaus-kenttä vaatisi otsikon esim. "oma kuvaus"
    - [x] lisätty
- Syntymäajan virheilmoitus roikkuu mukana, vaikka virheellisen syötteen
  jälkeen annetaan validi syntymäaika
    - [x] Korjattu
- Ohjelma ei anna mitään ohjeistusta sen asian suhteen, että profiiliin
  voi lisätä itselle uuden taidon Taidot-välilehdestä, mutta uutta taitoa
  ei voi lisätä järjestelmään tältä sivulta
    - [x] Autocompletesta voi nyt siirtyä lisäämään uutta taitoa jos haluttua ei löytynyt
- "Muokkaa"-nappi on erittäin harhaanjohtava, kun ollaan Taidot- tai Projektit-
  välilehdellä, pitäisikö kenties näyttää vain Perustiedot-välilehdessä?
    - [x] Tämä saa olla.
- Osaamisen lisääminen on hieman hämmentävä dropdown-menu. Tyypillisesti tällainen olisi vaikka button
  "Lisää osaamisalue" joka avaisi buttonin tilalle jonkinlaisen valintatyökalun, jonka avulla voi lisätä
  osaamisen tai peruuttaa.
    - [x] Tämä on ominaisuus. Antaa olla, käyttäjän on helppo poistaa vahingossa lisäämänsä taito tms.
- Erillinen sivu oman profilinsa muokkausta varten on jokseenkin turha. Varsinkin kun nyt tuossa alussa
  on tuollainen hämmentävä tyhjä harmaa laatikko ja syntympäpäivä tyhjänä. Sen sijaan sivulla voisi olla
  vain suoraan kohdat missä painetaan "lisää kuvaus" ja lisättyjen tietojen yhteydessä olisi mahdollisuus
  niiden muokkaukseen.
    - [?] WTF?

# 3. Taitolistaus ja taidon sivu
- Peruuta-toiminto tuntuisi nollaavan kaikki kentät sen sijaan, että
  se peruuttaisi vain edelliset muutokset
    - [x] Pitäisi olla korjattu
- Rajauksen olisi hyvä olla case insensitive
- Muokkaustilassa pitäisi lukea "Taidon nimi" eikä "Nimi"
    - [?] Miksi?

# 4. Projektilistaus ja projektin sivu
- "Hae projektista"-tekstikentän ja "Uusi projekti"-napin voisi siirtää
  kauemmas toisistaan, ettei erehdy luulemaan tekstikenttää uuden lisättävän
  projektin nimeksi
    - [x] Toteutettu
- Muokkaustilassa pitäisi lukea "Projektin nimi" eikä "Nimi"
    - [?] Miksi?

# 5. Ryhmälistaus ja ryhmän sivu
- Ryhmään ei voi lisätä henkilöitä, ellei ryhmää ole vielä tallennettu
    - [x] Henkilöiden lisäys piiloitettu kunnes on tallennettu
- "Valitse"-napin tulisi muuttua ryhmälistausnäkymässä, kun kyseinen ryhmä
  on valittu aktiiviseksi
- Ryhmään voi lisätä henkilöitä myös muokkaustilan ulkopuolella?

# 6. Tagien ja projektiroolien hallinnointipaneeli
- Tagi ja Tagit-sanat pitäisi muuttaa Avainsanaksi, tällä hetkellä käyttöliittymässä on sen
  osalta epäjohdonmukaisuus
- Rooli ja Roolit-sanat pitäisi muuttaa Projektirooliksi
- Avainsanoja ja projektirooleja tulisi pystyä lisäämään järjestelmään
  niiden hallinnointipaneeleista
    - [?] miksi?

# 7. Yleiset kommentit
- Murupolku olisi ehkä tarpeellinen
- Päivämäärän syöttäminen tuskallista tämän hetkisellä toteutuksella
    - [?] Mikä toteutus? "Kai se on tuskallista kun ei ole toteutettu"... pitäisi varmaan..
- Kapeissa näkymissä taulukoiden otsikkorivien teksti menee päällekäin
- Tagien pyöristysgrafiikat rivittyvät. Miksi grafiikalla? Miksei display:inline-block +
  background-color + border-radius?
    - [x] Lisätty inline-block... kyllä se on border-radius ja background aina ollut
- Välillä käytetään napeissa browser localea, jolloin käyttöliittymä on sekä
  suomea että englantia
- Ohjeet joka sivulle!
- Varmistusdialogit taidon, projektin, ryhmän ja käyttäjän poistamiselle
- Hohto-etusivu, Oma nimi - Profiili ja käyttäjähaun kautta omaan nimeen meno vie kaikki
  samalle etusivulle. Hivenen hämmentävää mikä on esim. "Profiili" painikkeen merkitys,
  jos kerta etusivu on täysin sama.
    - [?] Pysyköön nyt niinkuin on
