import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SearchForm(){
    function handleChange(e) {
        e.persist();
        console.log(e.target.value)       
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log()

      }
    return (      
        <form onSubmit={handleSubmit}>
        <div className="input-group rounded">
        <input name="searchTerm" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
        value="" onChange={handleChange}/>
        <span className="input-group-text border-1" >
        <FontAwesomeIcon icon={ faSearch } type="Submit" />
        </span>
        </div>
        </form>
        
    )
}
export default SearchForm;