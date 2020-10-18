# Oppgave 2

Denne oppgaven går ut på å sette opp ESLint. Det meste har blitt gjort på forhånd, og det er viktig at du prøver å sette deg inn i hvordan ting henger sammen. Når det er sagt, så er det et par ting du er nødt til å gjøre.

1. Kjør 'npm install' for å laste ned dependenciene i package.json-fila.

2. Vi har lagt inn .eslintrc.js, .prettierrc.js. Disse to filene inneholder oppsett og regler for ESLint og Prettier. 

3. For at lintingen skal fungere i Visual Studio Code, så må du installere "ESLint plugin". Klikk 'Extensions' i venstre marg, og søk etter 'ESLint' (den med cirka 11m nedlastinger) - Installer denne.

4. For at lintingen skal skje automatisk når du lagrer med 'ctrl + s' så må du redigere settings.json-filen til VSCode og lime inn følgende:

Klikk på File->Preferences->settings. Søk etter 'ESLint'. Nesten øverst så vil det stå "Edit in settings.json", klikk den. Lim inn:

```
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

### Ekstra:
Hvis du er nysgjerrig på komplett oppsett så gjorde vi denne kommandoen for å laste ned alle nødvendige dependiencies:

$ npm install typescript eslint prettier eslint-config-airbnb-typescript-prettier --save-dev

Se https://www.npmjs.com/package/eslint-config-airbnb-typescript-prettier