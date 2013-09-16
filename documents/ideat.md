Käytännön asioita
=================
# Pakolliset
#### Haku, johon voi syöttää hakuehdon (tai valita vaihtoehdoista) jonka perusteella järjestelmä palauttaa henkilöt, joilla on aiheeseen liittyvää relevanttia osaamista. Esim. hakuehto ”Liferay” palauttaa henkilöt, joilla on Liferay-osaamista.
  - Otetaan huomioon käyttöliittymän suunnittelussa.

#### Osaamisalueiden selailu, sama kuin edellä, mutta henkilöitä voi hakea osaamisia selailemalla.
  - Triviaalia.

#### Järjestelmään voi syöttää uusia henkilöita ja uusia osaamisia.
  - Kaikki pystyy luomaan oman tunnuksen ja rekisteröitynyt käyttäjä voi lisätä
    uusia osaamisia. Mahdollisesti LinkedIn-importtaus.

#### Järjestelmässä on autentikointi.
  - Sisäinen autentikaatio, myöhemmin integrointi jos mahdollista.

#### Osaamisesta pitää olla määriteltävissa osaamisen taso (miten? kokemus kuukausina? tms?) ja osaamisen tasoja on voitava päivittää.
  - Oma mielipide omasta osaamisesta 1-5, Oma kiinnostus 1-5?, kokemus
    projekteissa?

#### Järjestelmää käytetään Web-selaimella.
  - Pääasiassa tehdään selaimille.

#### Järjestelmä toimii myös mobiililaitteissa (tabletit, puhelimen selain)
  - Ryhmältä löytyy monenlaisia tabletteja ja puhelimia testausta varten. Nämä
    otetaan huomioon jo suunnitteluvaiheessa.

#### Projektissa käytetään ketterää menetelmää (Scrum, Kanban)
  - Gofore tarjoaa -> Lisenssi AgileZeniin 6kk (174e), muuten trelloa. (Kanban)

#### Järjestelmästä saa näkyviin koko yrityksen teknologiakartan (mitä teknologioita ja minkä tasoista osaamista firmassa on)
  - Taulukko, hienot graafit, mitä muuta?

# Optionaaliset
#### Työkalun toteutuksessa käytetään joitakin seuraavista teknologioista: Scala, Play, Grails, Clojure, Node.js, AngularJS, Handlebars.js, Mustache, Meteor, Ember.js, Backbone.js. Spray, Akka, Java+Spring/Guice
  - MongoDB
  - Mongoose, Node, Express
  - AngularJS (Bootstrap, LessCss)

#### Työkalun toteutuksessa ei käytetä PHP:tä eikä JBOSS:ia
  - EI KÄYTETÄ!

#### Työkalu integroituu jo käytössä oleviin Goforen järjestelmiin (Confluence, JIRA , PlanMill, jne.).
  - Miten?

#### Kuka tahansa voi päivittää mitä tahansa tietoja kunhan järjestelmään jää jälki kuka on tehnyt mitä (vähintään viimeisin muokkaaja).
  - Yksinkertainen muutosloki.

#### Osaamiseen voi liittää viitteitä projektiin, jossa osaamista on käyttänyt.
  - On otettu huomioon suunnittelussa.

#### Järjestelmässä on tallessa kaikki henkilön CV:hen liittyvä tieto.
  - Mitä kaikkea muuta haluatte CV:hen?

#### Järjestelmästä voi generoida henkilön CV:n automaattisesti.
  - Onnistuu!

#### Järjestelmän käyttöliittymä on responsiivinen.
  - Bootsrap on responsiivinen.

#### Järjestelmässä on mahdollisesti seuraavia käsitteitä: henkilö, osaaminen, teknologia, koulutus, tutkinto, kurssi, projekti, työpaikka, kiinnostus.
  - Kyllä.

#### Järjestelmä tukee henkilöstön osaamisen kehittämistä kiinnostuksen kohteiden kautta.
  - Visualisointi!

#### Järjestemästä voi seurata oman osaamisen kehittymistä.
  - Visualisointi!

#### Järjestelmässä voi antaa arvioita eri teknologioista (esim. tätä välinettä ei kannata käyttää, tämä on laadukas ja hyväksi havaittu, mihin soveltuu, jne.). Mallinnuksena esim. sanallinen sekä numeroarviointi.
  - Muutama kenttä lisää käyttäjän ja teknologian väliseen assosiaatioluokkaan.

#### Henkilöihin voi liittää tietoja projektitkuormituksista eri ajanjaksoilla.
  - Käyttäjän ja projektin väliseen assosiaatioluokkaan tiedot.

#### Järjestelmä tuottaa upeita graafeja, jotka auttavat henkilöstön osaamisen hallinnassa.
  - Ylettömän upeita visuaalisia epilepsiakohtauksen aiheuttavia psykedeelisiä
    tajunnanräjäytyspläjäyksiä!


Käyttötapauksia (älä katso tänne)
=================================

- Etsitään projektiin henkilöitä
  - Taitojen, kiinnostuksen ja kokemuksen mukaan
  - Henkilökohtaisia ominaisuuksia (harrastukset jne.)
  - Projektihistorian ylläpitäminen?
  - Sosiaaliset suhteet?

- Taidon ominaisuuksia
  - Osaamisen mallintamisen esimerkkejä
    - Vuosina
    - Numeerisena
    - Vapaamuotoinen

- Käyttäjäkunnat
  - Projektipäällikkö?
  - Muut käyttäjät (omat tiedot)

- LinkedIn integrointi käyttäjän luontiin
