import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setData } from '../../redux/slices/selectedCollectionSlice'

export const CardCollectionPreviewLogic = (data) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const capitalCase = (text) => {
        const label = text.substring(0,1).toUpperCase() + text.substring(1).toLowerCase()
        return label
    }

    const handlerClickCard = () => {
        dispatch(setData({id: data.id, title: data.title, cantPhotos: data.total_photos, photos: data.preview_photos}))
        navigate('/collection_photos/'+data.id)
    }

  return ({ capitalCase, handlerClickCard })
}