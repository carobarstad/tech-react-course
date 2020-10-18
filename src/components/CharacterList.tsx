import React, { useState, useEffect } from 'react';
import { getCharacterList } from '../api/apis';
import ICharactersResponse, {
  ICharacter
} from '../interface/ICharactersResponse';
import IGetCharacterList from '../interface/IGetCharacterList';
import CharacterListElement from './CharacterListElement';
import './character.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);

  const handleResponse = (characterResponse: ICharactersResponse) => {
    if (characterResponse && characterResponse.results)
      setCharacters(characterResponse.results);
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
    </div>
  );
};

export default CharacterList;
