/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { ICharacter } from '../interface/ICharactersResponse';
import './character.css';

const CharacterDetails = ({ name, height, birth_year, url }: ICharacter) => {
  return (
    <div className="characterDetails">
      <div>{name}</div>
      <div>Height: {height} cm</div>
      <div>Born year: {birth_year}</div>
      <Link to={url}>Link to character page</Link>
    </div>
  );
};

export default CharacterDetails;
