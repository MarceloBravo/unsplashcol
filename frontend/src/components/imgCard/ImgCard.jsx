import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setImage } from "../../redux/slices/selectedImageSlice";

import './imgCard.css'

const ImgCard = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const img = props.img;

  const handlerDetailImageClick = () => {
    dispatch(setImage(img))
    navigate('/image_detail')
  }
  
  return (
    <div className="card img-card" onClick={e => handlerDetailImageClick(e)}>
      <img
        src={img.urls.regular}
        alt={img.description}
        className="card-img-top"
      />
      {/*
      <div className="card-body">
        <h5 className="card-title">{img.alt_description}</h5>
        <p className="card-text">
          {img.description}
        </p>
      </div>
      */}
    </div>
  );
};

export default ImgCard;
