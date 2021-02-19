import React, { useState } from 'react'
import '../../utils/button-style__reset/button-style__reset.css'
import './AboutAuthor.css'
import sun from '../../images/sun.svg';
import me from '../../images/me.png';

export default function AboutAuthor({isSimple, isRussian}) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(true)
  const [isAuthorOpen, setIsAuthorOpen] = useState(false)
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)
  const [isJobOpen, setIsJobOpen] = useState(false)
  const disableStates = () => {
    setIsDefaultOpen(false)
    setIsAuthorOpen(false)
    setIsSkillsOpen(false)
    setIsJobOpen(false)
  }
  const changeToDefault = () => {
    disableStates()
    setIsDefaultOpen(true)
  }
  const changeToAuthor = () => {
    disableStates()
    setIsAuthorOpen(true)
  }
  const changeToSkills = () => {
    disableStates()
    setIsSkillsOpen(true)
  }
  const changeToJob = () => {
    disableStates()
    setIsJobOpen(true)
  }

  return (
    <section className='about'>

      <div className={`about__wrapper${isSimple ? ' about__wrapper_simple' : ''}`}>

        <div className={`about__left-block${isSimple ? ' about__left-block_simple' : ''}`}>

          <button 
            className={`button-style__reset about__button about__button_default${
              isSimple ? ' about__button_simple' : ''
            }`} 
            type='button'
            onClick={changeToDefault}
          >
            {isRussian ? 'Кратко' : 'Briefly'}
          </button>
          <button 
            className={`button-style__reset about__button about__button_author${
              isSimple ? ' about__button_simple' : ''
            }`} 
            type='button'
            onClick={changeToAuthor}
          >
            {isRussian ? 'Об авторе' : 'About me'}
          </button>
          {/* <button 
            className={`button-style__reset about__button about__button_skills${
              isSimple ? ' about__button_simple' : ''
            }`} 
            type='button'
            onClick={changeToSkills}
          >
            {isRussian ? 'О навыках' : 'My skills'}
          </button> */}
          <button 
            className={`button-style__reset about__button about__button_job${
              isSimple ? ' about__button_simple' : ''
            }`} 
            type='button'
            onClick={changeToJob}
          >
            {isRussian ? 'О поиске работы' : 'Personal interests'}
          </button>

        </div>

        <div 
          className={`about__right-block${
            isSimple ? ' about__right-block_simple' : ''
          }`}
        >
          <div className={`about__default${isDefaultOpen ? '' : ' about__default_hidden'}`}>
            <p className={`about__text${isSimple ? ' about__text_simple' : ''}`}>
              {isRussian 
                ? 'Несмотря на то, что основу страницы я собирал с помощью CRA, по всей странице я использовал компоненты из material-ui для того, чтобы познакомится с возможностями библиотеки.'
                : 'This page was build with CRA but also i used material-ui lib for practice. Buttons, icons and inputs made from material and customize by me.'
              }
            </p>
            <p className={`about__text${isSimple ? ' about__text_simple' : ''}`}>
              {isRussian
                ? 'Так же я выбрал для дополнительной практики sass (на самом деле scss, из-за личных предпочтений синтаксиса) и старался использовать как можно больше её функционала - вынес основные переменные в отдельный файл и использовал вложенность.' 
                : 'For more tests and practice i chose SASS lib (SCSS in particular). Tried to maximize it&#39;s usage: variables with custom file, nesting and reusability'}
            </p>
          </div>

          <div className={`about__author${isAuthorOpen ? '' : ' about__author_hidden'}`}>
            <div className='about__author_image-wrapper'>
              <img 
                className='about__author_image-background-image' 
                src={sun} 
                alt='sun emoji on background' 
              />
              <img 
                className='about__author_image-photo' 
                src={me} 
                alt='author'
              />
            </div>
            <p className={`about__text${isSimple ? ' about__text_simple' : ''}`}>
              Consectetur nostrud proident ipsum pariatur sit consectetur. Quis laborum   elit labore est nulla consequat aliquip id id veniam. Excepteur sunt laboris  excepteur ullamco labore. Duis exercitation culpa do aliqua commodo ut   voluptate dolore. Esse id magna amet velit nulla amet tempor ullamco  deserunt laborum. Veniam mollit ut est culpa consectetur irure. Ex commodo   culpa ea proident sit elit labore ipsum amet commodo nulla cillum.
            </p>
          </div>

          {/* <div className={`about__skills${isSkillsOpen ? '' : ' about__skills_hidden'}`}>
            <p className={`about__text${isSimple ? ' about__text_simple' : ''}`}>
              {isRussian
                ? ''
                : ''
              }
            </p>
          </div> */}

          <div className={`about__job${isJobOpen ? '' : ' about__job_hidden'}`}>
            <p className={`about__text${isSimple ? ' about__text_simple' : ''}`}>
              {isRussian
                ? 'Я заинтересован в работе не столько на необычных проектах, сколько в креативной и сплочёной команде. Я убеждён, что такие команды в состоянии помимо рутинной работы сами создавать интересную активность и необычные проекты. Хотелось бы поработать в компании, в которой можно без сомнений поговорить как с коллегами, так и с руководством о новых идеях и предложениях.'
                : 'I prefer work with creative people and unity team but extraordinary projects. I pure think that teams like that can do excelent and interesting job inside everyday rutine. i want to be part of the company that can hear new ideas and offers.'
              }
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}