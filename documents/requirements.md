---
title: 'Tietotekniikan projektityö, Ryhmä 4 - Vaatimusmäärittely'
author:
- name: Juho Teperi
  email: juho.teperi@tut.fi
- name: jdsaffsd
  email: dsfsdf
project: 'Henkilöstön osaamisen hallinnan työkalu'
---

# Määritelmät ja lyhenteet {.unnumbered}

- HOHT	Heinkilöstön osaamisen hallinnan työkalu
- UI	User interface
- Scrum	Agile software development framework


#  Johdanto
## Tarkoitus ja laajuus
- määritellään vaadittavat toiminnallisuudet ja niiden prioriteetit
- dokumentin kohderyhmä: projektyöryhmälle ja muille sidosryhmille
- vaatimuksten lähtökohdat kerätty asiakkaalta, jatkojalostettu ajatuksia
- 

Why was this document made and to whom.
This document should provide the product vision [1] and document high level requirements for the product. When describing the functions and user interface, make it clear to the reader what is the status of the requirements – are the fixed or still evolving.

## Tuote
- tuotteen nimi (toistaiseksi HOHT)
- tarkoitus: henkilöstön osaamisen hallintaan, liiketoiminnan tukemiseen, resursoinnin apuvälineenä
- asiakkaalta puuttuu kyseinen työkalu ja tarve sille on suuri
	- osasyy suurelle tarpeelle on yrityksen henkilöstömäärän nopea kasvu
- tuote tulee asiakkaan (Gofore) sisäiseen käyttöön
- ympäristö: web-työkalu. itsenäinen ohjelma, mahdolliset integraatiot muihin järjestelmiin. tuotantoympäristö on asiakkaan omilla palvelimilla

Name of the product.
What is the purpose of the product? What are its benefits?
For whom is the product developed (who is the customer)?
What is the environment: is the product independent or part of a larger whole? (using environment)

#  Yleinen kuvaus
- seuraavassa määritellään ohjelman toiminnallisuus, 

## Toiminnallisuudet
- 

Brief description of the product characteristics: what in general is meant to be developed?

## Käyttäjät
- Goforen työntekijät (kautta linjan tittelistä riippumatta)
	- taitavia tieskarin käyttäjiä
		-> ei erillisiä käyttäjäryhmiä järjestlemän sisällä
	- käyttätapaukset eroavat tittelistä riippuen
- keskimääräinen käyttöaste: n. kerran viikossa

Who will use the product? Describe the user types and groups by occupation, role (include administrative and other roles). What is the programs frequency of use (daily, hourly, once a week…), where do the users fall in the company organization, etc?

## Ympäristö ja suunnittelurajoitteet
- web-työkalu
	-> työpöytä, mobiililaitteet
		-> selain required
	-> tietokanta pyörii palvelimella ja asiakkaalla tulee olla pääsy verkon yli palvelimelle (palvelin-asiakasmalli)
- modernit tekniikat
	-> käytettävä oliokanta (mongodb) asettaa rajoitteita suunnitteluratkaisuissa (skeemat)
- tietokannan muodostama henkilörekisteri asettaa rajoitteet tietoturvan osalta
- kaikki valmiit komponentit ovat avoimen lähdekoodin kirjastoja
	-> luettelo frameworkien lisensseistä ja mahdollisesti niiden asettamista rajoitteista
	
Are there hardware or software constraints? If the product only works in a specified hardware or software setup, describe them here.

Are third party components used, what about their licensing?

Outline of the technologies that are used in the product – what is their purpose, how are they used.

Does your product have critical hardware, software or communication interfaces?  Briefly describe them here.

Do you need to follow certain standards?

#  Odotukset 
- tän vois ehkä poistaa?

What assumptions are made of the system.


#  Järjestelmävaatimukset
- toiminnallisuudet jaetaan kolmeen kategoriaan
- kaikki perusominaisuudet toteutetaan ja mahdolliset lisäominaisuudet prioriteettijärjestyksessä

- perusominaisuudet:
	- järjestelmään pystyy rekisteröitymään ja kirjautumaan sisään
	- henkilö
		- pystyy hakemaan
		- henkilön taidot ja kiinnostukset
			- taito- ja kiinnostustasot
		- henkilön projektit
		- kokemukset ja koulutukset
		- henkilötiedot (jollain tasolla)
	- taidot
		- pystyy hakemaan
		- taitojen selailu
		- henkilöiden selailu taitojen perusteella
		- projektien selailu taitojen perusteella
	- projektit
		- pystyy hakemaan
		- projektien selailu
		- henkilöiden selailu projektien perusteella
		- taitojen selailu projektien perusteella
	- haku (taidot, henkilöt, projektit)
	
	- monta käyttäjää kerrallaan kirjautuneena
	- kuka tahansa voi tehdä mitä tahansa
	- lokimerkinnät muutoksista
	- kauniit graafit järjestelmän statistiikasta
	- responsiivinen käyttöliittymä
	
