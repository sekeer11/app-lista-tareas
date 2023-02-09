import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas, mostarCompletadas}) => {
    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
        }));
    }

    const eliminarTarea = (id) => {
        cambiarTareas(
            tareas.filter( t => t.id !== id)
        );
    }

    return ( 
        <ul className="lista-tareas">
            {
            tareas.length > 0 ?
                tareas.map( tarea => {
                    if (mostarCompletadas){
                        return <Tarea 
                                    key={tarea.id}
                                    tarea={tarea}
                                    toggleCompletada={toggleCompletada}
                                    cambiarTareas={cambiarTareas}
                                    editarTarea={editarTarea}
                                    eliminarTarea={eliminarTarea}
                                /> 
                    } else if (!tarea.completada) {
                        return <Tarea 
                                    key={tarea.id}
                                    tarea={tarea}
                                    toggleCompletada={toggleCompletada}
                                    cambiarTareas={cambiarTareas}
                                    editarTarea={editarTarea}
                                    eliminarTarea={eliminarTarea}
                                /> 
                    }
                })
            :
                <div className="lista-tareas__mensaje"> No hay tareas agregadas</div>
            }
        </ul>
     );
}
 
export default ListaTareas;