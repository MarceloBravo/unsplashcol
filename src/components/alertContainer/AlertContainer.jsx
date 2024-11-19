import React from 'react'
import { useSelector } from 'react-redux'
import AlertComponent from '../alertComponent/AlertComponent'
import './alertContainer.css'

const AlertContainer = () => {
    const errors = useSelector(state => state.messageSlice)

  return (
    <div className='error-container'>
        {errors && errors.map((err, key) => 
          <AlertComponent 
              key={key} 
              id={err.id}
              title={err.title} 
              message={err.message} 
              type={err.type}
          />        
    )}
    </div>
  )
}

export default AlertContainer