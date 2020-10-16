import { ICharacter } from './ICharactersResponse';

interface IGetSingleCharacter {
  id: string;
  handleResponse: (character: ICharacter) => void;
}

export default IGetSingleCharacter;
