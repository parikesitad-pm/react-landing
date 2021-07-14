import './HeroSection.css'
import '../App.css'

import { Button } from './Button'
import React from 'react'
import vidBg from '../assets/videos/video-1.mp4'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={vidBg} autoPlay loop muted />
      <h1>React Bootcamp</h1>
      <p>Lorem, ipsum dolor.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSizes="btn--large"
        >
          Ar yo redeh ?
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSizes="btn--large"
        >
          Wanna Some ? <i class="far fa play-circle"></i>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
