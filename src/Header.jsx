import { useState } from 'react';
import './header.css'

export const Header = () => {
    const [showInput, setShowInput] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <img src="img/logo.png" alt="logo" />

            <div className="content-bards">
                <i id="menu" className="fa-solid fa-bars" onClick={toggleMenu}></i>
                <nav className={`nav-cel ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="">Iniciar Sesion</a></li>
                        <li><a href="">Registrate</a></li>
                        <li><a href="">Categorias</a></li>
                        <li><a href="">Salir</a></li>
                    </ul>
                </nav>
            </div>

            <nav className="nav-full">
                <ul>
                    <li className="seach-header"
                        onMouseEnter={() => setShowInput(true)}
                        onMouseLeave={() => setShowInput(false)}>
                        {showInput && <input type="text" id="search-input" placeholder="Buscar..." />}
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                    <li><i className="fa-solid fa-cart-shopping"></i><a href="#"></a></li>
                    <li><i id="user" className="fa-regular fa-user"></i><a href="#"></a></li>
                </ul>
            </nav>
            <nav id="user-menu" className="user-menu hidden">
                <ul>
                    <li><a href="#">Iniciar Sesion</a></li>
                    <li><a href="#">Registrate</a></li>
                    <li><a href="#">Salir</a></li>
                </ul>
            </nav>
        </header>
    )
}
