import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

import logo from "@/assets/images/shared/logo.png";

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-border bg-canvas">
            {/* Subtle brand glow */}
            <div
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
                {/* =====================================================
                    BRAND STATEMENT
                ====================================================== */}
                <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
                    {/* Brand */}
                    <div>
                        {/* Logo — DON'T TOUCH */}
                        <a href="/" className="flex w-fit items-center">
                            <img src={logo} className="mr-3 h-8" alt="FilmyZone Logo" />

                            <span className="flex items-baseline whitespace-nowrap text-2xl text-primary-typo">
                                Filmy
                                <span className="ml-0.5 font-lobster text-3xl font-bold text-primary">
                                    Zone
                                </span>
                            </span>
                        </a>

                        <h2 className="mt-7 max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight text-primary-typo sm:text-4xl">
                            Every great story
                            <span className="text-primary block"> starts with a movie.</span>
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-secondary-typo">
                            Discover movies worth watching, explore new genres, and keep track of
                            the stories that stay with you.
                        </p>

                        {/* Socials */}
                        <div className="mt-8 flex items-center gap-2">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary-typo transition-all duration-200 hover:border-primary/30 hover:bg-primary hover:text-white"
                            >
                                <BsFacebook size={14} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary-typo transition-all duration-200 hover:border-primary/30 hover:bg-primary hover:text-white"
                            >
                                <BsInstagram size={14} />
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary-typo transition-all duration-200 hover:border-primary/30 hover:bg-primary hover:text-white"
                            >
                                <BsTwitter size={14} />
                            </a>

                            <a
                                href="#"
                                aria-label="GitHub"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary-typo transition-all duration-200 hover:border-primary/30 hover:bg-primary hover:text-white"
                            >
                                <BsGithub size={14} />
                            </a>
                        </div>
                    </div>

                    {/* =================================================
                        LINKS
                    ================================================== */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:pt-2">
                        {/* Explore */}
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                Explore
                            </p>

                            <ul className="mt-5 space-y-3.5 text-sm">
                                <li>
                                    <a href="#" className="footer-link">
                                        Movies
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        Genres
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        Trending
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        Top Rated
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                Company
                            </p>

                            <ul className="mt-5 space-y-3.5 text-sm">
                                <li>
                                    <a href="#" className="footer-link">
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        Our Story
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                Legal
                            </p>

                            <ul className="mt-5 space-y-3.5 text-sm">
                                <li>
                                    <a href="#" className="footer-link">
                                        Privacy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        Terms
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">
                                        Cookies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    FEATURED DIVIDER
                ====================================================== */}
                <div className="my-14 h-px bg-linear-to-r from-primary/30 via-border to-transparent lg:my-16" />

                {/* =====================================================
                    BOTTOM
                ====================================================== */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-primary-typo">© 2026 FilmyZone</p>

                        <p className="mt-1 text-xs text-muted-typo">
                            Made for people who love good stories.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="group flex w-fit items-center gap-2 text-sm font-medium text-secondary-typo transition-colors hover:text-primary"
                    >
                        Back to top
                        <span className="transition-transform duration-200 group-hover:-translate-y-1">
                            ↑
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
