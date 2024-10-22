import React, { useEffect, useState } from 'react'
import '../style/searchBar.css'
import { Link } from 'react-router-dom';

export default function SearchBar() {
    const [inputText, setInputText] = useState('');
    const changeText = (event) => {
        setInputText(event.target.value);
    }
    return (
        <div className='searchText'>
            <input type="text" id='searchBox' placeholder='Search...' onChange={changeText} value={inputText} />
            <div className='searchContainer'>
                <Link to={`/search/${inputText}`} className='buttonLink'>
                    <button id='searchIcon' style={{
                        backgroundColor: (inputText !== '') ? '#051c33' : 'rgba(239, 239, 239, 0.3)'
                    }} disabled={inputText===''?'disabled':''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <path d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z" fill='#ffffff'></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}
