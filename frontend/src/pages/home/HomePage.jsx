import React from 'react'
import { HomePageLogic } from './HomePage.logic.jsx'
import searchIcon from '../../assets/Search.svg'
import './homePage.css'

const HomePage = () => {
  const { searchValue, divStyle, handlerSearchChange, handlerSearchImage } = HomePageLogic()
  
  return (
    <div className='div-background' style={divStyle}>
      <div className='row form'>
        <div>
          <h1 form='input-search' >Search</h1>
        </div>
        <div className='div-home-containers'>
          <label form='input-search' >Search high-resolution images Unsplash</label>
        </div>
        <div className='div-home-containers input-container'>
          <input 
            id="input-search" 
            type="input" 
            className="form-control" 
            value={searchValue}
            onChange={e => handlerSearchChange(e)}
            onKeyDown={handlerSearchImage}
            placeholder='Enter your keywords...'
          />
          <img src={searchIcon} alt="Buscar" className="search-icon"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage