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
    if(state.result.length > 0){
      navigate('/search_result')
    }
    // eslint-disable-next-line
  },[state])

  const handlerSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handlerSearchImage = (e) => {
    if(e.keyCode === 13){
      dispatch(search(searchValue))
    }
  }

  return ({ searchValue, divStyle, handlerSearchChange, handlerSearchImage })
}