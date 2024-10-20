# web_projekti
Web-kurssin lopputyö
# Projektin Arviointikatsaus

Tämä repository sisältää web-kehitysprojektin toteutuksen, joka arvioidaan HTML:n, CSS:n, JavaScriptin ja asynkronisten operaatioiden perusteella. Alla on yksityiskohtainen erittely siitä, miten kukin arviointikriteeri on täytetty, mukaan lukien tiedostonimet ja rivinumerot, joissa ominaisuudet on toteutettu.

## HTML (25%)

1. **Perusrakenne**:  
   - Tiedosto: `index.html`  
   - Rivi: koko tiedosto
   HTML-perusrakenne sisältää `<!DOCTYPE html>`, `<html>`, `<head>` ja `<body>` tagit.

2. **Sisällön selkeä erottelu (otsikot, kappaleet, listat)**:  
   - Tiedosto: `index.html`  
   - Rivi: 1147 
   Käytetty otsikoita (`<h1>`, `<h2>`), kappaleita (`<p>`) ja listoja (`<ul>`, `<li>`) sisällön jäsentämiseen.

3. **Lomakkeet, linkit ja mediaelementit**:  
   - Tiedosto: `index.html`  
   - Rivi: 19 ja 98-137 
   Lomake, jossa on syöttökenttiä, linkkejä (`<a>`) ja mediaelementtejä (`<img>`) on toteutettu.

4. **Taulukoiden tehokas käyttö**:  
   - Tiedosto: `index.html`  
   - Rivi: 63-76  
   HTML-taulukko on käytetty jäsennellyn datan esittämiseen.

5. **Johdonmukainen semanttisen HTML:n käyttö**:  
   - Tiedosto: `index.html`  
   - Rivi: koko tiedosto
   Käytetty semanttisia HTML-elementtejä kuten `<header>`, `<footer>`, `<section>`, `<article>`, ja `<nav>` rakenteen ja saavutettavuuden parantamiseksi.

## CSS (25%)

1. **Perustyylit (värit, fontit)**:  
   - Tiedosto: `main.css`  
   - Rivi: 5-15  
   Perustyylit on määritelty väreille ja fonteille, jotka on kohdistettu runkoon, otsikoihin ja tekstiin.

2. **Luokkien ja ID:iden käyttö elementtien tyylittämiseen**:  
   - Tiedosto: `main.css`  
   - Rivi: 20-45  
   Elementtejä on tyylitetty käyttämällä luokkia ja ID-tunnisteita tiettyjen osioiden kohdentamiseksi.

3. **Responsiivisen suunnittelun elementtien toteutus**:  
   - Tiedosto: `main.css`  
   - Rivi: 50-100  
   Media query -kyselyitä käytetty responsiivisen suunnittelun toteuttamiseksi eri näyttökokoja varten.

4. **Käyttöliittymän asettelut (flexbox, grid)**:  
   - Tiedosto: `main.css`  
   - Rivi: 26-45 
   Flexbox- ja CSS Grid -asettelut toteutettu responsiivisen asettelun luomiseksi.

5. **Tyylit osoittavat hyvän ymmärryksen asetteluperiaatteista, estetiikasta ja käyttäjäkokemuksesta**:  
   - Tiedosto: `main.css`  
   - Rivi: koko tiedosto  
   Estetiikkaan ja käyttökokemukseen liittyvät periaatteet näkyvät erityisesti asettelun ja väriteeman kautta.

## JavaScript Perusteet (25%)

1. **Yksinkertaiset interaktiot (esim. hälytykset napin painalluksesta)**:  
   - Tiedosto: `script.js`  
   - Rivi: 112-115  
   Yksinkertainen hälytys toteutettu napin painalluksen yhteydessä.

2. **Useiden tapahtumakuuntelijoiden ja perus-DOM-manipulaatioiden käyttö**:  
   - Tiedosto: `script.js`  
   - Rivi: 130-136 
   Toteutettu useita tapahtumakuuntelijoita ja DOM-manipulaatioita, kuten elementtien päivittämistä käyttäjän toiminnan mukaan.

3. **Taulukot, oliot ja funktiot**:  
   - Tiedosto: `script.js`  
   - Rivi: 1-44  
   Taulukoiden, olioiden ja funktioiden käyttö tietojen hallintaan ja käsittelyyn.

4. **Kehittynyt logiikka, tietojen läpikäynti ja dynaaminen DOM-päivitys**:  
   - Tiedosto: `script.js`  
   - Rivi: 70-100
   Käytetty silmukoita tietojen läpikäyntiin ja DOM:n dynaamiseen päivittämiseen käyttäjän toiminnan perusteella.

5. **Johdonmukainen oliopohjaisen JavaScriptin käyttö**:  
   - Tiedosto: `script.js`  
   - Rivi: 45-69  
   Oliopohjaisten periaatteiden käyttö JavaScriptissä on selkeä, esimerkiksi konstruktorifunktioiden kautta.

## Asynkroniset operaatiot (25%)

1. **Ajastimien käyttö**:  
   - Tiedosto: `script.js`  
   - Rivi: 79-89  
   Ajastimia, kuten `setTimeout` ja `setInterval`, on käytetty asynkronisten toimintojen hallintaan.

2. **AJAX-kutsun tai Fetch-API:n onnistunut toteutus**:  
   - Tiedosto: `script.js`  
   - Rivi:84 
   Toteutettu asynkroninen API-kutsu Fetch-API:lla ja käsitelty vastaukset.

3. **Asynkronisen kutsun datan näyttäminen verkkosivulla**:  
   - Tiedosto: `script.js`  
   - Rivi: 117-122
   API:sta haettu data näytetään verkkosivulla dynaamisesti DOM:n avulla.

4. **Virheenkäsittelyn toteutus (esim. epäonnistuneiden API-kutsujen käsittely)**:  
   - Tiedosto: `script.js`  
   - Rivi: 123-125
   Virheenkäsittely on toteutettu, jotta käyttäjä näkee virheilmoitukset epäonnistuneiden API-kutsujen yhteydessä.
