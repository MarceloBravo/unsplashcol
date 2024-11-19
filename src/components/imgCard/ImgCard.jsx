import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { setImage } from "../../redux/slices/selectedImageSlice";

import './imgCard.css'
import { getPhoto } from "../../actions/search";

const ImgCard = (props) => {
  const selectedImage = useSelector(state => state.SelectedImageSlice.image)
  const [ redirect, setRedirect ] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const img = props.img;

  useEffect(() => {
    if(selectedImage && redirect){
      navigate('/image_detail')
      setRedirect(false)
    }
    // eslint-disable-next-line
  },[selectedImage])

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
