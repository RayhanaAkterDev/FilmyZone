import { Link } from 'react-router';

import Button from '@/components/ui/Button';

import heroBanner1 from '@/assets/images/home/dune.jpg';

const ExploreMovies = () => {
    return (
        <section
            className="exploreMovies relative z-10 mx-auto my-10 flex min-h-80 w-11/12 max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat px-5 py-14 text-surface sm:min-h-88 sm:px-8 sm:py-16 md:my-16 md:min-h-96 md:rounded-4xl md:px-12 md:py-20 lg:my-20 lg:min-h-105 lg:px-20 lg:py-24"
            style={{ backgroundImage: `url(${heroBanner1})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
                <h2 className="font-lobster text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Find your next favorite movie
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-base sm:leading-7">
                    Discover stories worth watching, from timeless classics to
                    the latest movies everyone is talking about.
                </p>

                <Link to="/movies" className="mt-7 sm:mt-8">
                    <Button className="cursor-pointer px-6 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base">
                        Explore Movies
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default ExploreMovies;
