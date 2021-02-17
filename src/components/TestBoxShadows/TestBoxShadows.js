import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import './TestBoxShadows.css'

export default function TestBoxShadows({isSimple}) {
  const isShadowBoxEnable = true //Потом заменить на деструктуризованный стейт из пропсов

  const [horizontalLength, setHorizontalLength] = useState(-13)
  const [verticalLength, setVerticalLength] = useState(18)
  const [blurRadius, setBlurRadius] = useState(33)
  const [spreadRadius, setSpreadRadius] = useState(5)
  const [shadowColor, setShadowColor] = useState({ r: 0, g: 0, b: 0 })
  const [opacity, setOpacity] = useState(0.8)
  const [isInset, setIsInset] = useState(false)
  const [currentInputColor, setCurrentInputColor] = useState('#000000')

  const shadowString = `${isInset ? 'inset' : ''} 
                        ${horizontalLength}px 
                        ${verticalLength}px 
                        ${blurRadius}px 
                        ${spreadRadius}px rgba(
                          ${shadowColor.r}, 
                          ${shadowColor.g}, 
                          ${shadowColor.b}, 
                        ${opacity})`
  const useStyles = makeStyles((theme) => ({
    shadows: {
      'box-shadow': shadowString
    }
  }))
  const classes = useStyles()

  const handleHorizontalLength = (event) => { setHorizontalLength( event.target.value === '' ? '' : Number(event.target.value) ) }
  const handleVerticalLength = (event) => { setVerticalLength( event.target.value === '' ? '' : Number(event.target.value) ) }
  const handleBlurRadius = (event) => { setBlurRadius( event.target.value === '' ? '' : Number(event.target.value) ) }
  const handleSpreadRadius = (event) => { setSpreadRadius( event.target.value === '' ? '' : Number(event.target.value) ) }
  const handleShadowColor = (event) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(event.target.value)
    if (result) {
      setShadowColor({
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      })
      setCurrentInputColor(event.target.value)
    } else {
      setShadowColor({ r: 0, g: 0, b: 0 })
    }
  }
  const handleOpacity = (event) => { setOpacity( event.target.value === '' ? '' : Number(event.target.value) ) }
  const handleInset = () => { setIsInset(!isInset) }

  useEffect(() => {
    if (isSimple===true) {
      setShadowColor({ r: 255, g: 255, b: 255 })
      setCurrentInputColor('#ffffff')
    } else {
      setShadowColor({ r: 0, g: 0, b: 0 })
      setCurrentInputColor('#000000')
    }
  }, [isSimple])

  return (
    <section className={`shadows-box
      ${isSimple ? ' shadows-box__simple' : ''}
      ${isShadowBoxEnable ? '' : ' shadows-box__hidden'}`}
    >
      <div className={`shadows-box__sliders${isSimple ? ' shadows-box__sliders_simple' : ''}`}>

        <div className='input-slider__wrapper'>
          <p className='input-slider__name'>Horizontal length</p>
          <input
            type='range'
            name='horizontalLength'
            min='-200'
            max='200'
            value={typeof horizontalLength === 'number' ? horizontalLength : 0}
            onChange={handleHorizontalLength}
            className='input-slider'
          />
          <label className={`input-slider__label${isSimple ? ' input-slider__label_simple' : ''}`}>{horizontalLength}</label>
        </div>

        <div className='input-slider__wrapper'>
          <p className='input-slider__name'>Vertical length</p>
          <input
            type='range'
            name='horizontalLength'
            min='-200'
            max='200'
            value={typeof verticalLength === 'number' ? verticalLength : 0}
            onChange={handleVerticalLength}
            className='input-slider'
          />
          <label className={`input-slider__label${isSimple ? ' input-slider__label_simple' : ''}`}>{verticalLength}</label>
        </div>

        <div className='input-slider__wrapper'>
          <p className='input-slider__name'>Blur radius</p>
          <input
            type='range'
            name='horizontalLength'
            min='0'
            max='300'
            value={typeof blurRadius === 'number' ? blurRadius : 0}
            onChange={handleBlurRadius}
            className='input-slider'
          />
          <label className={`input-slider__label${isSimple ? ' input-slider__label_simple' : ''}`}>{blurRadius}</label>
        </div>

        <div className='input-slider__wrapper'>
          <p className='input-slider__name'>Spread radius</p>
          <input
            type='range'
            name='horizontalLength'
            min='-200'
            max='200'
            value={typeof spreadRadius === 'number' ? spreadRadius : 0}
            onChange={handleSpreadRadius}
            className='input-slider'
          />
          <label className={`input-slider__label${isSimple ? ' input-slider__label_simple' : ''}`}>{spreadRadius}</label>
        </div>

        <div className='input-slider__wrapper'>
          <p className='input-slider__name'>Opacity</p>
          <input
            type='range'
            name='horizontalLength'
            min='0'
            max='1'
            step='0.01'
            value={typeof opacity === 'number' ? opacity : 0}
            onChange={handleOpacity}
            className='input-slider'
          />
          <label className={`input-slider__label${isSimple ? ' input-slider__label_simple' : ''}`}>{opacity}</label>
        </div>

        <div className='input-slider__wrapper input-slider__center'>
          <p className='input-slider__name input-slider__name_center'>Shadow color</p>
          <input
            type='color'
            name='ShadowColor'
            onChange={handleShadowColor}
            className='input-slider input-slider_shadow-color'
            value={currentInputColor}
          />
        </div>

        <div className='input-slider__wrapper input-slider__center'>
          <p className='input-slider__name input-slider__name_center'>Inset</p>
          <Switch 
              onChange={handleInset}
              color="primary" 
            />
        </div>

        <div className='input-slider__wrapper'>
          <p className='input-slider__name input-slider__name_result'>box-shadow: {shadowString}</p>
        </div>
        
      </div>
      <div className={`shadows-box__result${isSimple ? ' shadows-box__result_simple': ''}`}>
        <div className={`shadows-box__result_box ${classes.shadows}${isSimple ? ' shadows-box__result_box_simple' : ''}`} />
      </div>
    </section>
  )
}