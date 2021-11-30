import Loader from "react-loader-spinner";
import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Loader type="MutatingDots" color="#53abee" height={100} width={100} />
    </div>
  );
};

export default Spinner;
