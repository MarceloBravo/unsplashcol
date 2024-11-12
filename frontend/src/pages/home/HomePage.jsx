import React, { useEffect, useState } from 'react'
import { search } from '../../actions/search.jsx'
import { useDispatch, useSelector } from 'react-redux'

import bgImage from '../../assets/hero-image.png'
import searchIcon from '../../assets/Search.svg'

import './homePage.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [ searchValue, setSearchValue ] = useState('')
  const state = useSelector(state => state.searchSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(state.result.length > 0){
      //Resultados encontrados
      navigate('/search_result')
    }
  },[state])

  const divStyle = {
    backgroundImage: 'url(' + bgImage + ')'
  };

  const handlerSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handlerSearchImage = (e) => {
    if(e.keyCode === 13){
      dispatch(search(searchValue))
    }
  }

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