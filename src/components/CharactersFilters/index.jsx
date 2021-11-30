import { useReducer } from "react";
import styled from "./filters.module.css";

const initialState = {
  name: "",
  gender: "none",
  species: "none",
  status: "none",
};

// create a functionality to update the state
// based on the action and return the updated state
// https://reactjs.org/docs/hooks-reference.html#usereducer
const reducer = (state, action) => {
  return state;
};

const CharactersFilters = ({ onFiltersApply }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
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
          <label htmlFor="name">Search by name</label>
          <input
            name="name"
            id="name"
            placeholder="Rick Sanchez"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
          <label htmlFor="gender">Filter by gender</label>
          <select
            name="gender"
            id="gender"
            value={state.gender}
            onChange={handleChange}
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
            value={state.species}
            onChange={handleChange}
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
            value={state.status}
            onChange={handleChange}
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
