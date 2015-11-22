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
A böngészőben megnyíló alkalmazásban információkat találunk magáról az
alkalmazaásról, hogy mire is jó, mi a célja. Bejelentkezés, illetve regisztráció
nélkül nem tudjuk igénybevenni az alkalmazás funcióit, csupán olvashatunk róla.
A regisztráció egyszerű,pár lépésben elvégezhető folyamat, a nevünk,neptun kódunk,
és jelszavunk megadása után be is jelentkezhetünk, és használhatjuk az alkalmazást.
A Hozzáadás gombra kattintva, amely a menüben található,kiválaszthatunk adott
listából különböző tantárgyakat. Miután a kiválasztás megtörtént,elérhetőek
lesznek a gyakorlatvezetők névsora egy hasonló listában. A listában csak azok
a gyakorlatvezetők jelennek meg, akik az adott tárgyat oktatják. Utána meg kell
adnunk a felvétel dátumát. Megjegyzést is írhatunk a végén, mely bármit
tartalmazhat, de nem kötelező írni.
