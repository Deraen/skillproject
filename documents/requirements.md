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

- HOHT - Heinkilöstön osaamisen hallinnan työkalu



#  Johdanto

## Tarkoitus ja laajuus
Tämän dokumentin tarkoitus on määritellä sovellukselta vaaditut toiminnallisuudet ja niiden prioriteetit. Vaatimusmäärittely on kohdistettu projektityöryhmän lisäksi muille sidosryhmille, joita ovat asiakas Gofore sekä Tietotekniikan projektityön kurssihenkilökunta. Vaatimuksessa esiintyvien määrittelyjen lähtökohdat ovat asiakkaan tarjoama perus- ja lisäominaisuuksien vaatimuslista sekä tapaamisten yhteydessä käydyt keskustelut. Tämän vuoksi dokumentti sisältää jo pidemmälle vietyjä määrittelyjä, jotka vastaavat osittain jo tehtyjä suunnitteluratkaisuja.

## Tuote
Tuote kulkee projektivaiheessa nimellä Henkilöstön osaamisen hallinnan työkalu, mikä on asiakkaan tarjoama nimi palvelulle ja on myöhemmin lyhennetty projektityöryhmän toimesta dokumentaatioissa nimeen viittaamisen helpottamiseksi HOHT:ksi. Tuotteen tarkoitus on palvella henkilöstön henkilökohtaisen osaamisen kehityksen työkaluna, mutta sitä tulee myös pystyä käyttämään liiketoiminnan tukemiseen sekä resursoinnin apuvälineenä. HOHT tulee Goforen sisäiseen käyttöön. Tuote on itsenäinen web-sovellus, jonka tietokanta ja tuotantoympäristö tulevat olemaan asiakkaan omilla palvelimilla. 


#  Yleinen kuvaus

## Toiminnallisuudet
Sovellus jakautuu kolmeen pääkokonaisuuteen: henkilöön (oma profiili), taitoon (esim. ohjelmointikieli, urheilulaji jne.) ja projektiin (sisältää mm. henkilöitä ja taitoja). Henkilö voi lisätä itselleen uusia taitoja ja muokata kiinnostusta, kokemusta ja omaa taitotasoaan kyseisessä taidossa. Lisäksi henkilö voi liittää itsensä projekteihin, jotka kartuttavat henkilön kokemusta esimerkiksi jonkin projektissa käytetyn taidon suhteen. Järjestelmästä voi hakea henkilöitä, taitoja ja projekteja. Henkilöitä voidaan myös selata tietyn taidon tai projektin mukaan. Sovellus käyttää henkilökohtaista autentikointia, eikä tietokannan sisältöä pääse käsittelemään tai hakuja suorittamaan ilman kirjautumista. 

## Käyttäjät
Loppukäyttäjinä toimivat Goforen työntekijät. Yrityksen henkilöstön koulutustaustan huomioonottaen voidaan olettaa, että kyseinen käyttäjäkunta koostuu kokeneista tietokoneen käyttäjistä. Järjestelmässä ei ole erikseen eri käyttäjäryhmiä, mutta tämän mahdollisuus on huomioitu jatkokehitysajatuksissa ja perustoiminnallisuuksien suunnitteluvaiheessa. Järjestelmän odotettu keskimääräinen käyttöaste viikossa on noin 0-5 tuntia käyttäjää kohden.

## Ympäristö ja suunnittelurajoitteet
HOHT on verkkoyhteyden yli toimiva web-sovellus, jota käytetään Internet-selaimella. Tuettuja selaimia ovat Mozilla Firefox, Opera, Google Chrome sekä Internet Explorer 9.0 ja sitä uudemmat versiot. Työpöytäselainten lisäksi käyttöliittymässä ja suorituskyvyssä tulee ottaa huomioon tabletit, älypuhelimet ja muut mobiililaitteet. Toteutuksessa käytetään moderneja web-tekniikoita, kuten JavaScriptiä. Tietokanta toteutetaan MongoDB:llä.


#  Toiminnalliset vaatimukset
Toiminnallisuudet jaetaan vaatimusmäärittelyssä kolmeen kategoriaan: pakollisiin perusominaisuuksiin, mahdollisesti toteutettaviin lisäominaisuuksiin sekä jatkokehitysajatuksiin. Alla listatut toiminnallisuudet ovat prioriteettijärjestyksessä. Projektityöryhmän toimesta kaikki perusominaisuudet tullaan implementoimaan ja lisäominaisuuksia prioriteettijärjestyksessä sen mukaan, miten projektin aikataulu sen sallii.

