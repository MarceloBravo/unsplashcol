import { useEffect, useState } from 'react'
import { search } from '../../actions/search.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../assets/hero-image.png'


export const HomePageLogic = () => {
  const divStyle = { backgroundImage: 'url(' + bgImage + ')'};
  const [ searchValue, setSearchValue ] = useState('')
  const state = useSelector(state => state.searchSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    //Sólo si la búsqueda retorno resultado con imágen(es), se redirecciona a la página 
    //de resultado de búsqueda, si no se han encontrado imágenes no se redirecciona
    if(state.result.length > 0){  
      navigate('/search_result')
    }
    // eslint-disable-next-line
  },[state])

  //Función asociada al evento onChange del cuadro de texto de búsqueda
  const handlerSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  //Llama a la funicón que hace la llamada a la API de unsplash para realizar la búsqueda de lka imágen, solo al presionar ENTER
  const handlerSearchImage = (e) => {
    if(e.keyCode === 13){
      dispatch(search(searchValue))
    }
  }

  return ({ searchValue, divStyle, handlerSearchChange, handlerSearchImage })
}