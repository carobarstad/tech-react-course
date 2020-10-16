import React, { useState } from 'react';
import { searchCharacters } from '../api/apis';
import ICharactersResponse, {
  ICharacter
} from '../interface/ICharactersResponse';
import ISearchCharacters from '../interface/ISearchCharacters';
import CharacterListElement from './CharacterListElement';
import './character.css';

const RecipeSearch = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);

  const handleResponse = (charactersResponse: ICharactersResponse) => {
    if (charactersResponse && charactersResponse.results)
      setCharacters(charactersResponse.results);
  };

  const handleSubmit = () => {
    if (searchString === '') return;
    const charactersRequest: ISearchCharacters = {
      searchString,
      handleResponse
    };
    searchCharacters(charactersRequest);
  };

  const handleChange = (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = inputEvent.target.value;
    setSearchString(inputValue);
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
      <div>
        {characters.map((character) => {
          return <CharacterListElement {...character} />;
        })}
      </div>
    </div>
  );
};

export default RecipeSearch;
