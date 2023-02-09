import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas}) => {
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
                tareas.map( t => {
                    return <Tarea 
                                key={t.id}
                                tarea={t}
                                toggleCompletada={toggleCompletada}
                                cambiarTareas={cambiarTareas}
                                editarTarea={editarTarea}
                                eliminarTarea={eliminarTarea}
                            /> 
                })
            :
                <div className="lista-tareas__mensaje"> No hay tareas agregadas</div>
            }
        </ul>
     );
}
 
export default ListaTareas;