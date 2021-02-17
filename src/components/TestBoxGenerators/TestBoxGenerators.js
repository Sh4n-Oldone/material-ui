import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import QRCode from 'qrcode.react'
import './TestBoxGenerators.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#fbb440',
    color: '',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
  },
  buttonSimple : {
    color: '',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
  },
  textField: {
    width: '90%',
    color: '#fbb440',
    '&:focused': {
      color: '#fbb440',
    }
  },
  input: {
    color: "#fbb440"
  },
  inputSimple: {
    color: "white"
  },
}))

export default function TestBoxGenerators({isSimple}) {
  const isGeneratorsBoxEnable = true //Потом заменить на деструктуризованный стейт из пропсов
  const classes = useStyles()
  const [inputValue, setInputValue] = useState('')
  const [QRCodeValue, setQRCodeValue] = useState('')
  const [isQRCodeHidden, setIsQRCodeHidden] = useState(true)

  function handleValue(e) {
    setInputValue(e.target.value)
  }

  function handleQR(e) {
    e.preventDefault()
    setQRCodeValue(inputValue)
    setIsQRCodeHidden(false)
  }

  return (
    <section className={`generators-box
      ${isSimple ? ' generators-box__simple' : ''}
      ${isGeneratorsBoxEnable ? '' : ' generators-box__hidden'}`}
    >
      <div className='generators-box__container'>

        <form 
          className={`${classes.root} generators-box__form`} 
          noValidate 
          autoComplete="off"
          onSubmit={handleQR}
        >
          <TextField 
            id="standard-basic" 
            label="Что записываем в QR-код?" 
            fullWidth 
            className={classes.textField} 
            onChange={handleValue}
            // variant='filled'
            InputProps={{
              className: isSimple ? classes.inputSimple : ''
            }}
            InputLabelProps={{
              className: isSimple ? classes.inputSimple : classes.input
            }}
            SelectProps={{
              className: isSimple ? classes.inputSimple : classes.input
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={isSimple ? classes.buttonSimple : classes.button}
            startIcon={<CloudUploadIcon />}
            type='submit'
          >
            Создать
          </Button>
        </form>
        
        <QRCode 
          value={QRCodeValue} 
          className={`generators-box__qrcode${isQRCodeHidden ? ' generators-box__qrcode_hidden' : ''}`} 
          bgColor={isSimple ? '#ffffff' : '#fbb440'}
        />

      </div>
    </section>
  )
}