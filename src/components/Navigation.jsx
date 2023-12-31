import React from 'react'
import '../../src/assets/Navigation.css'

function Navigation() {
  return (
    <nav
      className="sticky-top navbar navbar-expand-lg"
      style={{background: "black"}}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
            <img src={process.env.PUBLIC_URL + '/assets/images/Marvel_Logo.svg.png'} alt="marvel logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav text-light">
            <a className="nav-link active text-light nav-hover" aria-current="page" href="#">Home</a>
            <a className="nav-link text-light nav-hover" href="#">Cinema</a>
            <a className="nav-link text-light nav-hover" href="#">My Library</a>
          </div>
        </div>
      </div>
    </nav>  
    )
}

export default Navigation