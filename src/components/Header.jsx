import Image from 'next/image';
import Link from 'next/link';
import home from '../assets/homeIcon.svg';
import search from '../assets/searchIcon.svg';
import prof from '../assets/ProfileIcon.svg';

export default function Header() {
  return (
    <div>
        <header className="main-wrap">
            <nav className="nav-bar">
                <Link href={"/"}><Image width={40} className="nav-img" src={home} alt="home" /></Link>
                <Link href={"/search"}><Image width={40} className="nav-img" src={search} alt="search" /></Link>
                <Link href={"/profile"}><Image width={40} className="nav-img" src={prof} alt="profile" /></Link>
            </nav>
        </header>
    </div>
  )
}
