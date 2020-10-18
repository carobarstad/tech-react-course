# Oppgave 3
Start her: Routes.tsx, CharacterDetails.tsx

1. Kjør 'npm install' for å laste ned depenciene for react-router-dom fra package.json-fila.

2. Bli kjent med Routing (Route og Switch) og Navigasjon med nav-elementet. Sørg for at dere skjønner hva forskjellen er. Se på flere eksempler til hva man kan gjøre med routing (https://reactrouter.com/web/guides/quick-start). 

3. Legg til en ny route som router til /character/:id, og rendrer CharacterDetails.tsx fra Oppgave 1, som ikke er en del av navigasjonen. 

4. For å dynamisk kunne velge andre karakterer enn bare '1' (som vi hardkodet inn i Oppgave 1), så må vi bruke useParams<>() for å hente ut id fra url. Se i CharacterDetails.tsx. Sjekk at dette fungerer ved å gå til "http://localhost:3000/character/1" i nettleseren din (prøv med andre tall enn '1' for å se andre karakterer (max er 80-og noe i apiet)). Kan du tenke deg hvorfor vi ikke legger til character-routen i navigasjonen?

Hint: Se hvordan dette har blitt gjort med Home-routen. 

### Ekstra:
Vi skal i de neste oppgavene lage flere routes, som også skal være en del av navigasjonen. Hvis dere blir raskt ferdig med denne oppgaven, og har lest litt om react-router-dom, så kan dere legge til en ny route som kan navigeres til, og fylle denne siden med noe interessant. 