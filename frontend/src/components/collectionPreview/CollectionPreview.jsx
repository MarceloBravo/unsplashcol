import React from 'react'
import imgNotFound from '../../assets/image_not_found.png'
import './collectionPreview.css'

const CollectionPreview = ({data}) => {

    const capitalCase = (text) => {
        const label = text.substring(0,1).toUpperCase() + text.substring(1).toLowerCase()
        return label
    }

  return (
    <div className='col collection-card'>
        <div className='row'>
            <div className={'col img-left ' + (data.total_photos <= 1 ? 'una-foto' : (data.total_photos === 2 ? 'dos-fotos' : 'tres-fotos'))}>
                <img
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

export default CollectionPreview