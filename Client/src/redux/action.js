import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "./action-types"
import axios from "axios"

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
}
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
}
export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender
    }
}
export function orderCards (order) {
    return {
        type: ORDER,
        payload: order
    }
}