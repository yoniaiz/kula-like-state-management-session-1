import { CharacterCard, CharactersFilters } from "../../components";
import Spinner from "../../components/Spinner";
import { useFilters, useFetchCharacters } from "../../hooks";
import styles from "./characters.module.css";

const Characters = () => {
  const { characters, status } = useFetchCharacters();
  const { filteredCharacters, onFiltersApply } = useFilters(characters);

  if (status === "idle" || status === "loading") {
    return <Spinner />;
  }

  if (status === "success" && characters.length) {
    return (
      <div className={styles.charactersScreenContainer}>
        <CharactersFilters onFiltersApply={onFiltersApply} />
        <div className={styles.charactersContainer}>
          {filteredCharacters.length ? (
            filteredCharacters.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))
          ) : (
            <h2>No results</h2>
          )}
        </div>
      </div>
    );
  }

  return <h3>error</h3>;
};

export default Characters;
