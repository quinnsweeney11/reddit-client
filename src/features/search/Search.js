import { setCurrentSub } from "./searchSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./search.css";

export function Search(props) {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value[e.target.value.length - 1] !== " ") {
      setState(e.target.value.substring(2));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.length !== 0) {
      dispatch(setCurrentSub(state));
    } else {
      alert(`Please enter a value before searching.`);
    }
  };

  return (
    <div className="search">
      <form onSubmit={(e) => handleSubmit(e)} class="search-form">
        <input
          type="text"
          class="search-text"
          placeholder="subreddit"
          value={`r/${state}`}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="button"
          class="search-button"
          value="Search"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
}