- lisäominaisuudet:
	- integroituu muihin Goforen järjestelmiin (optional)
	- tallessa henkilön CV:hen liittyvät tiedot
	- automaattinen CV:n generointi
	- oman osaamisen kehitys -> graafit
	- arviot kielistä ja tekniikoista (numeerinen ja/tai sanallinen)
	- henkilöihin voidaan linkittää projektien tuomat työkuormat
	
- jatkokehitysajatukset:
	- achievements ???
	
- käyttötapauksia !!

Nimi: Rekisteröityminen
Tuloehdot: Käyttäjällä on pääsy järjestelmän verkkosivulle.
Kuvaus: Käyttäjä menee järjestelmän pääsivulle. Hän painaa "Rekisteröidy"-linkkiä, josta aukeaa rekisteröitymissivu. Käyttäjä syöttää sähköpostiosoitteensa, nimensä ja salasanan. Käyttäjä painaa "Rekisteröidy"-nappia. Järjestelmä ilmoittaa, että tunnukset on luotu.
Poikkeukset: Annetulla sähköpostilla on jo luotu tunnukset. Järjestelmä ilmoittaa tästä.
Lopputulos: Käyttäjällä on palveluun tunnukset, joilla hän voi jatkossa kirjautua sisään.

Nimi: Kirjautuminen
Tuloehdot: Käyttäjällä on tunnukset järjestelmään.
Kuvaus: Käyttäjä menee mille tahansa järjestelmän sivulle ja kirjautumispalkki on näkyvissä. Käyttäjä kirjoittaa sähköpostiosoitteensa ja salasanansa kenttiin ja painaa "Kirjaudu"-nappia.
Poikkeukset: Käyttäjän antamaa sähköpostia ei ole tietokannassa. Järjestelmä ilmoittaa, että sähköpostilla ei ole olemassa tunnuksia.
Salasana ei vastaa olemassaolevaa, annettua sähköpostiosoitetta. Järjestelmä ilmoittaa, että salasana on väärä.
Lopputulos: Käyttäjä on kirjautunut sisään ja voi selata ja muokata tietoja.

Nimi: Taidon lisääminen
Tuloehdot: Käyttäjä on kirjautunut järjestelmään.
Kuvaus: Käyttäjä menee sivulle, jolla taidot listataan. Käyttäjä painaa "Lisää taito" -nappia, jolloin hän pääsee lomakkeeseen. Hän täyttää taidon logon urlin, nimen, kuvauksen ja lisää kategoriatageja, jotka kertovat, minkä tyyppisestä taidosta on kyse. Käyttäjä painaa "Lisää"-nappia ja järjestelmä kertoo, että uusi taito lisättiin onnistuneesti.
Poikkeukset: Vastaava taito on jo olemassa. Järjestelmä ehdottaa, että käyttäjän tekemät muutokset yhdistetään jo olemassa olevan taidon kanssa.
Lopputulos: Käyttäjän luoma taito on tallennettuna järjestelmään. Käyttäjän sähköposti näkyy taidon viimeisimpänä muokkaajana.

Nimi: Taitojen selaaminen ja muokkaaminen
Tuloehdot: Käyttäjä on kirjautunut järjestelmään. Taitoja on lisätty.
Kuvaus: Käyttäjä menee sivulle, jolla taidot on listattuna. Käyttäjä silmäilee, mitä taitoja on olemassa ja haluaa tutustua tarkemmin yhteen. Hän painaa taidon kohdalla, ja pääsee taitonäkymään. Käyttäjä näkee yleisien taitoon liittyvien tietojen lisäksi oman kokumuksensa ja kiinnostuksensa kyseisen taidon suhteen. Hän haluaa muokata taidon kuvausta, joten hän menee muokkaustilaan, muokkaa tekstiä ja tallentaa muutokset. Lisäksi hän haluaa lisätä taidon itselleen opittavaksi. Hän muokkaa kiinnostus-kohtaan arvon ja tallentaa muutoksen.
Poikkeukset: Käyttäjä poistuu sivulta tallentamatta muutoksia. Järjestelmä kysyy, haluaisiko käyttäjä tallentaa tiedot.
Käyttäjällä on jo kyseinen taito yrittäessään lisätä sitä. Järjestelmä ilmoittaa tästä.
Lopputulos: Muutokset ovat tallessa järjestelmässä. Käyttäjän sähköposti näkyy taidon viimeisimpänä muokkaajana. Käyttäjälle lisätty taito näkyy myös hänen profiilissaan.

