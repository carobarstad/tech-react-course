/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import './character.css';
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from '../api/apis';
import { ICharacter } from '../interface/ICharactersResponse';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';

const CharacterDetails = () => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const { id } = useParams();

  const handleResponse = (characterResponse: ICharacter) => {
    console.log(characterResponse);
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
    return (
      <>
        <div>{character.name}</div>
        <div>{character.gender}</div>
        <div>{character.mass}</div>
        <div>{character.hair_color}</div>
      </>
    );
  }

  return <div>No character found :(</div>;
};

export default CharacterDetails;
