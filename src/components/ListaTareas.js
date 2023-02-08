import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas}) => {
    return ( 
        <ul className="lista-tareas">
            {
            tareas.length > 0 ?
                tareas.map( t => {
                    return <Tarea 
                                key={t.id}
                                tarea={t}
                                className=""
                            /> 
                })
            :
                <div className="lista-tareas__mensaje"> No hay tareas agregadas</div>
            }
        </ul>
     );
}
 
export default ListaTareas;