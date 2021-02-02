import React from 'react';
import NavMaterial from '../NavMaterial/NavMaterial';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './Header.css';

export default function Header({switchBackground, isSimple, switchLanguage, isRussian}) {

  return (
    <header className='header'>

      <NavMaterial 
        isSimple={isSimple}
        isRussian={isRussian}
      />

      <h1 
        className={`header__title${isSimple ? ' header__title_simple' : ''}`}
      >
        Pavlov's testground
      </h1>

      <div className='switches__wrapper'>
        <FormControlLabel
          className={`header__button${isSimple ? ' header__button_simple' : ''}`}
          value="start"
          control={
            <Switch 
              onChange={switchBackground}
              color="default" 
            />
          }
          label={ 
            isSimple 
            ? isRussian ? 'Прикольнее' : 'More fun'
            : isRussian ? 'Серьёзнее' : 'More serious'
          }
          labelPlacement="end"
        />
        <FormControlLabel
          className={`header__button${isSimple ? ' header__button_simple' : ''}`}
          value="start"
          control={
            <Switch 
              onChange={switchLanguage}
              color="default" 
            />
          }
          label={ isRussian ? 'English!' : 'На русском!' }
          labelPlacement="end"
        />
      </div>
    </header>
  );
}