## Lista vaadituista ominaisuuksista

###Perusominaisuudet 
- Järjestelmässä on autentikointi; käyttäjät tekevät henkilökohtaisen käyttäjätunnuksen ja kirjautuvat sillä järjestelmään.
- Kerrallaan sisään kirjautuneiden käyttäjien lukumäärä ei ole rajattu.
- Kaikilla käyttäjillä on samat oikeudet tehdä muutoksia järjestelmään.
- Kaikista muutoksista jää lokimerkintä, mistä ilmenee ainakin muutoksen tehnyt käyttäjätunnus.
- Käyttöliittymän tulee olla responsiivinen, mikä vaikuttaa erityisesti hakutoiminnon luonteeseen.
- Henkilön profiiliin liittyvät toiminnallisuudet:
	- Taitojen lisääminen omaan profiiliin ja vastaavasti niiden poistaminen profiilista.
	- Taitoihin liittyviin mittareihin (taitotaso [1-5], kiinnostus [1-5] ja kokemus [kk]) voi tehdä muutoksia omalta profiilisivulta.
	- Henkilön profiilissa on vapaamuotoinen, muokattava "oma kuvaus" -kenttä.
	- Henkilö voi liittää itsensä projektiin, muokata omaa assosiaatiotaan (esim. rooli, kuormitusaste) projektin välillä sekä poistaa itsensä projektista.
	- Henkilö voi lisätä itselleen profiilikuvan, muokata sitä ja poistaa sen
	- Taidon kokemusmäärä (kk) on mahdollista päivittää automaattisesti projektin kautta (projekti-henkilö-taito -assosiaatio)
	- Henkilö voi poistaa oman profiilinsa järjestelmästä.
- Taitoon liittyyvät toiminnallisuudet:
 	- Taidolla on nimi ja joukko kyseiseen taitoon liittyviä tageja (esim. ohjelmointikieli, urheilulaji jne.).
 	- Kuka tahansa voi lisätä järjestelmään uuden taidon, muokata olemassa olevia taitoja tai poistaa taidon järjestelmästä.
 	- Yksittäistä taitoa voi kommentoida tarkoituksena jakaa omia kokemuksia tai muuta hyödyllistä tietoa muiden käyttäjien kesken.
 	- Yksittäisen taidon tiedoista näkee projektit ja henkilöt, joilla on yhteys taitoon (taito liitetty projektiin, henkilö lisännyt taidon omaan profiiliinsa). 
- Projektiin liittyvät toiminnallisuudet:
	- Kuka tahansa voi luoda uuden projektin, muokata projektin tilaa ja poistaa projektin.
	- Projektilla on nimi ja listat henkilöistä ja taidoista.
		- Yksittäisen projektin tiedoista näkee henkilöt ja taidot, jotka on liitetty kyseiseen projektiin. 	
	- Projektilla on alku- ja loppupäivämäärä ja/tai tila (projektin vaihe).
- Haku:
	- Järjestelmästä voi hakea henkilöitä, projekteja ja taitoja
	- Hakutuloksia pystyy järjestämään eri attribuuttien mukaan
	- Haussa hyödynnetään tageja tulosten rajaamisessa sekä hakusanan automaattista täydennystä
- Tietokannan ylläpitämää tietoa ja statistiikkaa voi tarkastella visuaalisesti graafien ja taulukoiden avulla.

###Lisäominaisuudet:
- Taitoihin liittyen toteutetaan Merge-toiminto, jonka avulla taitoja voidaan yhdistää saman kokonaisuuden alle.
	- Tarve tälle voi olla esimerkiksi kirjoitusvirhe taidon nimessä sitä lisättäessä tietokantaan.
- Henkilö voi lisätä, muokata ja poistaa suoritettuja koulutuksia, kursseja ja sertifikaatteja.
	- Koulutuksilla, kursseilla ja sertifikaateilla voi olla yhteys järjestelmässä oleviin taitoihinn tai projekteihin.
- Henkilö voi täydentää omaa työhistoriaansa (aiemmat työpaikat, muut ulkoiset ja itsenäiset projektit).
- Omasta profiilista voi generoida Goforen sisäistä mallia mukaileva CV PDF-formaatissa.
- Generoitua CV:tä voi muokata ennen sen tulostamista tai tiedostoon tallentamista.
	- Muokkauksia ei tallenneta henkilön profiiliin.
