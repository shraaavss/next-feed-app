import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import home from '../assets/homeIcon.svg';
import search from '../assets/searchIcon.svg';
import prof from '../assets/ProfileIcon.svg';

export default function Header() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSearchSubmit = () => {
    // Update the search query state
    // Perform any necessary search-related actions
    // For example, fetch search results

    // Navigate to the search page with the search query
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);

    // Close the search popup
    closePopup();
  };

  return (
    <div className='header-wrapper'>
        <header className="main-wrap">
            <nav className="nav-bar">
                <Link href={"/"}><Image width={40} className="nav-img" src={home} alt="home" /></Link>
                <div onClick={openPopup}><Image width={40} className="nav-img" src={search} alt="search" /></div>
                <Link href={"/profile"}><Image width={40} className="nav-img" src={prof} alt="profile" /></Link>
            </nav>
        </header>
            {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <input
              type="text"
              placeholder="Enter your search query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearchSubmit}>Search</button>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
