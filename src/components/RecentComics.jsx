import React from 'react'

import '../../src/assets/RecentComics.css'

function RecentComics() {
  return (
    <div class="row mt-4 mb-4">
    <div class="col-md-12 d-flex justify-content-center carousel-bg">
      <div
        id="carouselExampleDark"
        class="carousel slide carousel-fade slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-container carousel-inner">
          <div class="carousel-item active" data-bs-interval="6000">
            <img src="" class="d-block" id="comics" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="caption-title"></h5>
              <p class="caption-body"></p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="6000">
            <img src="" class="d-block" id="comics" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="caption-title"></h5>
              <p class="caption-body"></p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="6000">
            <img src="" class="d-block" id="comics" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="caption-title"></h5>
              <p class="caption-body"></p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default RecentComics