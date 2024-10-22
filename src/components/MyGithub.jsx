import React, { useState } from 'react'
import '../style/myGithub.css';
import { Link } from 'react-router-dom';

export default function MyGithub() {
    const [bgColor, setBgColor] = useState('black');
    const onMouseBg = () => {
        setBgColor('red');
    }
    const outMouseBg = () => {
        setBgColor('black');
    }
    return (
        <div>
            <Link to='/' className='gitLink'>
                <div className='cornerText'>
                    <span className='gitButton' style={{ backgroundColor: bgColor, borderColor: bgColor }} onMouseOver={onMouseBg} onMouseOut={outMouseBg}>
                        Fork me on GitHub
                    </span>
                </div>
            </Link>
        </div>
    )
}


