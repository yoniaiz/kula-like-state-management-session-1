import { CharacterCard } from "../../components";
import Spinner from "../../components/Spinner";
import { useFetchCharacters } from "../../hooks";
import styles from "./characters.module.css";

const Characters = () => {
  const { characters, status } = useFetchCharacters();

  if (status === "idle" || status === "loading") {
    return <Spinner />;
  }

  if (status === "success" && characters.length) {
    return (
      <div className={styles.charactersScreenContainer}>
        <div className={styles.charactersContainer}>
          {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      </div>
    );
  }

  return <h3>error</h3>;
};

export default Characters;
