import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ setSearchKeyword }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchOnChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchOnClick = (event) => {
    event.preventDefault();
    setSearchKeyword(searchInput);
  };

  const clearSearchKeyword = () => {
    setSearchKeyword('');
  };

  return (
    <div>
      <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsKwik</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" onClick={clearSearchKeyword}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business" onClick={clearSearchKeyword}>Business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment" onClick={clearSearchKeyword}>Entertainment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/general" onClick={clearSearchKeyword}>General</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health" onClick={clearSearchKeyword}>Health</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science" onClick={clearSearchKeyword}>Science</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports" onClick={clearSearchKeyword}>Sports</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology" onClick={clearSearchKeyword}>Technology</NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearchOnClick}>
              <input
                className="form-control me-2"
                id="searchInput"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={handleSearchOnChange}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
