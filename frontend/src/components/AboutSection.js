import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className="about-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1> ABOUT US </h1>
      {/* <p>What are you waiting for?</p> */}
      <div className="about-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default AboutSection;
