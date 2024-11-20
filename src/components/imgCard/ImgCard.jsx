import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../actions/search";

import './imgCard.css'

//Componente para mostrar que muestra la foto dentro del componente imagenesCollection, en las páginas de 
//resultado de búsqueda y imagenes de la colección
const ImgCard = (props) => {
  const selectedImage = useSelector(state => state.SelectedImageSlice.image)
  const [ redirect, setRedirect ] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const img = props.img;

  useEffect(() => {
    if(selectedImage && redirect){
      navigate('/image_detail') //Redirige a la página de detalle de la imagen
      setRedirect(false)
    }
    // eslint-disable-next-line
  },[selectedImage])

  //Al hacer click sobre el componente, configura la constante redirect para redireccionar 
  //a la página de detalle de la imagen, a penas se reciban desde el store los datos de la imágen seleccionada
  const handlerDetailImageClick = (id) => {
    setRedirect(true)
    dispatch(getPhoto(id))
  }
  
  return (
    <div className="card img-card" onClick={e => handlerDetailImageClick(img.id)}>
      <img
        src={img.urls.regular}
        alt={img.description}
        className="card-img-top"
      />
    </div>
  );
};

export default ImgCard;
