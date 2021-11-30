import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCharacterById = (id) => {
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

  return { character, status };
};
