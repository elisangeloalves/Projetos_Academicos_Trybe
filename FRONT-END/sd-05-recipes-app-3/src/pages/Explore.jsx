import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/explore.css';

function Explore() {
  return (
    <div>
      <Header title="Explorar" />
      <div className="explore-buttons">
        <Link to="/explorar/comidas">
          <div className="buttons">
            <button type="button" data-testid="explore-food">
              Explorar Comidas
            </button>
          </div>
        </Link>
        <Link to="/explorar/bebidas">
          <div className="buttons">
            <button type="button" data-testid="explore-drinks">
              Explorar Bebidas
            </button>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
