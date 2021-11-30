import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCharacters = () => {
  // status and characters should be refactored to useState or different state
  // handling hook
  const status = "idle";
  const characters = [];

  useEffect(() => {
    const fetchCharacters = async () => {
      // update the status state to loading
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        // update the characters state with data.results
        // update the status state to success
      } catch (e) {
        // update the status state to error
      }
    };

    fetchCharacters();
  }, []);

  return { characters, status };
};
