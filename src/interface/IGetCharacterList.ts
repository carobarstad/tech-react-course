import ICharactersResponse from './ICharactersResponse';

export default interface IGetCharacterList {
  handleResponse: (characters: ICharactersResponse) => void;
}
