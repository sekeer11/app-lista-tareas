import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  const[tareas, cambiarTareas] = useState(tareasGuardadas);
  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas]);

  let mostarCompletadasGuardadas;
  if (localStorage.getItem('mostarCompletadas') === null) {
      mostarCompletadasGuardadas = true;
  } else {
    mostarCompletadasGuardadas = localStorage.getItem('mostarCompletadas') === 'true';
  }

  const [mostarCompletadas, cambiarMostarCompletadas] = useState(mostarCompletadasGuardadas);
  
  useEffect(() => {
    localStorage.setItem('mostarCompletadas', mostarCompletadas.toString())
  }, [mostarCompletadas]);

  return (
    <div className="contenedor">
      <Header mostarCompletadas={mostarCompletadas} cambiarMostarCompletadas={cambiarMostarCompletadas} />   
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />   
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostarCompletadas={mostarCompletadas} />
    </div>
  );
}

export default App;
