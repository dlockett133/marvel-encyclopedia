import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import RecentComics from '../components/RecentComics'
import SearchForm from '../components/SearchForm'
import HeroBio from '../components/HeroBio'
import HeroPanel from '../components/HeroPanel'
import API from '../utils/API.js'

import { Container } from 'react-bootstrap';

const heroSearch = async (hero) => {
    const results = await API.getHeroes(hero)
    const heroes = results.data.data.results
    console.log(heroes)
}

function Home() {
    const [searchedHero, setSearchedHero] = useState('')

    const handleInputChange = (e) => {
        setSearchedHero(e.target.value)
    }
    
    const handleSubmit = (e) => {
        console.log(e.target.value)
    }
    
    useEffect(() => {
        heroSearch("Silver Surfer")
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
            <HeroBio/>
            <HeroPanel/>
        </Container>
    </>
  )
}

export default Home