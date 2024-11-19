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

  useEffect(() => {
    setColumnas(parseInt(windowWidth / 288))
  },[windowWidth])  

  useEffect(() => {
    setImages([])
    setDataArr([])
    setResult(data ?? [])
  },[data])

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
    if(dataArr.reduce( (acum, value) => acum + value.length, 0) === data.length){
      setImages(dataArr)
    }
    // eslint-disable-next-line
  },[dataArr])

  useEffect(() => {
    if(clear){
      setImages([])
    }
  },[clear])

  return ({ images });
}