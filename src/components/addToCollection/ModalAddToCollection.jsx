import React from 'react'
import RowGridCollection from '../rowGridCollection/RowGridCollection'
import { ModalAddToCollectionLogic } from './ModalAddToCollection.logic'
import plusIcon from '../../assets/Plus.svg'
import './addToCollection.css'

const ModalAddToCollection = ({show, closeModal, imageId}) => {
    const { 
        value, idActiveRow, dataCollection, //Constantes
        handlerChangeValue, handlerSetActive, handlerGridAction, handlerNewCollection   //funciones
    } = ModalAddToCollectionLogic(closeModal, imageId)
   
  return (
    <>
    {show && 
        <div className='modal-container'>
            <div className='modal-background' onClick={closeModal}></div>            
            <div className='modal-form'>
                <h4>Add to Collections</h4>
                <div className='row'>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={value}
                        onChange={e => handlerChangeValue(e)}
                        placeholder='collection name to search for'
                    />
                </div>
                <div className='row info-add-collection'>
                     <div className='p-info-count-matches col'>
                     {dataCollection && <p>  {dataCollection.length} matches </p>}
                    </div>
                    <div className='col btn-new-collection'> 
                        {dataCollection && dataCollection.length === 0 && 
                            <label onClick={() => handlerNewCollection()}><img src={plusIcon} alt="Nueva colección"/>Create Collection</label>
                        }
                    </div>
                </div>
                <div className='list-collection-modal-container'>
                    <div className='list-collection-modal'>
                        {dataCollection && dataCollection.map((item, key) => 
                            <RowGridCollection
                                key={key}
                                item={item}
                                rowId={key} 
                                info={item.total_photos + " photos"}
                                isActive={idActiveRow === key}
                                handlerSetActive={handlerSetActive}
                                handlerAction={handlerGridAction}
                                textAction={'Add to Collection'}
                                iconAction={plusIcon}
                            />
                            
                        )}
                    </div>
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default ModalAddToCollection