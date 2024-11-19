import React from 'react'
import imgNotFound from '../../assets/image_not_found.png'

import './rowGridCollection.css'


const RowGridCollection = React.memo(({item, info, rowId, isActive, handlerSetActive, handlerAction, textAction, iconAction}) => {
        
  return (
    <div className={'row custom-row ' + (isActive ? 'active' : '')} onClick={() => handlerSetActive(rowId)}>
        <div className='col img-col'>
            <div className='div-small-image'>
                <img
                    src={item.cover_photo? item.cover_photo.urls.small : imgNotFound}
                    alt={item.title}

                />
            </div>
        </div>
        <div className='col info-col'>
            <div className='row'>
                <label className='info-col-title'>{item.title}</label>
            </div>
            <div className='row'>
                <label className='info-col-info'>{info}</label>
            </div>
        </div>
        <div className="col col-remove" onClick={() => handlerAction(item.id)}>
            <img className="remove-class" src={iconAction} alt={textAction}/> {textAction}
        </div>
    </div>
  )
})

export default RowGridCollection