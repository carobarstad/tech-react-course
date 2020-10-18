import React from 'react';
import CharacterSearch from '../components/CharacterSearch';

// Oppgave 5. Denne komponenten trenger ingen endringer.
// Legg merke til at det eneste denne komponenten gjør er å rendre <CharacterSearch />.
// Dette kaller vi en wrapper/container (her kunne vi gjort mer enn å bare rendre én komponent).
// Gå videre til CharacterSearch.tsx.
const Search = () => {
  return (
    <div>
      <CharacterSearch />
    </div>
  );
};

export default Search;
