import './App.css';
import React, { useEffect } from "react"
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
import About from './components/About.jsx'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail.jsx'
import NotFound from './components/NotFound/NotFound.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';


function App() {

   const [oldChars, setCharacters] = React.useState([]);

   const [access, setAccess] = React.useState(false);
   const navigate = useNavigate();
   const location = useLocation()


   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         !access && navigate('/home');
      });
   }

   function logOut(){
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      const characterId = oldChars.filter(char => char.id ===Number(id)
      )
      if(characterId.length){
         return alert( `${characterId[0].name} ya existe ` )
      }
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
         {
            location.pathname !== "/" && <Nav logout={logOut} onSearch={onSearch}/> 
         }
         <Routes>
            <Route path="/home" element={<Cards onClose={onClose} characters={oldChars}></Cards>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/detail/:id" element={<Detail></Detail>}></Route>
            <Route path='/favorites' element={<Favorites onClose={onClose}></Favorites>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route path='/' element={<Form login={login}></Form>}></Route>
         </Routes>
      </div>
   );
}

export default App;
