import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ setSearch, setMaxresult }) {
  const [input, setInput] = useState("");
  const [inputMaxresult, setInputMaxResult] = useState(4);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
    setMaxresult(inputMaxresult);
    setInputMaxResult(4);
    setInput("");
    navigate("/videos");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search"
        />
        <select onChange={(e) => setInputMaxResult(e.target.value)}>
          <option selected value={4}>
            4
          </option>
          <option selected value={8}>
            8
          </option>
          <option selected value={16}>
            16
          </option>
          <option selected value={24}>
            24
          </option>
        </select>

        <button type="submit">Search</button>
        </form>
        </div>
        )}

export default Search;
