import React from 'react';
import './character.css';

const CharacterSearch = () => {
  // TODO Oppgave 5. Lag state-variabler for å lagre data.

  const handleResponse = (charactersResponse: ICharactersResponse) => {
    // TODO Oppgave 5. Lagre resultatene som vi får fra charactersResponse. Hint: Se hva ICharactersResponse inneholder.
  };

  const handleSubmit = () => {
    // TODO Oppgave 5. Hint: Her vil vi gjøre et fetch-kall med søke-strengen. Bruk ISearchCharacters-interfacet og apis.searchCharacters()
  };

  const handleChange = (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
    // TODO Oppgave 5. Hint: Vi vil ta vare på søke-strengen slik at vi kan bruke den senere.
    // Input-verdien kan hentes med "inputEvent.target.value" (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
  };

  return (
    <div className="character">
      <div>
        <div>Søk etter en karakter!</div>
        <label htmlFor="characterSearch">
          <input
            className="characterInput"
            id="characterSearch"
            type="text"
            name="characterSearch"
            onChange={(input) => handleChange(input)}
          />
        </label>
        <button
          className="characterButton"
          type="button"
          onClick={handleSubmit}
        >
          Søk
        </button>
      </div>
      <div>{/* TODO Oppgave 5. Display "CharacterListElement"s */}</div>
    </div>
  );
};

export default CharacterSearch;
