import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';

const App = () => {
  const[tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'lavar la ropa',
        completada: false
      },
      {
        id: 1,
        texto: 'salir de paseo',
        completada: false
      }
    ]
  );
  console.log(tareas);
  return (
    <div className="contenedor">
      <Header />   
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />   
    </div>
  );
}

export default App;
