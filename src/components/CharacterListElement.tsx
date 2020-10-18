/* eslint-disable camelcase */
import React from 'react';
import { ICharacter } from '../interface/ICharactersResponse';
import './character.css';
import images from '../images/images';

const CharacterListElement = () => {
  // TODO Oppgave 1. Ta i mot og destrukturer de nødvendige feltene i props med ICharacter-interfacet.
  const imgSrc = images[name];

  return (
    <div className="character">
      <div className="characterName">{name}</div>
      <img className="characterImage" src={imgSrc} alt="Portrait" />
      <div>Height: {height} cm</div>
      <div>Born year: {birth_year}</div>
    </div>
  );
};

export default CharacterListElement;