Nimi: Profiilin muokkaaminen
Tuloehdot: Käyttäjä on kirjautunut järjestelmään.
Kuvaus: Käyttäjä valitsee millä tahansa sivulla kirjautumispalkista oman profiilisivunsa. Käyttäjä näkee perustietoja itsestään, taitonsa, kokemuksensa ja projektinsa. Käyttäjä huomaa perustiedoissaan virheen, menee muokkaustilaan, korjaa sen ja tallentaa. Käyttäjä haluaa lisätä itselleen taidon. Hän kirjoittaa taitohakukenttään halutun taidon nimen, ja painaa nappulaa, joka lisää taidon hänelle. Sen jälkeen hän voi muokata osaamis- ja kiinnostustasojaan taidon suhteen.
Poikkeukset: Jonkun tiedon tallentaminen ei onnistunut.
Lopputulos: Muutokset ovat tallessa järjestelmässä. Käyttäjän sähköposti näkyy taidon viimeisimpänä muokkaajana.

Nimi: Henkilöhaku taitojen perusteella
Tuloehdot: Käyttäjä on kirjautunut järjestelmään.
Kuvaus: Projektipäällikkö (joka on järjestelmässä peruskäyttäjä niin kuin kaikki) haluaa löytää projektiinsa tiettyä taitoa osaavan henkilön. Hän menee haku-toimintoon ja kirjoittaa hakukenttään taidon ja valitsee sen kriteeriksi. Lisäksi hän merkkaa, että hakee henkilöitä. Hän haluaa erityisesti henkilön, jolla ei ole paljoa kokemusta taidosta, mutta on suuri kiinnostus oppia se, joten hän tekee sen mukaiset säädöt hakuun. Haku tarjoaa heti ehdotuksia, kun käyttäjä lisäilee hakukriteerejä. Projektipäällikkö haluaa tarkastella parhaimpia osumia tarkemmin ja painaa osumaa nähdäkseen kyseisen henkilön profiilisivulla olevia tietoja.
Poikkeukset: Käyttäjä kirjoittaa taidon eri tavalla kuin se on tallennettuna järjestelmään. Haku tarjoaa samankaltaisia taitoja, joista käyttäjä voi valita oikean.
Lopputulos: Käyttäjä on löytänyt kriteeriensä mukaan parhaan ehdokkaan projektiin.

Nimi: Yrityksen osaamisen tarkastelu
Tuloehdot: Käyttäjä on kirjautunut järjestelmään.
Kuvaus: Käyttäjä haluaa nähdä kuinka paljon yrityksessä on tietyn taidon osaavia ja kuinka moni haluaa oppia sitä. Hän hakee taidon haulla tai listauksesta ja menee taidon sivulle. Sieltä hän voi valita taidon statistiikat näkyviin. Käyttäjä haluaa myös nähdä mitä kaikkia taitoja koko yrityksessä on ja missä suhteessa. Hän menee statistiikka-sivulle ja valitsee haluamansa tilaston. Käyttäjä näkee datan diagrammeina tai graafeina.
Poikkeukset: -
Lopputulos: Käyttäjä näkee haluamansa tiedon selkeässä muodossa.

Nimi: 
Tuloehdot: 
Kuvaus: 
Poikkeukset: 
Lopputulos:

In this Chapter you will describe the high level functional requirements of your product. Requirements are described so that the reader will understand what needs to be implemented, what the product does and so that backlog can be mapped to requirements. It is not necessary to describe functions in such a detailed level that someone else would actually be able to implement them based on this document. The detail must be such though, that you as the developers and the customer will able to form a common understanding of what needs to be developed.

Requirements/functions should be described using, e.g. use cases, user stories or scenarios. Use sections for different types of functions.


# User interface -- Käyttöliittymä
- Masi, ota koppi
- näkymät ja niiden luonnokset

If user interface design is critical for your system, briefly sketch the main views/states here. Use example pictures of views, menus and dialogs, if possible and appropriate. Use subchapters for different views. Also describe the transitions between the views and the needed interactions for that. The description should be at the level that the reader will have an idea what the user interface will contain, what general design solutions are used and why, and that the team can create prototypes based on it. It should not go to such level of detail that the UI could be fully implemented based on the description.



#  Quality goals -- Laatuvaatimukset
Järjestelmän tärkeimmät laatuvaatimukset ja -tavoitteet on esitelty seuraavissa aliluvuissa.

(In this Chapter you will describe the quality requirements of your product and their associated goals. You should describe the quality requirements that are valid for YOUR product – each product has different emphasis on quality aspects. Remove those goals that do not apply for your product and add goals, if necessary (i.e.. maintainability, portability))


