import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCharacters = () => {
  const status = "idle";
  const characters = [];

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
      } catch (e) {}
    };

    fetchCharacters();
  }, []);

  return { characters, status };
};
