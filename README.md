# PageTemplate
Repozytorium zawiera implementację szablonu strony internetowej, który można łatwo i szybko wykorzystać do stworzenia swojej strony, zmieniając jedynie plik konfiguracyjny.

# Dokumentacja

W pliku config.js znajduje się obiekt konfiguracyjny kontrolujący całą stronę. W pliku tym tworzony jest cały szkielet strony, który można dowolnie modyfikować, nie martwiąc się stylami, czy też działaniem strony, ponieważ cały proces renderowania i wyglądu strony jest zautomatyzowany.

## Strony

Obiekt config posiada tylko jedno pole: `pages`. Pole `pages` zawiera listę obietków poszczególnych stron. Liczba stron jest dowolna.
```js
const config={
  pages: []
}
```

#### Obiekt strony
Każda strona jest zdefiniowana obiektem, który znajduje się w tablicy `pages`. Obiekt strony zawiera następujące pola:

| pole             | opis                                                                                                                                                                             |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title `string`   | Definiuje tytuł strony. Wyświetlany jest on w centralnej część zdjęcia strony.                                                                                                   |
| message `string` | Definiuje wiadomość jaka pojawi pod tytułem strony. Pozwala na streszczenie w kilku zdaniach czego dana strona dotyczy, lub dodać nazwę firmy, dla której strona jest stworzona. |
| photo `string`   |                                                                                                                                                                                  |
|                  |                                                                                                                                                                                  |
|                  |          
