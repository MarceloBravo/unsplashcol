import React, { useEffect } from 'react'
import ImagesCollections from '../../components/imagesCollections/ImagesCollections'
import { useSelector } from 'react-redux'

const CollectionPhotosPage = () => {
    const {id, title, cantPhotos, photos } = useSelector(state => state.SelectedCollectionSlice)

  return (
    <div className='collection-container-page'>
        <div className='title-container'>
        
            <div className='title'>
                <h1 className='texto-gradiente'>{title}</h1>
                <label>{cantPhotos} photos</label>
            </div>
            
        </div>
        {photos && <ImagesCollections data={photos}/>}
    </div>
  )
}

export default CollectionPhotosPage