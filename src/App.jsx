import './App.css';
import React from "react"
import axios from 'axios';
import {Routes, Route} from "react-router-dom"
import About from './components/About.jsx'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail.jsx'
import NotFound from './components/NotFound/NotFound.jsx';
function App() {

   const [oldChars, setCharacters] = React.useState([]);

   function onSearch(id) {
      const characterId = oldChars.filter(char => char.id ===Number(id)
      )
      if(characterId.length){
         return alert( `${characterId[0].name} ya existe ` )
      }
      axios(`https://rickandmortyapi.com/api/character/${id}?key={pi-laulunacarrizo}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }
   const onClose = (id) => {
      setCharacters(
         oldChars.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   }
   return (
      <div className='App'>
            <Nav onSearch={onSearch}/>
            {/* <Cards onClose={onClose} characters={oldChars}></Cards> */}
         <Routes>
            <Route path="/home" element={<Cards onClose={onClose} characters={oldChars}></Cards>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/detail/:id" element={<Detail></Detail>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
      </div>
   );
}

export default App;
