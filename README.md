# Beadandó
###1. Beadandó Alkalmazások fejlesztése 
###Giligor Dávid
######HSYGGS
======
##Követelményanalízis
======
A feladat egy olyan rendszer fejlesztése, melybe a tanulók tantárgyakat tudnak felvenni. 
A tantárgyak listája adott, csak az adatbázisban szereplő tárgyakat tudja felvenni a hallgató.
A tárgy kiválasztása után gyakorlatvezetőt is választani kell, szintén a megadott listából. 
Adott tantárgyhoz, és tanárhoz megjegyzést is füzhetünk. 
A felvett tantárgyakat ki tudjuk listázni, és igény szerint módositani is tudjuk. bármelyik tanárgyat, tanárt vagy megjegyzést.

======
##Tervezés
======
####Oldaltérkép
- Főoldal
  - Bejelentkezés
  - Regisztráció

- Főoldal (bejelentkezve)
  -Információ az alkalmazásról  
  - Listázás
  - Hozzáadás
  - Kijelentkezés

======

- Felhasználóifelület-modell

======

![ábra](dokumentacio/ablak.jpg "ábra")

======

- Osztálymodell

======

![ábra2](dokumentacio/modell.jpg "ábra2")

======

-Végpontok

======

![kép](dokumentacio/kép.jpg "kép")

======
##Implementáció
======
Az alkalmazás a Cloud9 felületen, node.js eszközzel lett megvalósítva.
MVC mintát követ: (Mappaszerkezet)

- models
  - modellek 
- views
  - mappákban az egyes controllerek nézetei
- public
  - kliens oldalhoz szükséges stylus lapok/scriptek

======
##Tesztelés
======

Egységtesztek: user.test.js 

Ezzel teszteljük a user addatmodelt.

Automatizált tesztek Selenium IDE segitségével
Automatizált teszt adatok:

![test](dokumentacio/testcase.jpg "test")

Tesztesetek :
- bejelentkezés
- menüpontok kipróbálása
- új tantárgy felvétele
- tantárgyak listázása
- felvett tantárgy módosítása
- kijelentekezés

======
##Felhasználói dokumentáció
======

A böngészőben elinditjuk az alkalmazást. Bejelentkezés nélkül, csak az alkalmazás leírását érjük el. 
A regisztráció egyszerü. Meg kell adni a Vezetéknevünket a Keresztnevünket, Felhasználónevet melyel később be tudunk majd jelentkezni, és a Jelszót.
Miután bejelentkezünk lehetőségünk nyilik új tantárgyak felvételére a Hozzáadás menüpontban. Ki lehet választani a tantárgyat,
lehet választani a tanárok közül valamint minden felvételhez tudunk megjegyzést hozzá füzni. 
A felvett tárgyakat a Listázás menüpont alatt érjük el. Itt egy adott tantárgyat ki tudunk törölni vagy akár módosithatjuk is.
Jobb oldalt lehetőségünk nyilik kijelentkezésre.
