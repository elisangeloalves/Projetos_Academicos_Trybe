import React from 'react';
import { Link } from 'react-router-dom';
import { drinkIcon } from '../images';
import { exploreIcon } from '../images';
import { mealIcon } from '../images';
import '../css/Footer.css';
//
function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footBar">
        <div className="drink">
          <Link to="/bebidas" >
            <img data-testid="drinks-bottom-btn" src={drinkIcon} alt="drink" />
          </Link>
        </div>
        <div className="explorer">
          <Link to="/explorar" >
            <img data-testid="explore-bottom-btn" src={exploreIcon} alt="explore" />
          </Link>
        </div>
        <div className="food">
          <Link to="/comidas" >
            <img data-testid="food-bottom-btn" src={mealIcon} alt="food" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
