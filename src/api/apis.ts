import constants from '../utils/constants';
import ISearchCharacters from '../interface/ISearchCharacters';
import IGetCharacterList from '../interface/IGetCharacterList';
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

export default searchCharacters;
