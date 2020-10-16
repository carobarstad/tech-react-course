/* eslint-disable camelcase */
export default interface ICharactersResponse {
  count: number;
  next: unknown;
  previous: unknown;
  results: Array<ICharacter>;
}

export interface ICharacter {
  birth_year: string;
  created: Date;
  edited: Date;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}
