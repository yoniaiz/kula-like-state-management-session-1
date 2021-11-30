import { useSearchParams } from "react-router-dom";

export const useFiltersByParams = (characters) => {
  const [filtersState] = useSearchParams();

  const gender = filtersState.get("gender");
  const name = filtersState.get("name");
  const species = filtersState.get("species");
  const status = filtersState.get("status");

  let filteredCharacters = characters;
  if ((gender || name || species || status) && characters.length) {
    filteredCharacters = characters.filter((character) => {
      if (name && !character.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }

      if (
        gender &&
        gender !== "none" &&
        character.gender.toLowerCase() !== gender
      ) {
        return false;
      }

      if (
        species &&
        species !== "none" &&
        character.species.toLowerCase() !== species
      ) {
        return false;
      }

      if (
        status &&
        status !== "none" &&
        character.status.toLowerCase() !== status
      ) {
        return false;
      }

      return true;
    });
  }

  return { filteredCharacters };
};
