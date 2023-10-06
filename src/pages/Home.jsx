import React from 'react'
import Navigation from '../components/Navigation'
import RecentComics from '../components/RecentComics'
import HeroBio from '../components/HeroBio'
import HeroPanel from '../components/HeroPanel'

import { Container } from 'react-bootstrap';

function Home() {
  return (
    <>
        <Navigation/>
        <RecentComics/>
        <HeroBio/>
        <HeroPanel/>
    </>
  )
}

export default Home