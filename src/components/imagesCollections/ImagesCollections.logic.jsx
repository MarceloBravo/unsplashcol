import { useEffect, useState } from "react";

export const ImagesCollectionsLogic = (data, clear) => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ columnas, setColumnas ] = useState(parseInt(windowWidth / 288))
  const [ dataArr, setDataArr ] = useState([])
  const [ images, setImages ] = useState([])
  const [ result, setResult ] = useState([])
  
  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => setWindowWidth(window.innerWidth);
    // Agrega el evento 'resize' al cargar el componente
    window.addEventListener('resize', handleResize);
    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  //Calcula cuantas columnas de imágenes deben mostrarse en pantalla de acuerdo al ancho de la pantalla
  useEffect(() => {
    setColumnas(parseInt(windowWidth / 288))
  },[windowWidth])  

  useEffect(() => {
    setImages([])
    setDataArr([])
    setResult(data ?? [])
  },[data])


  //crea un array popr columna de imágenes a mostrar, que contiene las imágenes a mostrar por cada columna
  useEffect(() => {
    if(result.length > 0 && data){
        const imagenesPorColumna = Math.ceil(data.length / columnas)
        const dataColumna = result.slice(0, imagenesPorColumna)
        setDataArr([...dataArr, dataColumna])
        if(result.length > imagenesPorColumna){
            setResult(result.slice(imagenesPorColumna))
        }
    }
    // eslint-disable-next-line
  },[result])

  
  useEffect(() => {
    //Cuando se detecta que la totalidad de las imágenes han sido agregadas a los arrays de las columnas a mostrar, 
    //entonces de asigna a la constante "images" el array con las columnas de imágenes
    if(dataArr.reduce( (acum, value) => acum + value.length, 0) === data.length){
      setImages(dataArr)
    }
    // eslint-disable-next-line
  },[dataArr])

  //Limpia el array con las imágenes a mostrar
  useEffect(() => {
    if(clear){
      setImages([])
    }
  },[clear])

  return ({ images });
}