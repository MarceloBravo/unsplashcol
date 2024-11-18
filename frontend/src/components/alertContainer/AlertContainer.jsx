import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AlertComponent from '../alertComponent/AlertComponent'
import './alertContainer.css'

const AlertContainer = () => {
    const errors = useSelector(state => state.messageSlice)

    useEffect(() => {
      console.log(`quedan ${errors.length} mensajes`)
    },[errors])

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