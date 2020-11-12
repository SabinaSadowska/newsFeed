# Aplikacja NewsFeed

Ten projekt został utworzony w następujących technologiach: React, Sass. Biblioteki pomocnicze: JSON Server, Material-UI, Axios, react-infinite-scroll-component

## Instrukcja 

Oto lista komend, które należy wykonać w termianu, żeby poprawnie uruchomić projekt:


### `npm install -g json-server` 
Zanim przystąpi się do uruchomienia projektu należy globalnie zainstalować JSON server wpisując powyższą komendę w terminalu. Na Linuxie dodaj sudo bezpośrednio przed komendą.

### `npm install` 
Powyższą komendę należy wpisać w nowym oknie terminala, z poziomu folderu, w którym znajduje się lokalnie aplikacja NewsFedd na Twoim komputerze.

### `json-server --watch db.json --port 3004` 
W nowym oknie terminala (także z poziomu folderu z aplikacją) uruchom fikcyjny serwer powyższą komendą. Serwer będzie dostępny pod http://localhost:3004 a dane pod http://localhost:3004/posts (pamiętaj, żeby nie zmieniać docelowego portu 3004, gdyż przy użyciu innego aplikacja nie będzie pobierać danych - jest on bezpośrednio w kodzie)

### `npm start` 
Powyższą komendą uruchom aplikację w wersji deweloperskiej pod adresem [http://localhost:3000](http://localhost:3000)


### Pamiętaj, żeby jednocześnie mieć otwarte dwa okna terminala, jedno z uruchominym serwerem JSON dla portu 3004 a drugie dla aplikacji reaktowej dla portu 3000. Zamknięcie jednego z nich spowoduje zatrzymanie działania aplikacji.


### Uwaga
Jeśli przy instalacji globalnej JSON serwera na Windowsie wystąpi błąd: "nodemon.ps1 cannot be loaded because running scripts is disabled on this system." wykonaj kroki opisane w tym artykule: https://dev.to/thetradecoder/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-34fe 


