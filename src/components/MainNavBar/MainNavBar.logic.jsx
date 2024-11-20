import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { clearResult } from "../../redux/slices/searchSlice";

export const MainNavBarLogic = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate()

  //Permite resaltar elbotón activo en el menú de navegación
  const isActive = (URI) => {
    return location.pathname === URI ? "active" : ""
  }

  //Maneja el evento click del botón home del menú de navegación
  const goToHome = () => {
    dispatch(clearResult())  
    navigate('/')  
  }

  return ({ isActive, goToHome });
};
