import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = ({mostarCompletadas, cambiarMostarCompletadas}) => {

    return ( 
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            <button className="header__boton" onClick={()=>cambiarMostarCompletadas(!mostarCompletadas)}>
                {mostarCompletadas === true ? 'No mostar completadas' : 'Mostar completadas'}
                <FontAwesomeIcon icon={mostarCompletadas === true ? faEyeSlash : faEye} className="header__icono-boton"/>
            </button>
        </header>
     );
}
 
export default Header;