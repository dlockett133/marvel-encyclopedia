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
  
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} className='carousel-bg mb-4'>
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
}

export default RecentComics