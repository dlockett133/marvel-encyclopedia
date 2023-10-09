import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import RecentComics from '../components/RecentComics'
import SearchForm from '../components/SearchForm'
import HeroBio from '../components/HeroBio'
import HeroPanel from '../components/HeroPanel'
import API from '../utils/API.js'

import { Container } from 'react-bootstrap';

// const heroSearch = async (hero) => {
//     const results = await API.getHeroes(hero)
//     const heroes = results.data.data.results
//     setHeroData(heroes)
//     // console.log(heroes)
// }

function Home() {
    const [searchedHero, setSearchedHero] = useState('')
    const [heroData, setHeroData] = useState([])
    const [heroId, setHeroId] = useState('')

    const handleInputChange = (e) => {
        setSearchedHero(e.target.value)
    }
    
    const handleSubmit = (e) => {
        console.log(e.target.value)
    }
    
    const heroSearch = async (hero) => {
        const results = await API.getHeroes(hero)
        const heroes = results.data.data.results
        setHeroData(heroes)
    }

    // const singleHeroSearch = async (id) => {
    //     const results = await API.getHeroById(id)
    //     const hero = results.data.data.results 
    //     setSelectedHero(hero)
    //     console.log(selectedHero)
    // }

    // singleHeroSearch("1009592")

    useEffect(() => {
        heroSearch("Silver Surfer")
        setHeroId("1009592")
    }, [])
    
    useEffect(() => {
        console.log(searchedHero)
        if (searchedHero !== ""){
            heroSearch(searchedHero)
        } else {
            heroSearch("Silver Surfer")
        }
    }, [searchedHero])
    

  return (
    <>
        <Navigation/>
        <Container>
            <RecentComics/>
            <SearchForm 
                handleInputChange={handleInputChange} 
                handleSubmit={handleSubmit}
            />
            {/* <div>{heroName}</div> */}
            <HeroBio heroId={heroId} setHeroId={setHeroId}/>
            <HeroPanel 
                heroData={heroData}
                setHeroId={setHeroId}
            />
        </Container>
    </>
  )
}

export default Home