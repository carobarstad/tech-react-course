# Oppgave 5
Utvid routingen med en side for søk av karakterer. Den skal rendre Search.tsx, som igjen rendrer CharacterSearch.tsx. Implementer CharacterSearch.tsx og fetch-metode i apis.ts.

Hint: Vi vil lagre søke-strengen som brukeren taster inn. Deretter vil vil gjøre et søk når brukeren trykker på "søk"-knappen. Til slutt vil vi håndtere responsen fra apiet, og vise en liste av resultatene ved å ta i bruk CharacterListElement.tsx.

Start her: Router.tsx, Search.tsx, CharacterSearch.tsx, apis.ts, CharacterListElement.tsx

### Ekstra:
1. Håndter edge-caset der vi klikker søk med et tomt input-felt. Klarer du å se hva som går galt, og hvorfor du får det resultatet du gjør?

2. Lag en implementasjon for filtrering, for eksempel i form av en dropdown eller checkboxer, der brukeren kan filtrere søkeresultatene på karakteristikker som kjønn, høyde, etc. (Vær kreativ). Hint: Se IGetCharactersResponse.ts sitt ICharacter-interface for en liste over alle feltene som blir returnert av apiet for en karakter. 