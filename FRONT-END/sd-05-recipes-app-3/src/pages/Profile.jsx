import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Profile.css';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user')) || { email: '' };
  // choice in order to make tests pass both on header, footer and profile
  const emailUser = user.email;
  const logOut = () => localStorage.clear();
  return (
    <div>
      <Header title="Perfil" />
      <div className="email-perfil" data-testid="profile-email">
        {emailUser}
      </div>
      <div className="explore-buttons">
        <div className="buttons">
          <Link to="/receitas-feitas">
            <button type="button" data-testid="profile-done-btn">
              Receitas Feitas
            </button>
          </Link>
        </div>
        <div className="buttons favorite">
          <Link to="/receitas-favoritas">
            <button type="button" data-testid="profile-favorite-btn">
              Receitas Favoritas
            </button>
          </Link>
        </div>
        <div className="buttons sign-off">
          <Link to="/">
            <button type="button" data-testid="profile-logout-btn" onClick={() => logOut()}>
              Sair
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
