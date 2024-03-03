import React from 'react';
import searchIcon from '../assets/searchIcon.svg';
import Image from 'next/image';

function Search() {
    return (
        <div>
            <div style={{display: "flex"}} class="wrapper block">
                <input style={{fontSize: "1.7rem", padding: "0.3rem", textAlign:"center"}} />
                <button style={{width:"3rem", height:"3rem"}} class="block"><Image width={32} className="nav-img" src={searchIcon} alt="search" /></button>
            </div>

        </div>
    )
}

export default Search