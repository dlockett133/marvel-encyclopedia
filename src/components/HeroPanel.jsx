import React, {useEffect, useState} from 'react'

function HeroPanel({heroData, setHeroId, heroArray, setHeroArray}) {

  // const [heroArray, setHeroArray] = useState([]);

  // const savedHeroesData = localStorage.getItem('hero')
  // const savedHeroes = JSON.parse(savedHeroesData)

  const handleClick = (object) => {
    setHeroId(object.id)
    const savedHeroesData = localStorage.getItem('hero')
    const savedHeroes = JSON.parse(savedHeroesData)

    const alreadySavedInLocal = savedHeroes?.some(savedHero => savedHero.id === object.id)
    // debugger
    const alreadySavedInHeroArray = heroArray?.some(savedHero => savedHero.id === object.id)

    if (heroArray !== null) {
      debugger
      if (!alreadySavedInLocal && !alreadySavedInHeroArray){
        if (heroArray.length === 8){
          heroArray.pop()
        } 
          setHeroArray([object, ...heroArray])
      } else {
        console.log("Already Saved")
      }
    } else {
      setHeroArray([object])
    }
  }

  if (!heroData){
    return
  }

  return (
    <div className="hero-container row text-center">
      {heroData.map((hero, i) => (
        <div 
        className="col-md-3 heroes mb-4" 
        key={hero.id}
        >
          { hero.path && hero.extension ? (
          <>
            <img 
              className="img-thumbnail hero-img" 
              onClick={() => handleClick({
                id:hero.id,
                name:hero.name,
                path:hero.path,
                extension:hero.extension
              })}
              style={{cursor: 'pointer'}}
              alt={`Portrait of ${hero.name}`} 
              src={`${hero.path}/portrait_incredible.${hero.extension}`}
              key={hero.id}
            />
            <h3 className="hero-name">{hero.name}</h3>
          </>
          ) : (
            <>
            <img 
              className="img-thumbnail hero-img" 
              onClick={() => handleClick({
                id:hero.id,
                name:hero.name,
                path:hero.thumbnail.path,
                extension:hero.thumbnail.extension
              })}
              style={{cursor: 'pointer'}}
              alt={`Portrait of ${hero.name}`} 
              src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`}
              key={hero.id}
            />
            <h3 className="hero-name">{hero.name}</h3>
          </>
          )}
        </div>
      ))}
    </div>
    )
}

export default HeroPanel