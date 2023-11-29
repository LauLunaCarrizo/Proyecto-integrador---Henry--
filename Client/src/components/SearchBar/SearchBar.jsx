import './style.css'
import {useState} from 'react';
function SearchBar(props) {
   // console.log(props)
   const [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   return (
      <div>
         <input onChange={handleChange} value={id} type='text' />
         <button className='Agregar' onClick={handleClick}>Agregar</button>
      </div>
   );
}
export default SearchBar;