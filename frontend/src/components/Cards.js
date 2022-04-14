import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>We have a whole lot of Services you would want to check out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="We are ready to integrate AI capabilities in your business operations."
              label="Artificial Intelligence"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="We are ready to integrate AI capabilities in your business operations."
              label="Web development"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="We are ready to integrate AI capabilities in your business operations."
              label="AI INTEGRATION"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="We have the capacity to disguise or convert your daily repetitive tasks into a computer process to speed up your productivity."
              label="SYSTEMS AND PROCESS AUTOMATION"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="We can develop your software solutions on your preferred operating platform."
              label="WEB AND MOBILE DEVELOPMENT"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
