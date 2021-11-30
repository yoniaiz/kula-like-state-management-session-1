import { Link } from "react-router-dom";
import styles from "./cardStyle.module.css";

const CharacterCard = ({ name, gender, image, species, status, id }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <Link to={`/character/${id}`}>
        <p>{name}</p>
      </Link>
      <ul className={styles.cardFooter}>
        <li>Gender: {gender}</li>
        <li>Species: {species}</li>
        <li>Status: {status}</li>
      </ul>
    </div>
  );
};

export default CharacterCard;
