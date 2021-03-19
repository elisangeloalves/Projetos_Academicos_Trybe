import React from 'react';
import Header from '../components/Header';
import '../css/Header.css';

function DoneRecipes() {
  return (
    <div className="header">
      <Header title="Receitas Feitas" />
      <p>Tela de Receitas Favoritas</p>
    </div>
  );
}

export default DoneRecipes;
