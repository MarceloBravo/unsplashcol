import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeMessage } from '../../redux/slices/messageSlice';

export const AlertComponentLogic = () => {
    const timeAlert = 10000
    const [ showAlert, setShowAlert ] = useState()
    const [progress, setProgress] = useState(100); // Estado inicial de la barra (100%)
    const alertRef = useRef(null); // Referencia al componente de alerta
    const dispatch = useDispatch()
    

    useEffect(() => {
        // Configuración del intervalo de tiempo que reduce la barra de progreso en 1% cada 100 ms (10 segundos = 100 intervalos)
        const interval = setInterval(() => {
            setProgress((prev) => (prev > 0 ? prev - 1 : 0));
        }, 100);

        //Configuración del tiempo que permanecerá vicibe el componente de mensaje en pantalla
        setShowAlert(true)
        const alertInterval = setTimeout( () => closeAlert(), timeAlert)

        //Clean up de los temporizadores
        return () => {
            clearTimeout(alertInterval)
            clearInterval(interval)
        }
        // eslint-disable-next-line
    },[])

    const closeAlert = (id = 0) => {
        setShowAlert(false)
        dispatch(removeMessage({id}))
    }


    // Función para oscurecer un color en formato RGB
    const darkenColor = () => {
        if (alertRef.current) {
            const factor = 0.2
            const rgb = getComputedStyle(alertRef.current).backgroundColor;
            
            const match = rgb.match(/\d+/g); // Extraer valores RGB
            if (!match) return rgb;
        
            const [r, g, b] = match.map((value) =>
            Math.max(0, Math.min(255, Math.floor(value * (1 - factor))))
            );
            return `rgb(${r}, ${g}, ${b})`;
        }
        return ''
    };

  return ({ showAlert, progress, alertRef, darkenColor, closeAlert })
}