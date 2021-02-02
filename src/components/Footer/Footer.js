import React from 'react';
import NavFooter from '../NavFooter/NavFooter';
import './Footer.css';

export default function Footer({isSimple, isRussian}) {


  return (
    <footer className='footer'>
      <p className={`footer__copyright${isSimple ? ' footer__copyright_simple' : ''}`}>&#169; 2021 {isRussian ? 'Александр Павлов' : 'Alex Pavlov'}</p>
      <NavFooter 
        isSimple={isSimple}
      />
    </footer>
  );
}