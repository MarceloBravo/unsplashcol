import React from 'react'
import { CardCollectionPreviewLogic } from './CardCollectionPreview.logic'
import imgNotFound from '../../assets/image_not_found.png'
import './cardCollectionPreview.css'

//Muestra uuna tarjeta, por cada colección, con 1 2 ó 3 vistas previas de las imágenes contenidas en la colección
const CardCollectionPreview = ({data}) => {
    const { capitalCase, handlerClickCard } = CardCollectionPreviewLogic(data)

  return (
    <div className='col collection-card' onClick={() => handlerClickCard()}>
        <div className='row'>
            <div className={'col img-left ' + (data.total_photos <= 1 ? 'una-foto' : (data.total_photos === 2 ? 'dos-fotos' : 'tres-fotos'))}>
                <img5
                    className={data.total_photos <= 1 ? 'una-foto' : (data.total_photos === 2 ? 'dos-fotos' : 'tres-fotos')}
                    src={data.preview_photos ? data.preview_photos[0].urls.small : imgNotFound}
                    alt={data.title}
                />
            </div>
            {data.total_photos === 2 && <div className='col img-right-1'>
                <img
                    className={(data.total_photos > 2 ? 'tres-fotos' : '')}
                    src={data.preview_photos ? data.preview_photos[1].urls.small : imgNotFound}
                    alt={data.title}
                />
            </div>}
            {data.total_photos >= 3 &&  <div className='col img-right-2'>
                <div className='row'>
                    <img
                        className='img-1'
                        src={data.preview_photos ? data.preview_photos[1].urls.small : imgNotFound}
                        alt={data.title}
                    />
                </div>
                <div className='row'>
                    <img
                        className='img-2'
                        src={data.preview_photos ? data.preview_photos[2].urls.small : imgNotFound}
                        alt={data.title}
                    />
                </div>
            </div>}
        </div>
        <label className='row lbl-nombre'>{capitalCase(data.title)}</label>
        <label className='row lbl-info'>{data.total_photos} photos</label>
    </div>
  )
}

export default CardCollectionPreview