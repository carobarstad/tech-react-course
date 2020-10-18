import constants from '../utils/constants';
import ISearchCharacters from '../interface/ISearchCharacters';
import IGetCharacterList from '../interface/IGetCharacterList';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';

export async function searchCharacters() {
  // TODO Oppgave 5 | Bruk ISearchCharacters-interfacet som input. Eksempel endepunkt: "https://swapi.dev/api/people/?search=Darth", se constants.tsx.
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
