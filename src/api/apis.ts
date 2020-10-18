import constants from '../utils/constants';
import IGetCharacterList from '../interface/IGetCharacterList';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';

export async function getCharacterList() {
  // TODO Oppgave 4 | Bruk IGetCharacterList som input og se i constants.tsx for endepunkt.
}

export async function getSingleCharacter({
  id,
  handleResponse
}: IGetSingleCharacter) {
  const response = await fetch(constants.characterListUrl + id);
  const data = await response.json();
  handleResponse(data);
}
