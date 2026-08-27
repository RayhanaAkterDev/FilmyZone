import { useState } from 'react';

import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
} from 'flowbite-react';

import { NavLink, Link } from 'react-router';

import logo from '@/assets/images/shared/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/movies', label: 'Movies' },
        { to: '/genres', label: 'Genres' },
        { to: '/trending', label: 'Trending' },
        { to: '/favorites', label: 'Favorites' },
        { to: '/watch-later', label: 'Watch Later' },
    ];

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-100 w-full border-b border-gray-200/60 bg-surface/95 py-2 backdrop-blur-sm">
            <Navbar
                fluid
                rounded
                className="mx-auto max-w-7xl rounded-none bg-transparent px-4 sm:px-6 lg:px-8"
            >
                {/* Logo */}
                <NavbarBrand as={Link} to="/" onClick={closeMenu}>
                    <img
                        src={logo}
                        className="mr-2 h-7 w-auto sm:mr-3 sm:h-8"
                        alt="FilmyZone Logo"
                    />

                    <span className="flex items-baseline whitespace-nowrap text-xl text-primary-typo sm:text-2xl">
                        Filmy
                        <span className="ml-0.5 font-lobster text-2xl font-bold text-primary sm:text-3xl">
                            Zone
                        </span>
                    </span>
                </NavbarBrand>

                {/* Right side */}
                <div className="flex items-center gap-2 md:order-2 sm:gap-3">
                    <Link to="/movies" onClick={closeMenu}>
                        <Button className="btn-primary px-3 py-2 text-xs sm:px-4 sm:text-sm">
                            Explore Movies
                        </Button>
                    </Link>

                    <NavbarToggle onClick={() => setIsOpen((prev) => !prev)} />
                </div>

                {/* Navigation */}
                <NavbarCollapse
                    className={`mt-3 border-t border-gray-200/70 bg-surface px-1 pb-4 pt-4 md:mt-0 md:border-0 md:bg-transparent md:px-0 md:pb-0 md:pt-0 ${
                        isOpen ? 'block' : 'hidden md:block'
                    }`}
                >
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-7">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === '/'}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive ? 'nav-link-active' : ''
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </NavbarCollapse>
            </Navbar>
        </header>
    );
};

export default Header;
