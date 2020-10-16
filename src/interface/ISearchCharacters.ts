import ICharactersResponse from './ICharactersResponse';

export default interface ISearchCharacters {
  searchString: string;
  handleResponse: (characters: ICharactersResponse) => void;
}