##  Käytettävyys
Palvelun tulee olla helposti käytettävä ja nopeasti opittava. Käyttäjillä oletetaan olevan perustaidot tietotekniikasta, joten aivan perusasioita palvelussa ei tarvitse opastaa. Niiden tulee olla intuitiivisesti ymmärrettävissä. Tavallisimmista ratkaisuista poikkeaviin toimintoihin liitetään ohjetoiminto.
Verkkosovelluksesta tehdään responsiivinen, jotta käyttökokemus on miellyttävä tietokoneen lisäksi myös muilla laitteilla, kuten älypuhelimilla ja tableteilla.
Käytettävyyttä mitataan käytettävyystesteillä. Testiryhmänä toimii palvelun loppukäyttäjiä vastaava käyttäjäryhmä. Tavoitteena on saada palvelu tilaan, jossa kaikki käyttäjätesteissä ilmenneet vakavat ongelmat on korjattu. Lisäksi tavoitteena on, että vähintään 80% testiryhmästä pitää palvelun käyttöä helppona ja nopeana.

##  Suorituskyky
Sivujen latautumisen vasteajan tulee olla enintään 0,1 sekuntia, jolloin käyttäjä kokee toiminnon välittömäksi. Hakutoiminnoissa vasteaika on enintään 1,0 sekunti. Tiedon yhteenkerääminen graafien piirtoa varten ei ole reaaliaikaista, vaan tiedot päivittyvät joka yö. Palvelun käytön oletetaan keskittyvän työaikaan, kello 6.00 ja 18.00 välille.
Goforella on tällä hetkellä noin 60 työntekijää, mutta se on kasvava yritys. Täten samanaikaisia käyttäjiä tulee voida olla 100 henkilöa kerrallaan. Kapasiteettia tulisi voida kasvattaa tarvittaessa.

##  Luotettavuus
Järjestelmän tulee olla luotettava etenkin oikean tiedon säilymisen kannalta. Kaikkien käyttäjän tekemien muutosten täytyy tallentua järjestelmään. Käyttäjälle on ilmoitettava, jos tieto ei tallentunut onnistuneesti ja mahdollistettava uusi tallentamisyritys ilman, että jo kirjoitettu mutta vielä tallentamaton tieto katoaa. Käyttäjältä on kysyttävä, haluaako hän tallentaa uudet tiedot, jos hän on poistumassa sivulta ilman onnistunutta tallennusta.
Käyttäjä ei voi rikkoa tietokantaa. Käyttäjä ei myöskään vahingossa saa poistaa tietoa. Etenkin isoissa kokonaisuuksissa, kuten taito tai henkilön profiili, tulee varmistaa, että tieto todella halutaan poistaa.
Järjestelmän käyttäjät ovat Goforen työntekijöitä, joten heidän oletetaan olevan hyväntahtoisia järjestelmää käyttäessään. Oletetaan siis, että kukaan ei tahallaan esimerkiksi poista tietoa, jota ei kuulu poistaa, tai lisää väärää tietoa.
Sähkökatkoksen, laitevian tai muun yllättävän syyn seurauksena tietokannan data ei saa kadota lopullisesti.

##  Tietoturva
Järjestelmään pitää rekisteröityä ja olla kirjautunut, jotta tietoja pääsee näkemään ja muokkaamaan. Tietojen viimeisimmästä muokkaajasta jää jälki.
Järjestelmää pääsee käyttämään vain Goforen työntekijät.

##  Ylläpito ja jatkokehitys
Jatkokehityksen ja koodin ylläpidon helpottamiseksi tuotteen koodin tulee olla luettavaa ja modulaarisesti kehitetty. Lisäominaisuudet on huomioitu jo perusominaisuuksien suunnittelu- ja implementointivaiheissa, jotta niiden lisääminen myöhemmin olisi kohtuullisen helppoa.
Nykyinen arkkitehtuuri, toiminnallisuus ja jatkokehitysajatukset on kuvattu dokumentaatiossa kattavasti, niin että uusikin työryhmä kykenisi jatkamaan projektia sujuvasti.
Järjestelmän datan ylläpitoa voi tehdä kuka tahansa kirjautunut käyttäjä.

##  Toiminnallisuudet
Kun tuote on valmis, vähintään kaikki perustoiminnallisuudet on implementoitu ja niiden on testattu toimivan oikein sekä asiakkaan odottamalla tavalla. Joitain ensimmäisen vaatimuslistauksen lisäominaisuuksia on jo nostettu perusominaisuuksiin suunnittelun alkuvaiheissa (katso luku Järjestelmävaatimukset).



# Avoimet kysymykset
- lisensointi

Are there things that still need to be checked with the customer? Functional requirements that are at status “maybe”? Things depending on user studies?

# References -- Viitteet

1. Scrum vision pattern: https://sites.google.com/a/scrumplop.org/published-patterns/value-stream-pattern-language/vision, 2013.

# Appendix A

- http://gofore.com/2013-2014-tietotekniikan-projektityo/

# Appendix B
If necessary
