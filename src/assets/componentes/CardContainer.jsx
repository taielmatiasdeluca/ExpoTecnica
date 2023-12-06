import { Card } from './cards/Card'
import React, { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';


export const CardContainer =  (props) => {
  const {data} = useFetch('https://api.tecnica3.com.ar/Expo/listProyectos');
  return (
    <div className='bandideado'>
      <h2 className='unica'>{props.modalidad}</h2>
      <div className="cardContainer">
        {data?.map(proyecto =>
            <Card key= {proyecto.id} modalidad={proyecto.modalidad} curso={proyecto.curso} imgurl={proyecto.imgurl} alumnos={proyecto.alumnos} descrip={proyecto.descrip} proy={proyecto.proyecto} link={proyecto.url}/>)}
      </div>


    </div>
  )

  
  
}
