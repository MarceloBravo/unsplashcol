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

    //Función de evento click que redirecciona a la página que muestra las fotos que contiene la colección relacionada a la tarjeta
    const handlerClickCard = () => {
        dispatch(setData({id: data.id, title: data.title, cantPhotos: data.total_photos}))
        navigate('/collection_photos/'+data.id)
    }

  return ({ capitalCase, handlerClickCard })
}