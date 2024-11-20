import React from 'react'
import ImagesCollections from '../../components/imagesCollections/ImagesCollections'
import { SearchResultPageLogic } from './SearchResultPage.logic'
import searchIcon from '../../assets/Search.svg'
import './searchResultPage.css'


//Página con el resultado de la búsqueda
const SearchResultPage = () => {
    const { divStyle, state, images, criteria, handlerInputSearchChange, handlerInputCriteriaKeyDown} = SearchResultPageLogic()
    
  return (
    <div className='container-page' >
        <div style={divStyle} className='top-gradient'></div>
        <div className='form-search' >
            <div className='search-in-result-page'>
                <input 
                    type='text' 
                    className='form-control input-search' 
                    value={criteria} 
                    placeholder='Enter your keywords...'
                    name="inputSearch"
                    onChange={e => handlerInputSearchChange(e)}
                    onKeyDown={handlerInputCriteriaKeyDown}
                /> 
                <img src={searchIcon} alt="Buscar" className="search-icon"/>   
            </div>
        </div>

        <ImagesCollections data={state.result} clear={images.length === 0}/>

    </div>
  )
}

export default SearchResultPage