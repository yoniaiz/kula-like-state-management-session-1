import { useEffect, useState } from "react";
import axios from "axios";
import { useCharacterContext } from "../context/CharactersContext";

export const useFetchCharacterByIdContext = (id) => {
  // update to use CharactersContext
  const [status, setStatus] = useState("idle");
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchCharacter = async () => {
      setStatus("loading");
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data);
        setStatus("success");
      } catch (e) {
        setStatus("error");
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);
};
