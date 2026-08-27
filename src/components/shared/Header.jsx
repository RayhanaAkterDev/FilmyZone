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
    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/movies', label: 'Movies' },
        { to: '/genres', label: 'Genres' },
        { to: '/trending', label: 'Trending' },
        { to: '/favorites', label: 'Favorites' },
        { to: '/watch-later', label: 'Watch Later' },
    ];

    return (
        <header className="px-4 sm:px-6 lg:px-8">
            <Navbar fluid rounded className="mx-auto max-w-7xl px-0 py-4">
                {/* Logo */}
                <NavbarBrand href="/">
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
                    <Link to="/movies">
                        <Button className="btn-primary">Explore Movies</Button>
                    </Link>

                    <NavbarToggle />
                </div>

                {/* Navigation */}
                <NavbarCollapse className="pt-5">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'nav-link-active' : ''}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </NavbarCollapse>
            </Navbar>
        </header>
    );
};

export default Header;
