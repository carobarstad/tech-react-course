import constants from '../utils/constants';
import ISearchCharacters from '../interface/ISearchCharacters';
import IGetCharacterList from '../interface/IGetCharacterList';
import IGetCharacterPage from '../interface/IGetCharacterPage';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';

export async function searchCharacters({
  searchString,
  handleResponse
}: ISearchCharacters) {
  const response = await fetch(
    `${constants.searchCharactersUrl}${searchString}`
  );
  const data = await response.json();
  handleResponse(data);
}

export async function getCharacterList({ handleResponse }: IGetCharacterList) {
  const response = await fetch(constants.characterListUrl);
  const data = await response.json();
  handleResponse(data);
}

export async function getSingleCharacter({
  id,
  handleResponse
}: IGetSingleCharacter) {
  const response = await fetch(constants.characterListUrl + id);
  const data = await response.json();
  handleResponse(data);
}

export async function getCharacterPage({
  pageNumber,
  handleResponse
}: IGetCharacterPage) {
  const response = await fetch(
    `${constants.characterListUrl}?page=${pageNumber}`
  );
  const data = await response.json();
  handleResponse(data);
}
export default searchCharacters;
