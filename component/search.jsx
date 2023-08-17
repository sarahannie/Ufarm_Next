import React from 'react';
import style from './search.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className={`container ${style.container}`}>
    <div className={`row height d-flex justify-content-center align-items-center ${style.height}`}>
      <div className="col-md-8">
        <div className={style.search}>
          {/* <FontAwesomeIcon style={{fontSize:'30px'}} icon={faSearch} className={style.faSearch} /> */}
          <input type="text" className={`form-control`} placeholder="Search For Products" />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Search