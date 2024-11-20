import axios from 'axios'
import { setResult } from '../redux/slices/searchSlice'
import { setMessage } from '../redux/slices/messageSlice.jsx';
import { setInCollection, setNotInCollection, setAllCollections, setRefresh} from '../redux/slices/collectionsSlice';
import { UNSPLASH_ACCESS_KEY } from '../shared/constantes.js'
import { setCollectionPhotos } from '../redux/slices/selectedCollectionSlice.jsx';
import { setImage } from '../redux/slices/selectedImageSlice.jsx';
import { setShowSpinner } from '../redux/slices/spinnerSlice.jsx';
export const ACCESS_TOKEN = 'mxCLrQITsENlZrtxuvG09ri8hXGZvpWILVD8VXYlDoQ'

export const search = (value) => async (dispatch) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: value,
            per_page: 20, 
            page: 1
          },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        });
        if(response.data.results.length === 0){
          dispatch(setMessage({title: 'Error', message:  "No se encontraron imágenes relacionadas con ''" + value + "''. Intenta con otra búsqueda.", type: 'danger'}))
        }
        dispatch(setResult({result: response.data.results, criteria: value}))
      } catch (error) {
        if(error.status === 403){
          dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
        }else{
          dispatch(setMessage({title: 'Error', message:  "Error al buscar imágenes" + error.message, type: 'danger'}))
        }
        
      }
    
}

export const getPhoto = (id) => async (dispatch) => {
  try {
      const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
        params: {id},
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      });
      if(!response.data){
        dispatch(setMessage({title: 'Error', message:  "No se encontró la imágen.", type: 'danger'}))
      }else{
        dispatch(setImage({image: response.data}))
      }
    } catch (error) {
      if(error.status === 403){
        dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
      }else{
        dispatch(setMessage({title: 'Error', message:  "Error al buscar imágenes" + error.message, type: 'danger'}))
      }
    }
  
}

export const getUserCollections = (imageId = null) => async (dispatch)  => {
  try{
      const response = await axios.get('https://api.unsplash.com/users/marcelo_b/collections', {
        params: {
          per_page: 30, 
          page: 1
        },
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        },
      });

      const notInCollection = response.data.filter(elem => elem.preview_photos === null || elem.preview_photos.find(e => e.id ===  imageId) === undefined)
      const inCollection = response.data.filter(elem => elem.preview_photos !== null && elem.preview_photos.find(e => e.id ===  imageId) !== undefined)
      dispatch(setNotInCollection({notInCollection}))
      dispatch(setInCollection({inCollection}))
    
  }catch(error){
    if(error.status === 403){
      dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
    }else{
      dispatch(setMessage({title: 'Error', message:  "Error al obtener las colecciones:" + error.message, type: 'danger'}))
    }
  }
}

export const downloadImage = (photoId, imageName) => async (dispatch) => {
  try{
    const urlDescarga = `https://api.unsplash.com/photos/${photoId}/download`;
    const response = await axios.get(urlDescarga, 
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          //Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    )
    const downloadLink = response.data.url;

    //Descargar la imagen como un Blob para evitar abrirla en una pestaña
    const imageResponse = await axios.get(downloadLink, { responseType: 'blob' });
    const imageBlob = new Blob([imageResponse.data], { type: 'image/jpeg' });

    //Crear un enlace de descarga usando el Blob
    const link = document.createElement("a");
    link.href = URL.createObjectURL(imageBlob);
    link.download = `${imageName}.jpg`; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    dispatch(setMessage({title: 'Atención', message:  "Imagen descargada correctamente desde Unsplash.", type: 'success'}))

  }catch(error){
    if(error.status === 403){
      dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
    }else{
      dispatch(setMessage({title: 'Error', message:  "Error al descargar la imágen:" + error.message, type: 'danger'}))
    }
  }
}

export const addImageToCollection = (collectionId, imageId) => async (dispatch) => {
  try{
        await axios.post(`https://api.unsplash.com/collections/${collectionId}/add`,      
          { photo_id: imageId },
          {
              headers: {
                  Authorization: `Bearer ${ACCESS_TOKEN}`
              }
          }
      );
      dispatch(setMessage({title: 'Atención', message:  "La imagen ha sido agregada de la colección exitosamente.", type: 'success'}))
      dispatch(setRefresh({refresh: true}))
      dispatch(setShowSpinner({label1: 'Estamos actualizando el listado de colecciones.', label2: 'Esto podría tardar unos segundos...'}))
      
  }catch(error){
    if(error.status === 403){
      dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
    }else{
      dispatch(setMessage({title: 'Error', message:  "Error al agregar la imágen a la colección:" + error.message, type: 'danger'}))
    }
  }
}

export const removeImageFromCollection = (collectionId, imageId) => async (dispatch) => {
  try{
        await axios.delete(`https://api.unsplash.com/collections/${collectionId}/remove`,
          {
              headers: {
                  Authorization: `Bearer ${ACCESS_TOKEN}`
              },
              data: {
                photo_id: imageId
              }
          }
      );
      //dispatch(setRemoveFromCollection({collectionId}))
      dispatch(setMessage({title: 'Atención', message:  "La imagen ha sido eliminada de la colección.", type: 'success'}))
      dispatch(setRefresh({refresh: true}))
      dispatch(setShowSpinner({label1: 'Estamos actualizando el listado de colecciones.', label2: 'Esto podría tardar unos segundos...'}))

  }catch(error){
    if(error.status === 403){
      dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
    }else{
      dispatch(setMessage({title: 'Error', message:  "Error al intentar eliminar la imágen de la colección:" + error.message, type: 'danger'}))
    }
  }
}

export const createCollection = (title, description = '', isPrivate = false) => async (dispatch) => {
  try{
    await axios.post('https://api.unsplash.com/collections',
      {
          title: title,
          description: description,
          private: isPrivate
      },
      {
          headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache'
          }
      }
    );
    dispatch(setMessage({title: 'Atención', message:  "Colección creada exitosamente", type: 'success'}))
    dispatch(setRefresh({refresh: true}))
    dispatch(setShowSpinner({label1: 'Estamos actualizando el listado de colecciones.', label2: 'Esto podría tardar unos segundos...'}))
  }catch(error){
    if(error.status === 403){
      dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
    }else{
      dispatch(setMessage({title: 'Error', message:  "Error al crear la colección:" + error.message, type: 'danger'}))
    }
  }
}

export const getAllCollections = (page = 1) => async (dispatch)  => {
  try{
    const response = await axios.get('https://api.unsplash.com/users/marcelo_b/collections', {
      params: {
        per_page: 9, 
        page
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      },
    });
    dispatch(setAllCollections({data: response.data}))
    
  }catch(error){
    if(error.status === 403){
      dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
    }else{
      dispatch(setMessage({title: 'Error', message:  "Error al obtener las colecciones:" + error.message, type: 'danger'}))
    }
  }
}

export const getCollectionPhotos = (id, page=1) => async (dispatch) => {
  try{
    const response = await axios.get(`https://api.unsplash.com/collections/${id}/photos`, {
      params: {
        per_page: 20, 
        page
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      },
    });
    
    dispatch(setCollectionPhotos({photos: response.data}))
  }catch(error){
    if(error.status === 403){
      dispatch(setMessage({title: 'Error', message:  "Se ha excedido el máximo de peticiones. Intentalo más tarde.", type: 'danger'}))
    }else{
      dispatch(setMessage({title: 'Error', message:  "Error al obtener las fotos de la colección:" + error.message, type: 'danger'}))
    }
  }
}

