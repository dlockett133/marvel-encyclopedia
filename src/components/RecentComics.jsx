import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import API from '../utils/API'
import moment from 'moment'

import '../../src/assets/RecentComics.css'

function RecentComics() {

  const [comicsData, setComicsData] = useState([])
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const findComics = async () => {
    const results = await API.getComics()
    const comics = results.data.data.results
    setComicsData(comics)
  }

  const formatDate = (date) => {
    return moment(date).format('MMMM D, YYYY')
  }

  useEffect(() => {
    findComics()
  }, [])

  // useEffect(() => {
  //   // Log the updated comicsData here, it will reflect the latest state value
  //   console.log(comicsData)
  // }, [comicsData])
  
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} className='carousel-bg'>
      {comicsData.map((comic, i) => (
        <Carousel.Item key={i}>
          <img
            src={comic.images[0].path + '.' + comic.images[0].extension}
            alt={comic.title}
            className='centered-image'
          />
          <Carousel.Caption>
            <h3 className='caption-title'>{comic.title}</h3>
            <p className='caption-body'>Plublished: {formatDate(comic.dates[0].date)}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
  // return (
  //   <div className="row mt-4 mb-4">
  //   <div className="col-md-12 d-flex justify-content-center carousel-bg">
  //     <div
  //       id="carouselExampleDark"
  //       className="carousel slide carousel-fade slide"
  //       data-bs-ride="carousel"
  //     >
  //       <div className="carousel-indicators">
  //         <button
  //           type="button"
  //           data-bs-target="#carouselExampleCaptions"
  //           data-bs-slide-to="0"
  //           className="active"
  //           aria-current="true"
  //           aria-label="Slide 1"
  //         ></button>
  //         <button
  //           type="button"
  //           data-bs-target="#carouselExampleCaptions"
  //           data-bs-slide-to="1"
  //           aria-label="Slide 2"
  //         ></button>
  //         <button
  //           type="button"
  //           data-bs-target="#carouselExampleCaptions"
  //           data-bs-slide-to="2"
  //           aria-label="Slide 3"
  //         ></button>
  //       </div>
  //       <div className="carousel-container carousel-inner">
  //         {comicsData.map((comic, index) => (
  //           <div className="carousel-item active" data-bs-interval="6000" key={index}>
  //           <img src={comic.images[0].path + '.' + comic.images[0].extension} className="d-block" id="comics" alt="..." />
  //           <div className="carousel-caption d-none d-md-block">
  //             <h5 className="caption-title">{comic.title}</h5>
  //             <p className="caption-body">Published: {formatDate(comic.dates[0].date)}</p>
  //           </div>
  //         </div>
  //         ))}
  //       </div>
  //       <button
  //         className="carousel-control-prev"
  //         type="button"
  //         data-bs-target="#carouselExampleCaptions"
  //         data-bs-slide="prev"
  //       >
  //         <span
  //           className="carousel-control-prev-icon"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Previous</span>
  //       </button>
  //       <button
  //         className="carousel-control-next"
  //         type="button"
  //         data-bs-target="#carouselExampleCaptions"
  //         data-bs-slide="next"
  //       >
  //         <span
  //           className="carousel-control-next-icon"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Next</span>
  //       </button>
  //     </div>
  //   </div>
  // </div>
  // )
}

export default RecentComics