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
        setCriteria(state.criteria)
    },[state])
    
    const handlerInputSearchChange= (e) => {
        setCriteria(e.target.value)        
    }

    const handlerInputCriteriaKeyDown = (e) => {
        if(e.keyCode === 13){
            setImages([])
            dispatch(search(criteria))
        }
    }
    
  return ({ divStyle, state, images, criteria, handlerInputSearchChange, handlerInputCriteriaKeyDown})
}