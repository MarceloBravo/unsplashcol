import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearResult } from "../../redux/slices/searchSlice";

import "./mainNavBar.css";


const MainNavBar = () => {
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
  },[state, isClickHome])

  const isActive = (URI) => {
    return location.pathname === URI ? "active" : ""
  }


  const goToHome = () => {
    setIsClickHome(true)
    dispatch(clearResult())    
  }



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
              <Link className={"nav-link " + (isActive("/") || isActive("/search_result"))} aria-current="page" onClick={e => goToHome()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + isActive("/collections")} to="/collections">
                Collections
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
