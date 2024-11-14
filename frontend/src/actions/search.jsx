import axios from 'axios'
import { setResult } from '../redux/slices/searchSlice'
import { setMessage } from '../redux/slices/errorSlices';
import { setAddToCollection, setInCollection, setNotInCollection, setRemoveFromCollection, setReload, setAllCollections} from '../redux/slices/collectionsSlice';
import { UNSPLASH_ACCESS_KEY } from '../shared/constantes.js'
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
        dispatch(setResult({result: response.data.results, criteria: value}))
      } catch (error) {
        dispatch(setMessage({message:  "Error al buscar imágenes:" + error.message, code: error.code, detail: JSON.stringify(error), type: 'danger'}))
      }
    
}

export const getUserCollections = (imageId = null, imageInCollection = false) => async (dispatch)  => {
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
    if(imageInCollection === false){
      const notInCollection = response.data.filter(elem => elem.preview_photos === null || elem.preview_photos.find(e => e.id ===  imageId) === undefined)
      dispatch(setNotInCollection({notInCollection}))
    }else{
      const inCollection = response.data.filter(elem => elem.preview_photos !== null && elem.preview_photos.find(e => e.id ===  imageId) !== undefined)
      dispatch(setInCollection({inCollection}))
    }
    
  }catch(error){
    console.log(error)
    dispatch(setMessage({message:  "Error al obtener las colecciones:" + error.message, code: error.code, detail: JSON.stringify(error), type: 'danger'}))
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

    dispatch(setMessage({message:"Imagen descargada correctamente desde Unsplash.", code: 200, detail: null, type: 'success'}))

  }catch(error){
    dispatch(setMessage({message:  "Error al obtener las colecciones:" + error.message, code: error.code, detail: JSON.stringify(error), type: 'danger'}))
  }
}

export const addImageToCollection = (collectionId, imageId) => async (dispatch) => {
  try{
        const response = await axios.post(`https://api.unsplash.com/collections/${collectionId}/add`,      
          { photo_id: imageId },
          {
              headers: {
                  Authorization: `Bearer ${ACCESS_TOKEN}`
              }
          }
      );
    
      dispatch(setMessage({message:  "Imagen agregada a la colección exitosamente:", code: 200, detail: response.data, type: 'success'}));    
      
      dispatch(setAddToCollection({collectionId}))
      
  }catch(error){
    dispatch(setMessage({message:  "Error al agregar la imágen a la colección:" + error.message, code: error.code, detail: JSON.stringify(error), type: 'danger'}));
  }
}

export const removeImageFromCollection = (collectionId, imageId) => async (dispatch) => {
  try{
        const response = await axios.delete(`https://api.unsplash.com/collections/${collectionId}/remove`,
          {
              headers: {
                  Authorization: `Bearer ${ACCESS_TOKEN}`
              },
              data: {
                photo_id: imageId
              }
          }
      );
      dispatch(setMessage({message:  "Imagen eliminada de la colección exitosamente:", code: 200, detail: response.data, type: 'success'}));    
      
      dispatch(setRemoveFromCollection({collectionId}))

  }catch(error){
    console.log(error)
    dispatch(setMessage({message:  "Error al intentar eliminar la imágen de la colección:" + error.message, code: error.code, detail: JSON.stringify(error), type: 'danger'}));
  }
}

export const createCollection = (title, description = '', isPrivate = false) => async (dispatch) => {
  try{
    const response = await axios.post('https://api.unsplash.com/collections',
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
    dispatch(setMessage({message:  "Colección creada exitosamente:", code: 200, detail: response.data, type: 'success'}));    
    dispatch(setReload({reload: true}))
  }catch(error){
    console.log("Error al crear la colección:", error)
    dispatch(setMessage({message: "Error al crear la colección:" + error.message, code: error.code, detail: JSON.stringify(error), type: 'danger'}));
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
    console.log(error)
    dispatch(setMessage({message:  "Error al obtener las colecciones:" + error.message, code: error.code, detail: JSON.stringify(error), type: 'danger'}))
  }
}

