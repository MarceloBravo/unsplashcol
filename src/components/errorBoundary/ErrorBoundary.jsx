import React, { Component } from 'react';
import { setMessage } from '../../redux/slices/messageSlice';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Método del ciclo de vida para capturar errores
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Método para registrar detalles adicionales del error
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // Puedes registrar el error en un servicio externo si es necesario
    dispatchEvent(setMessage({title: 'Error', message:  "Error al obtener las colecciones:" + errorInfo, type: 'danger'}))
    console.error("ErrorBoundary atrapó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderizar un mensaje de error personalizado
      return (
        <div>
          <h1>Algo salió mal.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    // Renderizar los hijos si no hay errores
    return this.props.children;
  }
}

export default ErrorBoundary;
