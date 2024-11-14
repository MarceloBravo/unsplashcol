import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCollections } from '../../actions/search'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview'
import './collectionPage.css'

const CollectionPage = () => {
    const collection = useSelector(state=> state.CollectionSlice.allCollections)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCollections())
        // eslint-disable-next-line
    },[])

  return (
    <div className='row container-page collection-container-page'>
        <div className='title-container'>
            <div></div>
                <div className='title'>
                    <h1 className='texto-gradiente'>Collections</h1>
                    <label>Explore the world through collections of beatifull<br/>
                    photos free to use under the <span className='bold-underline'>Unsplash License</span>.</label>
                </div>
            <div></div>
        </div>
        {collection && collection.map((elem, key) => 
            <CollectionPreview
                key={key}                
                data={elem}
            />
        )}
    </div>
  )
}

export default CollectionPage