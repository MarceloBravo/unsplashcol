import React from "react";
import { ImagesCollectionsLogic } from "./ImagesCollections.logic";
import ImgCard from "../imgCard/ImgCard";
import "./imagesCollections.css";

const ImagesCollections = ({data, clear = false}) => {
  const { images } = ImagesCollectionsLogic(data, clear)

  return (
    <>
      {images && images.length > 0 && (
        <div className="container-results">
          {images.map((col, i) => (

            <div key={i} className="col">
              {col.map((img, y) => (
                <ImgCard key={y} img={img} />
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ImagesCollections;
