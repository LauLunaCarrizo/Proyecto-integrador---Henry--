import React, { useEffect, useState } from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/action';

export default function Card(props) {

   const dispatch = useDispatch();
   const [isFav, setFav] = useState(false);
   
   const myFavorites = useSelector((state) => state.myFavorites)
   useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setFav(true);
      }
   });
}, [myFavorites]);

   const handleFavorite = () =>{
      if(isFav){
         setFav(false);
         dispatch(removeFav(props.id))
      }else{
         setFav(true)
         dispatch(addFav(props))
      }
   }

   return (<div className='Card'>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <button onClick={()=> props.onClose(props.id)}>X</button>
      <Link to={`/detail/${props.id}`}>
      <h2>{props.name}</h2>
      </Link>
      <h3>{props.status}</h3>
      <h3>{props.species}</h3>
      <h3>{props.gender}</h3>
      {/* <h3>{origin.name}</h3> */}
      <img className='image' src={props.image} alt='' />    
   </div>
   );
}
