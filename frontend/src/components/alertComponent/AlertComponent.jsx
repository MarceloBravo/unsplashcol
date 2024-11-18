import React from 'react'
import { AlertComponentLogic } from './AlertComponent.logic'
import './AlertComponent.css'

const AlertComponent = ({id, title, message, type='success',}) => {
    const { showAlert, progress, alertRef, darkenColor, closeAlert } = AlertComponentLogic()
    
  return (
        showAlert && 
        <div className={"alert alert-" + type + " alert-dismissible fade show alert-compomnent"} ref={alertRef}>
            <strong>{title + ':'}</strong> {message}
            <button type="button" className="btn-close" aria-label="Close" onClick={() => closeAlert(id)}></button>
            <div className='rest-time' style={{"width": (progress) + "%", "background": darkenColor()}}/>
        </div>
  )
}

export default AlertComponent