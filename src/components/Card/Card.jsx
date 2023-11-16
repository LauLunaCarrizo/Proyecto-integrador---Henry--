import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (<div className='Card'>
      <button onClick={()=>onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
      <h2>{name}</h2>
      </Link>
      <h3>{status}</h3>
      <h3>{species}</h3>
      <h3>{gender}</h3>
      {/* <h3>{origin}</h3> */}
      <img className='image' src={image} alt='' />    
   </div>
   );
}
