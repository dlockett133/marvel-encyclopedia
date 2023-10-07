import React from 'react'

import '../../src/assets/RecentComics.css'

function RecentComics() {
  return (
    <div className="row mt-4 mb-4">
    <div className="col-md-12 d-flex justify-content-center carousel-bg">
      <div
        id="carouselExampleDark"
        className="carousel slide carousel-fade slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-container carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <img src="" className="d-block" id="comics" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title"></h5>
              <p className="caption-body"></p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img src="" className="d-block" id="comics" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title"></h5>
              <p className="caption-body"></p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img src="" className="d-block" id="comics" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title"></h5>
              <p className="caption-body"></p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default RecentComics