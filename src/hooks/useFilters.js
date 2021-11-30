import { useState } from "react";

export const useFilters = (characters) => {
  const filteredCharacters = [];
  const onFiltersApply = () => {};

  return { filteredCharacters, onFiltersApply };
};
