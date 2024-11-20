import React from 'react'
import RowGridCollection from '../../components/rowGridCollection/RowGridCollection'
import ModalAddToCollection from '../../components/addToCollection/ModalAddToCollection'
import { ImagesDetailPageLogic } from './ImagesDetailPage.logic'
import downArrowIcon from '../../assets/down arrow.svg'
import plusIcon from '../../assets/Plus.svg'
import removeIcon from '../../assets/Remove.svg'
import './imagesDetailPage.css'

//Página con el detalle de la imágen seleccionada por el usuario
const ImagesDetailPage = () => {
    const { 
            idActiveRow, 
            showModalAddToCollection, 
            image, 
            collections, 
            getMonthAndYear, 
            handlerSetActive, 
            handlerDownload, 
            handlerRemoveAction, 
            handlerAddToCollection, 
            handlerCloseModal
        } = ImagesDetailPageLogic()

  return (
    <>
        {image && <ModalAddToCollection show={showModalAddToCollection} closeModal={handlerCloseModal} imageId={image.id}/>}
        {image && 
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
    }
    </>
  )
}

export default ImagesDetailPage