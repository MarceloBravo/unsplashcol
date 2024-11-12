import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowGridCollection from '../../components/rowGridCollection/RowGridCollection'
import { downloadImage, getUserCollections, removeImageFromCollection } from '../../actions/search'
import ModalAddToCollection from '../../components/addToCollection/ModalAddToCollection'

import downArrowIcon from '../../assets/down arrow.svg'
import plusIcon from '../../assets/Plus.svg'
import removeIcon from '../../assets/Remove.svg'

import './imagesDetailPage.css'


const ImagesDetailPage = () => {
    const [ idActiveRow, setIdActiveRow ] = useState(null)
    const [ showModalAddToCollection, setshowModalAddToCollection ] = useState(false)
    const image = useSelector(state => state.SelectedImageSlice.image)
    const collections = useSelector(state => state.CollectionSlice.inCollection)
    //const reload = useSelector(state => state.CollectionSlice.reload)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUserCollections(image.id, true))
    },[image, dispatch])

    useEffect(() => {
        console.log(collections.length, collections)
    },[collections])

    const getMonthAndYear = () => {
        const fecha = new Date(image.created_at)
        const nombreMes = fecha.toLocaleString('es-ES', { month: 'long' }); // 'long' para el nombre completo del mes
        return nombreMes + ' ' + fecha.getDate() + ', ' + fecha.getFullYear()
    }

    const handlerSetActive = (id) => {
        setIdActiveRow(id)
    }

    const handlerDownload = () => {
        const imageName = (image.description ? image.description  : 'unsplash-image')
        dispatch(downloadImage(image.id, imageName))
    }

    const handlerRemoveAction = (id) => {
        dispatch(removeImageFromCollection(id, image.id))
    }

    const handlerAddToCollection = () => {
        setshowModalAddToCollection(!showModalAddToCollection)
    }

    const handlerCloseModal = () => {
        setshowModalAddToCollection(false)
    }

  return (
    <>
        {image && <ModalAddToCollection show={showModalAddToCollection} closeModal={handlerCloseModal} imageId={image.id}/>}
        <div className='row container-details-image'>
            <div className='col'>
                {image && <img 
                    className='detail-fullimage'
                    src={image.urls.full}
                    alt={image.alt_description}
                />}
            </div>
            <div className='col'>
                <div className='row'>
                    <div>
                        <img 
                            className='user-avatar'
                            src={image.user.profile_image.small}
                            alt="Avatar usuario"
                        />
                        <span className='user-name-span'>
                            {image.user.name}
                        </span>
                    </div>
                    <div className='div-user-info'>
                        <p className='info published-on'>Published on {getMonthAndYear()}</p>
                    </div>
                    <div className='row'>
                            <button className='btn btn-link-light my-grey-button' onClick={() => handlerAddToCollection()}>
                                <img src={plusIcon} alt="+"/> Add to Collection
                            </button>
                            <button className='btn btn-link-light my-grey-button' onClick={e => handlerDownload()}>
                                <img src={downArrowIcon} alt="|"/>Download
                            </button>
                    </div>                
                </div>
                <div className='container collections-container'>
                    <h4>Collections</h4>
                    <div className='list-collection'>
                        {collections && collections.map((item, key) => {
                            return <RowGridCollection
                                        key={key}
                                        item={item}
                                        rowId={key} 
                                        info={item.total_photos + " photos"}
                                        isActive={idActiveRow === key}
                                        handlerSetActive={handlerSetActive}
                                        handlerAction={handlerRemoveAction}
                                        textAction={'Remove from Collection'}
                                        iconAction={removeIcon}
                                    />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ImagesDetailPage