- Henkilö voi asettaa itselleen tavoitteen tietyn taidon kehityksessä.
	- Tavoite voi olla taitotason arvon (1-5) korottaminen, kokemuksen hankkiminen (kk) tai osallistuminen projektiin tai koulutukseen, jossa kyseistä taitoa hyödynnetään.
	
###Jatkokehitysajatukset:
- Tavoitteet yhtiön tasolla
	- Esim. tietyn taidon osaajia tarvittaisiin vuoteen x mennessä n kappaletta.
- HOHT integroituu muihin Goforen käyttämiin järjestlemiin.
- Eri käyttäjäryhmien implementointi
	
## Käyttötapaukset
**Nimi:** Rekisteröityminen

**Tuloehdot:** Käyttäjällä on pääsy järjestelmän verkkosivulle.

**Kuvaus:** Käyttäjä menee järjestelmän pääsivulle. Hän painaa "Rekisteröidy"-linkkiä, josta aukeaa rekisteröitymissivu. Käyttäjä syöttää sähköpostiosoitteensa, nimensä ja salasanan. Käyttäjä painaa "Rekisteröidy"-nappia. Järjestelmä ilmoittaa, että tunnukset on luotu.

**Poikkeukset:** Annetulla sähköpostilla on jo luotu tunnukset. Järjestelmä ilmoittaa tästä.

**Lopputulos:** Käyttäjällä on palveluun tunnukset, joilla hän voi jatkossa kirjautua sisään.


----------


**Nimi:** Kirjautuminen

**Tuloehdot:** Käyttäjällä on tunnukset järjestelmään.

**Kuvaus:** Käyttäjä menee mille tahansa järjestelmän sivulle ja kirjautumispalkki on näkyvissä. Käyttäjä kirjoittaa sähköpostiosoitteensa ja salasanansa kenttiin ja painaa "Kirjaudu"-nappia.

**Poikkeukset:** Käyttäjän antamaa sähköpostia ei ole tietokannassa. Järjestelmä ilmoittaa, että sähköpostilla ei ole olemassa tunnuksia.
Salasana ei vastaa olemassaolevaa, annettua sähköpostiosoitetta. Järjestelmä ilmoittaa, että salasana on väärä.

**Lopputulos:** Käyttäjä on kirjautunut sisään ja voi selata ja muokata tietoja.


----------


**Nimi:** Taidon lisääminen

**Tuloehdot:** Käyttäjä on kirjautunut järjestelmään.

**Kuvaus:** Käyttäjä menee sivulle, jolla taidot listataan. Käyttäjä painaa "Lisää taito" -nappia, jolloin hän pääsee lomakkeeseen. Hän täyttää taidon logon urlin, nimen, kuvauksen ja lisää kategoriatageja, jotka kertovat, minkä tyyppisestä taidosta on kyse. Käyttäjä painaa "Lisää"-nappia ja järjestelmä kertoo, että uusi taito lisättiin onnistuneesti.

**Poikkeukset:** Vastaava taito on jo olemassa. Järjestelmä ehdottaa, että käyttäjän tekemät muutokset yhdistetään jo olemassa olevan taidon kanssa.

**Lopputulos:** Käyttäjän luoma taito on tallennettuna järjestelmään. Käyttäjän sähköposti näkyy taidon viimeisimpänä muokkaajana.


----------


**Nimi:** Taitojen selaaminen ja muokkaaminen

**Tuloehdot:** Käyttäjä on kirjautunut järjestelmään. Taitoja on lisätty.

**Kuvaus:** Käyttäjä menee sivulle, jolla taidot on listattuna. Käyttäjä silmäilee, mitä taitoja on olemassa ja haluaa tutustua tarkemmin yhteen. Hän painaa taidon kohdalla, ja pääsee taitonäkymään. Käyttäjä näkee yleisien taitoon liittyvien tietojen lisäksi oman kokumuksensa ja kiinnostuksensa kyseisen taidon suhteen. Hän haluaa muokata taidon kuvausta, joten hän menee muokkaustilaan, muokkaa tekstiä ja tallentaa muutokset. Lisäksi hän haluaa lisätä taidon itselleen opittavaksi. Hän muokkaa kiinnostus-kohtaan arvon ja tallentaa muutoksen.

**Poikkeukset:** Käyttäjä poistuu sivulta tallentamatta muutoksia. Järjestelmä kysyy, haluaisiko käyttäjä tallentaa tiedot.
Käyttäjällä on jo kyseinen taito yrittäessään lisätä sitä. Järjestelmä ilmoittaa tästä.

