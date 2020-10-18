import React, { useState, useEffect } from 'react';
import './character.css';
import getSingleCharacter from '../api/apis';
import { ICharacter } from '../interface/ICharactersResponse';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';
import CharacterListElement from './CharacterListElement';

const CharacterDetails = () => {
  // TODO Oppgave 1. Bruk denne til å lagre karakteren
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const id = '1';

  const handleResponse = (characterResponse: ICharacter) => {
    // TODO Oppgave 1. Lagre karakteren som vi får fra characterResponse.
  };

  useEffect(() => {
    // TODO Oppgave 1. Gjør et fetch-kall for å hente en karakter. Hint: Bruk IGetSingleCharacter og apis.getSingleCharacter()
  }, [id]);

  if (character) {
    // TODO Oppgave 1. Render karakteren. Hint: Bruk <CharacterListElement />
  }

  return <div>No character found :(</div>;
};

export default CharacterDetails;
