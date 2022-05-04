import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchForm.css";

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(e) {
    e.persist();
    console.log(e.target.value)
    setSearchTerm(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());

  }
  return (
    <form>
      <div className="input-group rounded">
        <input name="searchTerm" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
          value={searchTerm} onChange={handleChange} />
        <span className="input-group-text border-1" >
          <FontAwesomeIcon className="search-icon" icon={faSearch} type="Submit" onClick={handleSubmit}/>
        </span>
      </div>
    </form>

  )
}
export default SearchForm;