**Lopputulos:** Muutokset ovat tallessa järjestelmässä. Käyttäjän sähköposti näkyy taidon viimeisimpänä muokkaajana. Käyttäjälle lisätty taito näkyy myös hänen profiilissaan.


----------


**Nimi:** Profiilin muokkaaminen

**Tuloehdot:** Käyttäjä on kirjautunut järjestelmään.

**Kuvaus:** Käyttäjä valitsee millä tahansa sivulla kirjautumispalkista oman profiilisivunsa. Käyttäjä näkee perustietoja itsestään, taitonsa, kokemuksensa ja projektinsa. Käyttäjä huomaa perustiedoissaan virheen, menee muokkaustilaan, korjaa sen ja tallentaa. Käyttäjä haluaa lisätä itselleen taidon. Hän kirjoittaa taitohakukenttään halutun taidon nimen, ja painaa nappulaa, joka lisää taidon hänelle. Sen jälkeen hän voi muokata osaamis- ja kiinnostustasojaan taidon suhteen.

**Poikkeukset:** Jonkun tiedon tallentaminen ei onnistunut.

**Lopputulos:** Muutokset ovat tallessa järjestelmässä. Käyttäjän sähköposti näkyy taidon viimeisimpänä muokkaajana.


----------


**Nimi:** Henkilöhaku taitojen perusteella

**Tuloehdot:** Käyttäjä on kirjautunut järjestelmään.

**Kuvaus:** Projektipäällikkö (joka on järjestelmässä peruskäyttäjä niin kuin kaikki) haluaa löytää projektiinsa tiettyä taitoa osaavan henkilön. Hän menee haku-toimintoon ja kirjoittaa hakukenttään taidon ja valitsee sen kriteeriksi. Lisäksi hän merkkaa, että hakee henkilöitä. Hän haluaa erityisesti henkilön, jolla ei ole paljoa kokemusta taidosta, mutta on suuri kiinnostus oppia se, joten hän tekee sen mukaiset säädöt hakuun. Haku tarjoaa heti ehdotuksia, kun käyttäjä lisäilee hakukriteerejä. Projektipäällikkö haluaa tarkastella parhaimpia osumia tarkemmin ja painaa osumaa nähdäkseen kyseisen henkilön profiilisivulla olevia tietoja.

**Poikkeukset:** Käyttäjä kirjoittaa taidon eri tavalla kuin se on tallennettuna järjestelmään. Haku tarjoaa samankaltaisia taitoja, joista käyttäjä voi valita oikean.

**Lopputulos:** Käyttäjä on löytänyt kriteeriensä mukaan parhaan ehdokkaan projektiin.


----------


**Nimi:** Yrityksen osaamisen tarkastelu

**Tuloehdot:** Käyttäjä on kirjautunut järjestelmään.

**Kuvaus:** Käyttäjä haluaa nähdä kuinka paljon yrityksessä on tietyn taidon osaavia ja kuinka moni haluaa oppia sitä. Hän hakee taidon haulla tai listauksesta ja menee taidon sivulle. Sieltä hän voi valita taidon statistiikat näkyviin. Käyttäjä haluaa myös nähdä mitä kaikkia taitoja koko yrityksessä on ja missä suhteessa. Hän menee statistiikka-sivulle ja valitsee haluamansa tilaston. Käyttäjä näkee datan diagrammeina tai graafeina.

**Poikkeukset:** -

**Lopputulos:** Käyttäjä näkee haluamansa tiedon selkeässä muodossa.


----------

#  Käyttöliittymä
Koska lopputuote on web-palvelu, käyttöliittymä on siinä hyvin olennainen osa. Palvelu toteutetaan yhden sivun sovelluksena, jossa kaikki lataukset tapahtuvat selaimen pysyessä samalla sivulla. Tässä kappaleessa käydään läpi ensin käyttöliittymän yleiset piirteet, sitten kirjautumattoman käyttäjän näkymän ja lopuksi varsinaisessa käytössä vastaan tulevat näkymät, joissa käyttäjä on kirjautuneena.

## Yleisesti
Joka näkymässä on kiinteänä osana sivun ylälaidassa valikkopalkki. Sen vasemmassa laidassa on päätason navigaatio ja oikeassa laidassa kirjautuminen ja rekisteröitymissivulle vievä linkki. Jos käyttäjä on kirjautuneena, oikealla näytetään sen merkiksi käyttäjänimi, jota klikkaamalla saa auki käyttäjään liittyvät toiminnot kuten profiilisivun avaaminen ja uloskirjautuminen.

