import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../actions/search'
import bgImage from '../../assets/gradiend-bg.svg'


export const SearchResultPageLogic = () => {
    const divStyle = { backgroundImage: 'url(' + bgImage + ')'}
    const state = useSelector(state => state.searchSlice)
    const [ images, setImages ] = useState([])
    const [ criteria, setCriteria ] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        /*
        El texto de búsqueda se persiste en el store. Si el store ya contiene 
        un texto almacenado, la constante criteria, asociada al cuadro de búsqueda, 
        se actualiza automáticamente. Esto garantiza que el texto almacenado se 
        muestre en el cuadro de búsqueda al cargar la página.
        */
        setCriteria(state.criteria) 
    },[state])
    

    //Función para el evento onChange del cuadro de texto de búsqueda
    const handlerInputSearchChange= (e) => {
        setCriteria(e.target.value)        
    }

    //Función para elevento keyDown del cuadro de texto de búsqueda
    const handlerInputCriteriaKeyDown = (e) => {
        //Si se presiona ENTER se llama a la función que realiza la petición a unsplash para la búsqueda de la(s) imagen(es)
        if(e.keyCode === 13){
            setImages([])
            dispatch(search(criteria))
        }
    }
    
  return ({ divStyle, state, images, criteria, handlerInputSearchChange, handlerInputCriteriaKeyDown})
}