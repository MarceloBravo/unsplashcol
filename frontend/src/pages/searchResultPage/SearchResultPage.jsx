import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImgCard from '../../components/imgCard/ImgCard'
import bgImage from '../../assets/gradiend-bg.svg'
import searchIcon from '../../assets/Search.svg'
import './searchResultPage.css'
import { search } from '../../actions/search'

const SearchResultPage = () => {
    const divStyle = { backgroundImage: 'url(' + bgImage + ')'}
    const state = useSelector(state => state.searchSlice)
    const [ result, setResult ] = useState([])
    const [ images, setImages ] = useState([])
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ columnas, setColumnas ] = useState(parseInt(windowWidth / 288))
    const [ dataArr, setDataArr ] = useState([]);
    const [ criteria, setCriteria ] = useState('');
    const dispatch = useDispatch()
    
    
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

    /*
    useEffect(() => {
        debugger
        state.result.splice(0, parseInt(state.result.length / columnas))
        
        //console.log('SearchResultPage',state.result)
        //let elem = 0;
        state.result.forEach( e => {
            //if(tempArr.length === parseInt(state.result.length / columnas)){                
                //setTempArr([e])                
                //dataArr.push(tempArr)
                //tempArr = [];
                //elem = 0;
            //}else{
                setTempArr([...tempArr, e])
            //}
            //tempArr.push(e)
            //elem++
        })
        //if(tempArr.length > 0){
        //    dataArr.push(tempArr)
        //}
        
        //setImages(dataArr)
        
    },[state])
    */


    useEffect(() => {
        setImages([])
        setDataArr([])
        setResult(state.result)
        setCriteria(state.criteria)
    },[state])

    useEffect(() => {
        if(result.length > 0){
            const imagenesPorColumna = Math.ceil(state.result.length / columnas)
            const dataColumna = result.slice(0, imagenesPorColumna)
            setDataArr([...dataArr, dataColumna])
            if(result.length > imagenesPorColumna){
                setResult(result.slice(imagenesPorColumna))
            }
        }
    },[result])


    useEffect(() => {
        if(dataArr.length === columnas){
            setImages(dataArr)
        }
    },[dataArr])

    const handlerInputSearchChange= (e) => {
        setCriteria(e.target.value)        
    }

    const handlerInputCriteriaKeyDown = (e) => {
        if(e.keyCode === 13){
            setImages([])
            dispatch(search(criteria))
        }
    }
    
  return (
    <div className='container-page' >
        <div style={divStyle} className='top-gradient'></div>
        <div className='form-search' >
            <div className='search-in-result-page'>
                <input 
                    type='text' 
                    className='form-control input-search' 
                    value={criteria} 
                    placeholder='Enter your keywords...'
                    name="inputSearch"
                    onChange={e => handlerInputSearchChange(e)}
                    onKeyDown={handlerInputCriteriaKeyDown}
                /> 
                <img src={searchIcon} alt="Buscar" className="search-icon"/>   
            </div>
        </div>

        {images.length > 0 && <div className='container-results'>
            {images.map((col, i) => <div key={i} className="col">
                    {
                        col.map((img, y) => 
                            <ImgCard key={y} img={img}/>
                        )
                    }
                </div>
            )}

        </div>}
    </div>
  )
}

export default SearchResultPage