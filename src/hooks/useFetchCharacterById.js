import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCharacterById = (id) => {
  const status = "idle";
  const character = {};

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
      } catch (e) {}
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  return { character, status };
};
