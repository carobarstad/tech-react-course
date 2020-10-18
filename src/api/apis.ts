import constants from '../utils/constants';
import IGetSingleCharacter from '../interface/IGetSingleCharacter';

export default async function getSingleCharacter({
  id,
  handleResponse
}: IGetSingleCharacter) {
  const response = await fetch(constants.characterListUrl + id);
  const data = await response.json();
  handleResponse(data);
}
