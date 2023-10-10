import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import RecentComics from '../components/RecentComics'
import SearchForm from '../components/SearchForm'
import HeroBio from '../components/HeroBio'
import HeroPanel from '../components/HeroPanel'
import API from '../utils/API.js'

import { Container } from 'react-bootstrap';

function Home() {

    const [searchedHero, setSearchedHero] = useState('')
    const [heroData, setHeroData] = useState([])
    const [heroId, setHeroId] = useState('')
    const [heroArray, setHeroArray] = useState([])

    const savedHeroesData = localStorage.getItem('hero')
    const savedHeroes = JSON.parse(savedHeroesData)

    const handleInputChange = (e) => {
        setSearchedHero(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const heroSearch = async (hero) => {
        if (searchedHero !== ""){
            const results = await API.getHeroes(hero)
            const heroes = results.data.data.results
            setHeroData(heroes)
        } else {
            setHeroData(savedHeroes)
        }
    }

    useEffect(() => {
        if (savedHeroes !== null){
            setHeroArray(savedHeroes)
        } 
        setHeroData(savedHeroes)
        if (heroArray.length !== 0) {
            setHeroId(heroArray[0].id)
        } 
    },[])
    
    useEffect(() => {
        if (searchedHero !== ""){
            heroSearch(searchedHero)
        }
        setHeroArray(savedHeroes)
        setHeroData(savedHeroes)
    }, [searchedHero])

    useEffect(() => {
        if (heroArray !== null) {
            if (heroArray.length !== 0) {
                localStorage.setItem('hero', JSON.stringify(heroArray))
            }
        }
    }, [heroArray])
    

  return (
    <>
        <Navigation/>
        <Container className='main'>
            <RecentComics/>
            <SearchForm 
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit} 
            />
            <HeroBio heroId={heroId} setHeroId={setHeroId} savedHeroes={savedHeroes}/>
            <HeroPanel 
                heroData={heroData}
                setHeroId={setHeroId}
                heroArray={heroArray}
                setHeroArray={setHeroArray}
            />
        </Container>
    </>
  )
}

export default Home