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


In this Chapter you will describe the high level functional requirements of your product. Requirements are described so that the reader will understand what needs to be implemented, what the product does and so that backlog can be mapped to requirements. It is not necessary to describe functions in such a detailed level that someone else would actually be able to implement them based on this document. The detail must be such though, that you as the developers and the customer will able to form a common understanding of what needs to be developed.

Requirements/functions should be described using, e.g. use cases, user stories or scenarios. Use sections for different types of functions.

# User interface -- Käyttöliittymä
- Masi, ota koppi
- näkymät ja niiden luonnokset

If user interface design is critical for your system, briefly sketch the main views/states here. Use example pictures of views, menus and dialogs, if possible and appropriate. Use subchapters for different views. Also describe the transitions between the views and the needed interactions for that. The description should be at the level that the reader will have an idea what the user interface will contain, what general design solutions are used and why, and that the team can create prototypes based on it. It should not go to such level of detail that the UI could be fully implemented based on the description.



#  Quality goals -- Laatutavoitteet ???
- tavoitteet jaetaan seuraaviin kategorioihin:
	- käytettävyys, suorituskyky, luotettavuus, tietoturva, jatkokehitettävyys, ylläpito, toiminnallisuudet

In this Chapter you will describe the quality requirements of your product and their associated goals. You should describe the quality requirements that are valid for YOUR product – each product has different emphasis on quality aspects. Remove those goals that do not apply for your product and add goals, if necessary (i.e.. maintainability, portability)



##  Käytettävyys
- responsiivinen
- käytettävyystestit vastaavalla käyttäjäryhmällä

##  Suorituskyky
- lyhyet vasteajat (jokin numeerinen arvo)
	-> sivujen lataamiset
	-> responsiiviset ominaisuudet

##  Luotettavuus
- muutokset tallentuvat varmasti järjestelmään
- käyttäjä ei pysty rikkomaan tietokantaa

##  Tietoturva
- järjestelmään pitää kirjautua päästäkseen sisältöön käsiksi tms.
- tietokantaan pääsy ainoastaan kirjautuneella käyttäjällä

##  Ylläpito ja jatkokehitys
- koodin luettavuus ja modulaarisuus
- kattava dokumentaatio
- lisäominaisuudet huomioitu jo perusominaisuuksien suunnittelu- ja implementointivaiheissa

##  Toiminnallisuudet
- kaikki perustoiminnallisuudet on implementoitu (joitain alkuperäisiä lisäominaisuuksia nostettu jo perusominaisuuksiin suunnittelun alkuvaiheissa)



# Avoimet kysymykset
- tähän jotain avoimia kysymyksiä ajan mittaan

Are there things that still need to be checked with the customer? Functional requirements that are at status “maybe”? Things depending on user studies?

# References -- Viitteet

1. Scrum vision pattern: https://sites.google.com/a/scrumplop.org/published-patterns/value-stream-pattern-language/vision, 2013.

# Appendix A

- http://gofore.com/2013-2014-tietotekniikan-projektityo/

# Appendix B
If necessary
