import React, { useState, useEffect } from 'react';
import { getCharacterList, getCharacterPage } from '../api/apis';
import ICharactersResponse, {
  ICharacter
} from '../interface/ICharactersResponse';
import IGetCharacterList from '../interface/IGetCharacterList';
import IGetCharacterPage from '../interface/IGetCharacterPage';
import CharacterListElement from './CharacterListElement';
import './character.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleResponse = (characterResponse: ICharactersResponse) => {
    if (characterResponse && characterResponse.results)
      setCharacters(characterResponse.results);
  };

  const handleNextClick = () => {
    const nextPageNumber = pageNumber + 1;
    const characterPageRequest: IGetCharacterPage = {
      pageNumber: nextPageNumber,
      handleResponse
    };
    getCharacterPage(characterPageRequest);
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    const characterListRequest: IGetCharacterList = {
      handleResponse
    };
    getCharacterList(characterListRequest);
  }, []);

  return (
    <div>
      <ul>
        {characters.map((character: ICharacter) => {
          return <CharacterListElement key={character.name} {...character} />;
        })}
      </ul>
      <br />
      <button className="next-button" type="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default CharacterList;
