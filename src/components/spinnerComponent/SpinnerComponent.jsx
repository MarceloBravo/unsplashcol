import React from 'react'
import './spinnerComponent.css'
import { useSelector } from 'react-redux'

const SpinnerComponent = () => {
  const {visible, label1, label2 } = useSelector(state => state.spinnerSlice)


  return (
    visible && 
      <>      
        <div className='spinner-background'/>      
        <div className='spinner-container'>
          <div className="spinner-border"></div>
          {(label1 || label2) && 
            <div className='spinner-label-container'>
              {label1 && <label className='spinner-label-1'>{label1}</label>}
              {label2 && <label className='spinner-label-2'>{label2}</label>}
            </div>
          }
        </div>
      </>
  )
}

export default SpinnerComponent