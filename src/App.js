import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const[tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'lavar la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'salir de paseo',
        completada: true
      },
      {
        id: 3,
        texto: 'tarea para eliminar',
        completada: true
      }
    ]
  );
  const [mostarCompletadas, cambiarMostarCompletadas] = useState(true);
  return (
    <div className="contenedor">
      <Header mostarCompletadas={mostarCompletadas} cambiarMostarCompletadas={cambiarMostarCompletadas} />   
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />   
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostarCompletadas={mostarCompletadas} />
    </div>
  );
}

export default App;
