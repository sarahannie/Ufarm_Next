import React from 'react';
import style from './search.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ searchTerm, setSearchTerm }) => {

  

  return (
    <div className={`container ${style.container}`}>
      <div className={`row height d-flex justify-content-center align-items-center ${style.height}`}>
        <div className="col-md-8">
          <div className={style.search}>
            <input 
              type="text" 
              className={`form-control`} 
              placeholder="Search For Products" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search