import React, { useState } from 'react';
import { searchCharacters } from '../api/apis';
import ICharactersResponse from '../interface/ICharactersResponse';
import ISearchCharacters from '../interface/ISearchCharacters';

const RecipeSearch = () => {
  const [searchString, setSearchString] = useState<string>('');

  const handleResponse = (charactersResponse: ICharactersResponse) => {
    console.log(charactersResponse);
  };

  const handleSubmit = () => {
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
    <div>
      <label htmlFor="characterSearch">
        <input
          id="characterSearch"
          type="text"
          name="characterSearch"
          onChange={(input) => handleChange(input)}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Søk
      </button>
    </div>
  );
};

export default RecipeSearch;
