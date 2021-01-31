import React from 'react';
import './Header.css';
import NavMaterial from '../NavMaterial/NavMaterial'

export default function Header() {


  return (
    <header className='header'>
      <NavMaterial />
      <h1 className='header__title'>Pavlov's testground</h1>
      
    </header>
  );
}