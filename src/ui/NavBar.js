import React from 'react';


const NavBar = () => {
    
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler  navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            </li>
            <li className="nav-item">
                <a className="nav-link" ></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" ></a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="O que você procura?"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesuisar</button>
            </form>
        </div>
        </nav>
    );
      
    
};

export default NavBar;