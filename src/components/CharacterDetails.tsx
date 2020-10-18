import React, { useState, useEffect } from 'react';
import './character.css';
import { useParams } from 'react-router-dom';
import getSingleCharacter from '../api/apis';
import { ICharacter } from '../interface/ICharactersResponse';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';
import CharacterListElement from './CharacterListElement';

interface IUseParams {
  id: string;
}

const CharacterDetails = () => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  // TODO Oppgave 3. Bruk useParams for å hente id fra url i stedet for å hardkode inn '1'. Hint: Bruk IUseParams-interfacet sammen med useParams
  const id = '1';

  const handleResponse = (characterResponse: ICharacter) => {
    if (characterResponse) {
      setCharacter(characterResponse);
    }
  };

  useEffect(() => {
    const characterPageRequest: IGetSingleCharacter = {
      id,
      handleResponse
    };
    getSingleCharacter(characterPageRequest);
  }, [id]);

  if (character) {
    return <CharacterListElement {...character} />;
  }

  return <div>No character found :(</div>;
};

export default CharacterDetails;
