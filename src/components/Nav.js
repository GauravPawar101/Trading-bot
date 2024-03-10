import React, { Component } from 'react';
import '../ccss/Nav.css';
import {Link} from 'react-router-dom';
class Nav extends Component {
  render() {
        return (
    
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{color:'#78A083'}}>
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Tradofyz
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to='/' className="nav-link">
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className="nav-link" to='/about'>
                        About
                      </Link>
                    
                    </li>
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Available soon">
                      <Link className="nav-link" to='/features'>
                        Features
                      </Link>
                    </li>
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Available soon">
                      <Link className="nav-link" href="#">
                        News
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link 
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Exchange
                      </Link>
                      <ul className="dropdown-menu" data-bs-toggle="tooltip" data-bs-placement="top" title="Available soon">
                        <li>
                          <Link className="dropdown-item" href="#">
                            Stocks
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            Crypto
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            Forex
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
         
          
        );
      }
    };

export default Nav;
