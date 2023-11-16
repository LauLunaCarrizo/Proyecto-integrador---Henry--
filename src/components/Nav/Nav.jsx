import SearchBar from "../SearchBar/SearchBar"
import "./Nav.css"
import {NavLink} from 'react-router-dom'

export default function Nav(props){
    // console.log(props)
return (
    <div className='SearchBar'>
        <div>
            <h2 className="nombre">Rick and Morty</h2>
        </div>
        <SearchBar onSearch={props.onSearch} />
        <button>
        <NavLink to="/about" style={({ isActive }) =>isActive ? {color:"lightcoral"} : null}>About</NavLink>
        </button>
        <button>
        <NavLink to="/home" style={({ isActive }) =>isActive ? {color:"lightcoral"} : null}>Home</NavLink>
        </button>
    </div>
)
}

