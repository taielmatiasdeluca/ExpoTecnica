import React from 'react'
import './card.css'
import { WavyLink } from 'react-wavy-transitions'



export const Card = (props) => {
    let mod = props.modalidad == 'Alimentos' ? 'alimentos' : 'info'
    return (
        
        <div className='tarjeta'>
             <div className="banner unica">
                <img src={props.imgurl} alt="" className='imgportada'/>
                <h2 className={mod}>{props.curso}</h2>
            </div>
            <div className="detallesProyecto titilium">
                <h3>{props.proy}</h3>
                <span>{props.descrip}</span>
                <h5>{props.alumnos}</h5>
                <a href={props.link} className="btnLink" target='_blank'>Ver más</a>
            </div>

        </div>
    )
}

