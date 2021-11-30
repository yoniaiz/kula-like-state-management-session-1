import { useState } from "react";

export const useFilters = (characters) => {
  const [filtersState, setFiltersState] = useState(null);

  const onFiltersApply = (state) => {
    setFiltersState(state);
  };

  let filteredCharacters = characters;

  if (filtersState && characters.length) {
    filteredCharacters = characters.filter((character) => {
      if (
        filtersState.name &&
        !character.name.toLowerCase().includes(filtersState.name.toLowerCase())
      ) {
        return false;
      }

      if (
        filtersState.gender !== "none" &&
        character.gender.toLowerCase() !== filtersState.gender
      ) {
        return false;
      }

      if (
        filtersState.species !== "none" &&
        character.species.toLowerCase() !== filtersState.species
      ) {
        return false;
      }

      if (
        filtersState.status !== "none" &&
        character.status.toLowerCase() !== filtersState.status
      ) {
        return false;
      }

      return true;
    });
  }

  return { filteredCharacters, onFiltersApply };
};
