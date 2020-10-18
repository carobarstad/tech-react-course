# Oppgave 2
Denne oppgaven går ut på å sette opp ESLint. Det meste har blitt gjort på forhånd, og det er viktig at du prøver å sette deg inn i hvordan ting henger sammen. Når det er sagt, så er det et par ting du er nødt til å gjøre.

1. Vi har lagt inn .eslintrc.js, .prettierrc.js. Disse to filene inneholder oppsett og regler for ESLint og Prettier. 

2. For at lintingen skal fungere i Visual Studio Code, så må du installere "ESLint plugin". Klikk 'Extensions' i venstre marg, og søk etter 'ESLint' (den med cirka 11m nedlastinger) - Installer denne.

3. For at lintingen skal skje automatisk når du lagrer med 'ctrl + s' så må du redigere settings.json-filen til VSCode og lime inn følgende:

Klikk på File->Preferences->settings. Søk etter 'ESLint'. Nesten øverst så vil det stå "Edit in settings.json", klikk den. Lim inn:

```
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

### Ekstra: