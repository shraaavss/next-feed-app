import React from 'react';
import searchIcon from '../assets/searchIcon.svg';
import Image from 'next/image';

function Search() {
    return (
        <div>
            <div class="wrapper block">
                <input />
                <button class="block"><Image width={40} className="nav-img" src={searchIcon} alt="search" /></button>
            </div>

        </div>
    )
}

export default Search