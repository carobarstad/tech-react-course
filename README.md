# Oppgave 6
Utvid characterList-siden med paginering (next-button).

Hint: Hver "page" i apiet returnerer en liste av characters. Når man trykker på next-knappen så ønsker vi å sende et request for den neste siden, lagre resultatene fra response, og vise dem på siden. Denne gangen er det ikke laget et skjelett for løsningen. Du må lage egne funksjoner, interfaces, og logikk.

Eksempel-endepunkt: https://swapi.dev/api/people/?page=1

Start her: CharacterList.tsx og apis.ts

### Ekstra:
1. Sørg for at den siste siden ikke feiler når vi trykker 'next' og ikke finner flere resultater.

2. Lag og implementer en "forrige"-knapp også.