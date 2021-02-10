import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TestBoxShadows from '../TestBoxShadows/TestBoxShadows'
import AboutAuthor from '../AboutAuthor/AboutAuthor'
import './App.css'


export default function App() {
  const [isBackgroundSimple, setIsBackgroundSimple] = useState(false)
  const [isRussian, setIsRussian] = useState(true)


  function switchBackground() { setIsBackgroundSimple(!isBackgroundSimple) }
  function switchLanguage() { setIsRussian(!isRussian) }

  return (
    <div className={`app${isBackgroundSimple ? ' app_simple' : ''}`}>
      <div className='page'>

        <Header 
          switchBackground={switchBackground}
          switchLanguage={switchLanguage}
          isSimple={isBackgroundSimple}
          isRussian={isRussian}
        />

        <TestBoxShadows 
          isSimple={isBackgroundSimple}
        />

        <AboutAuthor 
          isSimple={isBackgroundSimple}
          isRussian={isRussian}
        />

        <Footer 
          isSimple={isBackgroundSimple}
          isRussian={isRussian}
        />
      </div>
    </div>
  )
}
