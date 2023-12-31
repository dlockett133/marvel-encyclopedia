import React, { useEffect, useState } from 'react'
import API from '../utils/API'

import '../assets/HeroBio.css'

function HeroBio({heroId, setHeroId, savedHeroes}) {

  const [selectedHero, setSelectedHero] = useState({})
  const [isHeroBio, setIsHeroBio] = useState(false)

  const singleHeroSearch = async (id) => {
    const results = await API.getHeroById(id)
    const hero = results.data.data.results[0] 
    setSelectedHero(hero)
  }
  
  useEffect(() => {
    if (heroId !== ""){
      singleHeroSearch(heroId)
      setIsHeroBio(true)
    } 
  }, [heroId])

  useEffect(() => {
    if (savedHeroes !== null) {
      singleHeroSearch(savedHeroes[0].id)
      setIsHeroBio(true)
    } 
  }, [])

    if (!isHeroBio) {
      return
    }

  return (
    <div className="row mb-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 text-center">
              { selectedHero.thumbnail && selectedHero.thumbnail ? (
                <img
                alt={`Portrait of ${selectedHero.name}`}
                src={`${selectedHero.thumbnail.path}/portrait_incredible.${selectedHero.thumbnail.extension}`}
                className="img-thumbnail hero-img" 
                />) : (
                <p>Loading....</p>
              )}
            </div>
            <div className="col-md-9 d-flex flex-column">
              <h3 className="hero-name align-self-center">{selectedHero.name}</h3>
              <h2 className="hero-name">Bio</h2>
              {!selectedHero.description || selectedHero.description === " " ? (
                <p>Unavailable</p>
               ) : (
                <>
                 <p>{selectedHero.description}</p>
                 <div className='hero-links'>
                   { selectedHero.urls && <a className='hero-hover' href={selectedHero.urls[0].url} target='_blank' rel='noopener noreferrer' >Lastest Comics</a>}
                 </div>
                </>
              )}
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroBio