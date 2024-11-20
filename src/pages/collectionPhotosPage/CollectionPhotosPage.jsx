import React, { useEffect } from 'react'
import ImagesCollections from '../../components/imagesCollections/ImagesCollections'
import { useDispatch, useSelector } from 'react-redux'
import { getCollectionPhotos } from '../../actions/search'
import { useParams } from 'react-router-dom'

//Página que muestra las fotos contenidas en la colección seleccionada en la página collectionPage
const CollectionPhotosPage = () => {
  const { id } = useParams()
  const {title, cantPhotos, photos } = useSelector(state => state.SelectedCollectionSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCollectionPhotos(id))
    // eslint-disable-next-line
  },[id])

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