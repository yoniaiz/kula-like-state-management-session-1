import { useEffect } from "react";
import axios from "axios";
import { useCharacterContext } from "../context/CharactersContext";

export const useFetchCharactersContext = () => {
  const { updateCharacters, updateStatus } = useCharacterContext();
  useEffect(() => {
    const fetchCharacters = async () => {
      updateStatus("loading");

      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        updateStatus("success");
        updateCharacters(data.results);
      } catch (e) {
        updateStatus("error");
      }
    };

    fetchCharacters();
  }, []);
};
