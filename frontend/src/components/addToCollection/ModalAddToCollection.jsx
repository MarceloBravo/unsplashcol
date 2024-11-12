import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addImageToCollection, createCollection, getUserCollections } from '../../actions/search'
import RowGridCollection from '../rowGridCollection/RowGridCollection'
import plusIcon from '../../assets/Plus.svg'

import './addToCollection.css'


const ModalAddToCollection = ({show, closeModal, imageId}) => {
    const collection = useSelector(state => state.CollectionSlice.notInCollection)
    //const reload = useSelector(state => state.CollectionSlice.reload)
    const [ value, setValue ] = useState('')
    const [ idActiveRow, setIdActiveRow ] = useState(null)
    //const [ idCollection, setIdCollection ] = useState(null)
    const [ dataCollection, setDataCollection ] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserCollections(imageId, false))
    },[imageId, dispatch])

    useEffect(() => {
        debugger
        setDataCollection(collection.filter(e => e.title.includes(value)))
    },[collection, value])

    /*
    useEffect(() => {        
        if(reload){
            setTimeout(() => {
                    dispatch(getUserCollections(imageId, true))
                    dispatch(getUserCollections(imageId, false))
                }
            , 3000)
        }
    },[reload])
    */

    const handlerChangeValue = (e) => {
        setValue(e.target.value)
    }
    
    const handlerSetActive = (id) => {
        setIdActiveRow(id)
    }

    const handlerGridAction = (id) => {
        //setIdCollection(id)
        dispatch(addImageToCollection(id, imageId))
        closeModal()
    }

    const handlerNewCollection = () => {
        if(value !== ''){
            dispatch(createCollection(value))
        }else{
            console.log('Debe ingresar el nombre de la colección')
        }
    }

    
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