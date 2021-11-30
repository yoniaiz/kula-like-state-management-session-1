import { useSearchParams } from "react-router-dom";
import styled from "./filters.module.css";

const CharactersFiltersQueryParams = () => {
  const [filterState, setFiltersState] = useSearchParams();

  const gender = filterState.get("gender");
  const name = filterState.get("name");
  const species = filterState.get("species");
  const status = filterState.get("status");

  const handleInputChange = (e) => {
    const params = {};
    if (gender) {
      params["gender"] = gender;
    }

    if (species) {
      params["species"] = species;
    }

    if (status) {
      params["status"] = status;
    }

    if (name) {
      params["name"] = name;
    }

    setFiltersState(
      { ...params, [e.target.name]: e.target.value },
      { replace: true }
    );
  };

  return (
    <div>
      <div className={styled.filtersContainer}>
        <div>
          <label htmlFor="name">Search by name</label>
          <input
            name="name"
            id="name"
            placeholder="Rick Sanchez"
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="gender">Filter by gender</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div>
          <label htmlFor="species">Filter by species</label>
          <select
            name="species"
            id="species"
            value={species}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
        </div>

        <div>
          <label htmlFor="status">Filter by status</label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CharactersFiltersQueryParams;
