import React from 'react'
import '../../src/assets/Navigation.css'

function Navigation() {
  return (
    <nav
      class="sticky-top navbar navbar-expand-lg"
      style={{background: "black"}}
    >
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">
            <img src="/assets/images/Marvel_Logo.svg.png" alt=""/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav text-light">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
            <a class="nav-link text-light" href="#">Cinema</a>
            <a class="nav-link text-light" href="#">My Library</a>
          </div>
        </div>
      </div>
    </nav>  
    )
}

export default Navigation