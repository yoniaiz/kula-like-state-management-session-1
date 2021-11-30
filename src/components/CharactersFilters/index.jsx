import { useReducer } from "react";
import styled from "./filters.module.css";

const initialState = {
  name: "",
  gender: "none",
  species: "none",
  status: "none",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "species":
      return { ...state, species: action.payload };
    case "status":
      return { ...state, status: action.payload };
    case "reset":
      return initialState;

    default:
      return state;
  }
}

const CharactersFilters = ({ onFiltersApply }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "name", payload: value });
  };

  const handleSelectChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const onReset = () => {
    dispatch({ type: "reset" });
    onFiltersApply(initialState);
  };

  const handleApply = () => {
    onFiltersApply(state);
  };

  return (
    <div>
      <div className={styled.filtersContainer}>
        <div>
          <label for="name">Search by name</label>
          <input
            name="name"
            id="name"
            placeholder="Rick Sanchez"
            onChange={handleInputChange}
            value={state.name}
          />
        </div>
        <div>
          <label for="gender">Filter by gender</label>
          <select
            name="gender"
            id="gender"
            value={state.gender}
            onChange={handleSelectChange}
          >
            <option value="none">None</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div>
          <label for="species">Filter by species</label>
          <select
            name="species"
            id="species"
            value={state.species}
            onChange={handleSelectChange}
          >
            <option value="none">None</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
        </div>

        <div>
          <label for="status">Filter by status</label>
          <select
            name="status"
            id="status"
            value={state.status}
            onChange={handleSelectChange}
          >
            <option value="none">None</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
          </select>
        </div>
      </div>
      <div className={styled.buttonsContainer}>
        <button type="button" onClick={handleApply}>
          Apply
        </button>
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CharactersFilters;