## Kirjautumattoman etusivu
Sivulla näytetään selkeitä pienennettyjä kuvakaappauksia palvelun käytetyimmistä ominaisuuksista, siten että ne ovat välittömästi tottuneiden käyttäjien tunnistettavissa. Lisäksi sivulla on suurikokoinen otsikko, joka kertoo palvelun nimen, ja sen alla lyhyt kuvaus palvelun käyttötarkoituksista, jotta ensi kertaa sivulla vieraileva käyttäjä tajuaa, minne on saapunut.
![Etusivu sisäänkirjautumattoman käyttäjän näkökulmasta](/ui_pics/frontpage_loggedout.png)

## Rekisteröityminen
Rekisteröitymissivu on askeettinen sisältäen pelkästään lomakkeen tietojen syöttämistä varten. Lomakkeessa kysytään vain aivan minimaaliset perustiedot kuten sähköpostiosoite, nimi ja haluttu salasana. Lomakkeen kentät näyttävät käyttäjälle reaaliajassa tiedon siitä, onko niihin syötetty validia tietoa vaihtamalla taustavärikseen punaista tai virheää asianmukaisesti ja tarjoamalla tooltipin siitä, mikä on vialla. Rekisteröitymisen onnistuttua käyttäjä ohjataan takaisin kirjautumattoman etusivulle, jossa kiitetään rekisteröitymisestä ja kehoitetaan kirjautumaan.
![Rekisteröitymissivu](/ui_pics/register.png)

## Kirjautuneen etusivu
Kirjautuneelle käyttäjälle etusivu ei tarjoa juurikaan informaatiota, vaan toimii ponnahduslautana eri toimintoihin. Siellä on suurin kuvakkein varustettuna koko navigaatio mahdollisine alakohtineen.
![Etusivu sisäänkirjautuneen käyttäjän näkökulmasta](/ui_pics/frontpage_loggedin.png)

## Profiilisivu
Käyttäjäprofiili on järjestelmän keskeisin sivu. Se yrittää olla mahdollisimman analoginen Goforella käytettävän CV-mallin kanssa, jotta käyttäjät osaisivat etsiä tietoa heti oikeasta paikasta. Sen ylälaidassa näytetään käyttäjän määrittämä profiilikuva, jonka vieressä on käyttäjän nimi pääotsikkona ja sen alla toiminimike. Näiden alla on käyttäjän vapaa kuvaus itsestään.

Valtaosa sivusta koostuu taulukoista, joissa on listattuna käyttäjän osaamista ja sen konkretisointia. Ensin listataan käyttäjän projektikokemus ja projekteissa käyttämät teknologiat, sitten työhistoria, koulutus, sertifikaatit, teknologiaosaaminen ja lopuksi kielitaito. Osaamisessa ja kielitaidossa on esitettynä myös osaamistaso, kokemus ja käyttäjän mielenkiinto taitoa kohtaan.

Kaikille käyttäjän osaamisille on suora muokkaus- ja poistomahdollisuus profiilisivulla.
![Profiilisivu](/ui_pics/profile.png)

## Taitojen listaus
Näkymä kuuluu palvelun käytetyimpien sivujen joukkoon. Siellä on heti ensimmäisenä vapaa hakukenttä, josta palveluun syötettyjä taitoja voi suodattaa näkyviin halutuilla kriteereillä. Hakupalkissa on myös nappula, josta saa kehittyneet hakutoiminnot ponnahtamaan esiin ja piiloon. Kehittyneessä haussa on esillä useampia kenttiä ja ne muokkaavat varsinaisen hakupalkin tekstin sisältöä vastaamaan niistä luotua yhteistä hakuehtoa.

Hakupalkin alla on nappi, josta saa uuden taidon lisäämisen lomakkeen esiin ja piiloon. Syöttämällä siihen taidon ja painamalla lisäämisnappia uusi taito on syötetty järjestelmään ja näkyy taitojen taulukkolistauksessa, mikäli hakukriteerit sen sallivat.

Pohjimmaisena sivulla on listaus järjestelmään syötetyistä taidoista. Mikäli hakukenttään on syötetty jotain, taulukkolistaus näyttää vain hakukriteerit täyttävät taidot. Listauksessa taidoista näytetään niihin liitetty logo, nimi, tagit ja vapaa tekstikuvaus. Kunkin taidon nimi toimii linkkinä yksittäisen taidon sivulle. Taulukko on järjestettävissä kunkin sarakkeen suhteen.
![Taitojen listaussivu](/ui_pics/skill_list.png)

