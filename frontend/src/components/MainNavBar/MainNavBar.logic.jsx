import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearResult } from "../../redux/slices/searchSlice";

export const MainNavBarLogic = () => {
  const [ isClickHome, setIsClickHome ] = useState(false)
  const state = useSelector(state => state.searchSlice)
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate()


  useEffect(() => {
    if(isClickHome && state.result.length === 0){
      setIsClickHome(false)
      navigate('/')
    }
    // eslint-disable-next-line
  },[state, isClickHome])

  const isActive = (URI) => {
    return location.pathname === URI ? "active" : ""
  }

  const goToHome = () => {
    setIsClickHome(true)
    dispatch(clearResult())    
  }

  return ({ isActive, goToHome });
};
