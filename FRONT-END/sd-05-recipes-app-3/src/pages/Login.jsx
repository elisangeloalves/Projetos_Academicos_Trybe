import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import '../css/Login.css';
import { logo } from '../../src/images/';

function inputEmail(handleEmailChange) {
  return (
    <div className="login-input">
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        name="email"
        onChange={(e) => handleEmailChange(e)}
      />
    </div>
  );
}

function inputPassword(handlePasswordChange) {
  return (
    <div className="login-input">
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        name="password"
        onChange={(e) => handlePasswordChange(e)}
      />
    </div>
  );
}

// ref for regex: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail .

function Login() {
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const { setEmail, setPassword, email } = useContext(RecipeContext);

  const checkEmail = (emailTested) => {
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (regexEmail.test(emailTested) === true) setCheckedEmail(true);
  };
  const checkPassword = (passwordTested) => {
    if (passwordTested.length > 6) setCheckedPassword(true);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPassword(e.target.value);
  };

  const storage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    // console.log(JSON.parse(localStorage.getItem('user')));
  };

  return (
    <div className="login-page" data-testid="">
      <img src={logo} alt="logo" className="title" />
      {inputEmail(handleEmailChange)}
      {inputPassword(handlePasswordChange)}
      <Link className="enter" to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={!(checkedEmail && checkedPassword)}
          onClick={() => storage()}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
