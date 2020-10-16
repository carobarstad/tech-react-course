import ICharactersResponse from './ICharactersResponse';

export default interface IGetCharacterPage {
  pageNumber: number;
  handleResponse: (characters: ICharactersResponse) => void;
}