## Yksittäinen taito
Taitoa tarkastellessa siitä näytetään käyttäjän profiilisivun kaltaisesti ylhäällä logo ja otsikkona sen nimi. Taidon kuvaus on kokonaisuudessaan näiden alla, ja sen alla on nappi, josta taidon voi lisätä omaan osaamiseensa. Kun taito on lisätty käyttäjälle, tämä tälle näkyy lomake, jolla hän voi taitosivulta käsin muuttaa omaa suhdettaan taitoon: esimerkiksi numeroarvoisesti osaamista ja mielenkiintoa. Käyttäjällä on lisäksi nappi, josta hän voi ottaa taidon pois omasta osaamisestaan.
![Yksittäisen taidon sivu](/ui_pics/skill.png)

## Projektien listaus
Projektilista on hyvin samankaltainen kuin osaamislista. Ylhäällä on hakukenttä, josta saa napilla kehittyneen haun esiin. Haun alla on mahdollisuus ponnauttaa projektinlisäyslomake esiin. Alimpana on taulukkolistaus hakukriteerit täyttävistä projekteista alkamis- ja loppumisajankohtineen sekä kuvauksineen. Projektin nimi toimii linkkinä yksittäisen projektin sivulle.
![Proektien listaussivu](/ui_pics/project_list.png)

## Yksittäinen projekti
Projektisivulla on projektin nimen alla lueteltu määritelmätyylisesti sen määrämuotoiset tiedot: alkamis- ja loppumisajankohta sekä kuvaus. Näiden jälkeen on taulukko, jossa listataan kaikki projektissa mukana olleet käyttäjät ja heidän projektissa käyttämänsä teknologiat. Lopuksi on taulukkolistaus projektin teknologioista ja vapaa kuvaus niiden käytöstä projektissa. Kaikista taitojen nimistä pääsee taitosivuille ja käyttäjien nimistä käyttäjäprofiileihin.
![Yksittäisen projektin sivu](/ui_pics/project.png)


#  Laatuvaatimukset
Järjestelmän tärkeimmät laatuvaatimukset ja -tavoitteet on esitelty seuraavissa aliluvuissa.

##  Käytettävyys
Palvelun tulee olla helposti käytettävä ja nopeasti opittava. Käyttäjillä oletetaan olevan perustaidot tietotekniikasta, joten aivan perusasioita palvelussa ei tarvitse opastaa. Niiden tulee olla intuitiivisesti ymmärrettävissä. Tavallisimmista ratkaisuista poikkeaviin toimintoihin liitetään ohjetoiminto.
Verkkosovelluksesta tehdään responsiivinen, jotta käyttökokemus on miellyttävä tietokoneen lisäksi myös muilla laitteilla, kuten älypuhelimilla ja tableteilla.
Käytettävyyttä mitataan käytettävyystesteillä. Testiryhmänä toimii palvelun loppukäyttäjiä vastaava käyttäjäryhmä. Tavoitteena on saada palvelu tilaan, jossa kaikki käyttäjätesteissä ilmenneet vakavat ongelmat on korjattu. Lisäksi tavoitteena on, että vähintään 80 % testiryhmästä pitää palvelun käyttöä helppona ja nopeana.

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
Kun tuote on valmis, vähintään kaikki perustoiminnallisuudet on implementoitu ja niiden on testattu toimivan oikein sekä asiakkaan odottamalla tavalla. Joitain ensimmäisen vaatimuslistauksen lisäominaisuuksia on jo nostettu perusominaisuuksiin suunnittelun alkuvaiheissa (katso luku Toiminnalliset vaatimukset).


# Avoimet kysymykset
- Projektin ja henkilön välisen assosiaation sisältämä tieto
	- Esiin tulleet ajatukset: henkilön kuormitusaste (tunteina viikossa?), rooli projektissa
- Missä muodossa ja mitä dataa tulee pystyä tarkastelemaan visuaalisten graafien kautta?
- Lisäominaisuus, osaamisen tavoitteen määrittely:
	- Taitoon liittyvien arvojen nostaminen? Avoin kommenttikenttä tavoitteille?


# Lähteet

1. Gofore - Henkilöstön osaamisen hallinnan työkalu, perusvaatimukset. Saatavilla: http://gofore.com/2013-2014-tietotekniikan-projektityo/

