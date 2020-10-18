import React, { useState, useEffect } from 'react';
import { getCharacterList } from '../api/apis';
import ICharactersResponse, {
  ICharacter
} from '../interface/ICharactersResponse';
import IGetCharacterList from '../interface/IGetCharacterList';
import CharacterListElement from './CharacterListElement';
import './character.css';

const CharacterList = () => {
  // TODO Oppgave 4. Bruk variabelen under til å lagre info om characters.
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);

  const handleResponse = (characterResponse: ICharactersResponse) => {
    // TODO Oppgave 4. Lagre resultatene som vi får fra charactersResponse. Hint: Se hva ICharactersResponse inneholder.
  };

  useEffect(() => {
    // TODO Oppgave 4. Fetch karakterer fra én side. Hint: Bruk IGetCharacterList og api.getCharacterList
  }, []);

  return (
    <div>
      <ul>
        {/* TODO Oppgave 4. Render characters. Hint: Bruk characters.map() */}
      </ul>
    </div>
  );
};

export default CharacterList;
