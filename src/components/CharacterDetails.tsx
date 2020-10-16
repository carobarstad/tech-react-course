/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { ICharacter } from '../interface/ICharactersResponse';
import './character.css';

const CharacterDetails = ({ name, height, birth_year, url }: ICharacter) => {
  const people = 'people/';
  const peopleIndex = url.indexOf(people);
  const id = url
    .substring(peopleIndex + people.length, url.length)
    .replace(/\//g, '');

  return (
    <div className="characterDetails">
      <div className="characterName">{name}</div>
      <div>Height: {height} cm</div>
      <div>Born year: {birth_year}</div>
      <Link to={`character/${id}`}>Link to character page</Link>
    </div>
  );
};

export default CharacterDetails;
