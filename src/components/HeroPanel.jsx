import React from 'react'

function HeroPanel({heroData}) {
  return (
    <div className="hero-container row text-center">
      {heroData.map((hero, i) => (
        <div className="col-md-3 heroes shadow-lg mb-4" key={hero.id}>
        <img className="hero-image" alt={`Portrait of ${hero.name}`} src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`} />
        <h3 className="hero-name">{hero.name}</h3>
        </div>
      ))}
    </div>
    )
}

export default HeroPanel