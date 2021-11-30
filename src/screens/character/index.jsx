import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useFetchCharacterById } from "../../hooks";
import styles from "./character.module.css";

const Character = () => {
  const { id } = useParams();
  const { character, status } = useFetchCharacterById(id);

  if (status === "loading" || status === "idle" || !character) {
    return <Spinner />;
  }

  if (status === "error") {
    return <h2>Error</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.characterContainer}>
        <div className={styles.characterHeader}>
          <img
            src="https://picsum.photos/900/400"
            alt="cover"
            height={400}
            width={900}
          ></img>
          <img
            className={styles.profilePicture}
            src={character.image}
            alt={character.name}
            height={300}
            width={300}
          />
          <h2>
            {character.name} <br />
            <small> Status: {character.status}</small>
          </h2>
        </div>
        <div className={styles.characterDetailsContainer}>
          <div>
            <h3>General info</h3>
            <p>
              <strong>Species - </strong>
              {character.species}
            </p>

            <p>
              <strong>Gender - </strong>
              {character.gender}
            </p>
          </div>
          <div>
            <h3>Current location</h3>
            <p>{character.location.name}</p>
            <a href={character.location.url}>Go to {character.location.name}</a>
          </div>

          <div>
            <h3>Origin</h3>
            <p>{character.origin.name}</p>
            <a href={character.origin.url}>Go to {character.origin.name}</a>
          </div>
        </div>
        <div className={styles.characterEpisodes}>
          <h3>Episodes</h3>
          <div className={styles.episodes}>
            {character.episode.map((episode, i) => (
              <div>
                <a href={episode}>Episode {i + 1}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
