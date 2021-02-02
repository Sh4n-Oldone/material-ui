import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import './NavFooter.css';

export default function NavFooter({isSimple}) {


  return (
    <div className={`nav-footer${isSimple ? ' nav-footer_simple' : ''}`}>
      <a 
        href='tel: +79254277254'
        rel='noopener noreferrer'
        target='_blank'
      >
        <PhoneIcon 
          style={ isSimple ? { color: 'white' } : { color: 'orange' } }
        />
      </a>
      <a 
        href='mailto: dotheimpossible@protonmail.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        <EmailIcon 
          style={ isSimple ? { color: 'white' } : { color: 'orange' } }
        />
      </a>
      <a 
        href='https://github.com/Sh4n-Oldone'
        rel='noopener noreferrer'
        target='_blank'
      >
        <GitHubIcon 
          style={ isSimple ? { color: 'white' } : { color: 'orange' } }
        />
      </a>
    </div>
  );
}