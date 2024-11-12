import React from 'react'
import './modalInputToken.css'

const ModalInputToken = ({value, handlerValueChange, handlerBtnAplicarClick, handlerBtnCancelarClick}) => {
    

    

    
  return (
    <div className='modal-token-container'>
        <div className='modal-background'></div>
        <div className='modal-form-token '>
            <div className='row'>
                <label> Ingresa el código de autorización:
                    <input type='text' className='form-control' value={value} onChange={(e)=>handlerValueChange(e)}/>
                </label>
            </div>
            <div className='row content-buttons'>
                <button type='button' className='btn btn-success aplicar' onClick={() => handlerBtnAplicarClick()}>Aplicar token</button>
                <button type='button' className='btn btn-primary cancelar' onClick={() => handlerBtnCancelarClick()}>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default ModalInputToken