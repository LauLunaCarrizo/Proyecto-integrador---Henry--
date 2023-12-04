import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/action";
export default function Favorites({onClose}) {
  const myFavorites = useSelector(state => state.myFavorites)

  const dispatch = useDispatch()

  const handleOrder = event => {
    dispatch(orderCards(event.target.value))
  }

  const handleFilter = event => {
    dispatch(filterCards(event.target.value))
  }

  return (
  <div>
    <div>
    <select name="order" onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
      </select>  
      <select name="filter" onChange={handleFilter}>
        <option value="ALL">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>

      </select>
    </div>


  <div className='Cards'>

      {
        !myFavorites.length
        ? <h2>Noy hay favoritos</h2>
        :
        myFavorites.map((favorite)=>(
           <Card 
          key={favorite.id}
          id={favorite.id}
           name={favorite.name}
           status={favorite.status}
           species={favorite.species}
           gender={favorite.gender}
           origin={favorite.origin}
           image={favorite.image}
           onClose={onClose}
           />
        ))
        } 
  </div>
</div>
  )
}