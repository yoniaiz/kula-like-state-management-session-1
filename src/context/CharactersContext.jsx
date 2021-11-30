import { createContext, useContext, useState } from "react";

const initialState = {
  status: "idle",
  characters: [],
};

const CharactersContext = createContext(initialState);

const CharacterContextProvider = ({ children }) => {
  const [status, setStatus] = useState("idle");
  const [characters, setCharacters] = useState([]);

  const updateStatus = (newStatus) => {
    // update the status
  };

  const updateCharacters = (newCharacters) => {
    // update characters array with new characters
  };

  const updateCharacter = (character) => {
    if (characters.length) {
      // update the array character
    } else {
      setStatus("success");
      setCharacters([character]);
    }
  };

  const getCharacterById = (id) =>
    characters.find((character) => character.id === Number(id));

  return (
    <CharactersContext.Provider
      value={{
        status,
        characters,
        updateCharacters,
        updateCharacter,
        updateStatus,
        getCharacterById,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharactersContext);

export default CharacterContextProvider;
