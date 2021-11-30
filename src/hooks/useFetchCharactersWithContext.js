import { useEffect } from "react";
import axios from "axios";
import { useCharacterContext } from "../context/CharactersContext";

export const useFetchCharactersContext = () => {
  // change state to update CharactersContext characters instead
  const [status, setStatus] = useState("idle");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setStatus("loading");

      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        setStatus("success");
        setCharacters(data.results);
      } catch (e) {
        setStatus("error");
      }
    };

    fetchCharacters();
  }, []);
};
