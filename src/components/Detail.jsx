import axios from 'axios'
import {useParams} from 'react-router-dom'
import React from 'react';

export default function Detail(props) {
	const params = useParams()
	const id = params.id

	const [character, setCharacter] = React.useState({});

	React.useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}?key={pi-laulunacarrizo}`).then(
		   ({ data }) => {
			  if (data.name) {
				 setCharacter(data);
			  } else {
				 window.alert('No hay personajes con ese ID');
			  }
		   }
		);
		return setCharacter({});
	 },[id]);
	return (
		<div style={{ height:"300px", width:"600px", textAlign:"center"}}>
			<div>
			<h2>{character.name}</h2>
			<h2>{character.status}</h2>
			<h2>{character.species}</h2>
			<h2>{character.gender}</h2>
			<img src={character.image} alt=''></img>
			</div>
			

		</div>
	)
};

