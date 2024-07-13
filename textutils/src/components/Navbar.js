import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <buthrefn className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </buthrefn>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>

          {/* <form className="d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch ml-auto text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault" 
              onChange={props.toggleMode}
              checked={props.mode === 'dark'}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  aboutText: 'About'
};
