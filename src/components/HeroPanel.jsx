import React from 'react'

function HeroPanel({heroData, setHeroId}) {

  const handleClick = (id) => {
    setHeroId(id)
    console.log(id)
  }

  return (
    <div className="hero-container row text-center">
      {heroData.map((hero, i) => (
        <div 
        className="col-md-3 heroes mb-4" 
        key={hero.id}
        >
          <img 
            className="hero-image" 
            onClick={() => handleClick(hero.id)}
            style={{cursor: 'pointer'}}
            alt={`Portrait of ${hero.name}`} 
            src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`}
            key={hero.id}
          />
          <h3 className="hero-name">{hero.name}</h3>
        </div>
      ))}
    </div>
    )
}

export default HeroPanel