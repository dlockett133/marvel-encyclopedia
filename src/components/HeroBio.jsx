import React, { useEffect, useState } from 'react'
import API from '../utils/API'

import '../assets/HeroBio.css'

function HeroBio({heroId, setHeroId}) {

  const [selectedHero, setSelectedHero] = useState({})

  const singleHeroSearch = async (id) => {
    const results = await API.getHeroById(id)
    const hero = results.data.data.results[0] 
    setSelectedHero(hero)
    console.log(selectedHero)
  }
  
  useEffect(() => {
    if (heroId !== ""){
      singleHeroSearch(heroId)
    } else {
      singleHeroSearch("1009592")
    }
  }, [heroId])

  return (
    <div className="row mb-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 text-center">
              { selectedHero.thumbnail && selectedHero.thumbnail ? (
                <img
                alt={`Portrait of ${selectedHero.name}`}
                src={`${selectedHero.thumbnail.path}/portrait_incredible.${selectedHero.thumbnail.extension}`}
                className="img-thumbnail" 
                />) : (
                <p>Loading....</p>
              )}
            </div>
            <div className="col-md-9 d-flex flex-column">
              <h3 className="hero-name align-self-center">{selectedHero.name}</h3>
              <h2 className="hero-name">Bio</h2>
              <p>{selectedHero.description}</p>
              <div className='hero-links'>
                { selectedHero.urls && <a href={selectedHero.urls[0].url} target='_blank' >Lastest Comics</a>}
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroBio