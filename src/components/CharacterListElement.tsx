/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { ICharacter } from '../interface/ICharactersResponse';
import './character.css';
import images from '../images/images';

const CharacterListElement = ({
  name,
  height,
  birth_year,
  url
}: ICharacter) => {
  // A part of the character url
  const people = 'people/';

  // Figure out what index people start at
  const peopleIndex = url.indexOf(people);

  // Split the character url and remove the last /
  const id = url
    .substring(peopleIndex + people.length, url.length)
    .replace(/\//g, '');

  const imgSrc = images[name];

  return (
    <div className="characterDetails">
      <div className="characterName">{name}</div>
      <img src={imgSrc} alt="Portrait" />
      <div>Height: {height} cm</div>
      <div>Born year: {birth_year}</div>
      <Link to={`character/id/${id}`}>Link to character page</Link>
    </div>
  );
};

export default CharacterListElement;
