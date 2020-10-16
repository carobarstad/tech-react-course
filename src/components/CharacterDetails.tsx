/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import './character.css';
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from '../api/apis';
import { ICharacter } from '../interface/ICharactersResponse';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';
import images from '../images/images';

const CharacterDetails = () => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const { id } = useParams();

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
    return (
      <div className="characterDetails">
        <img
          className="characterImage"
          src={images[character.name]}
          alt={character.name}
        />
        <div>{character.name}</div>
        <div>{character.gender}</div>
        <div>{character.mass}</div>
        <div>{character.hair_color}</div>
      </div>
    );
  }

  return <div>No character found :(</div>;
};

export default CharacterDetails;
