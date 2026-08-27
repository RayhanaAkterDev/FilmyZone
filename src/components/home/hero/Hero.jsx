import { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';

import HeroSlide from './HeroSlide';

import heroBanner1 from '@/assets/images/home/dune.jpg';
import heroBanner2 from '@/assets/images/home/avatar.jpg';
import heroBanner3 from '@/assets/images/home/oppenheimer.jpg';

const heroImages = {
    heroBanner1,
    heroBanner2,
    heroBanner3,
};

const Hero = () => {
    const [heroMovies, setHeroMovies] = useState([]);

    useEffect(() => {
        const fetchHeroMovies = async () => {
            try {
                const response = await fetch('/data/moviesData.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch movie data');
                }

                const movies = await response.json();

                const featuredMovies = movies
                    .filter((movie) => movie.hero === true)
                    .sort((a, b) => a.heroRank - b.heroRank)
                    .slice(0, 3);

                setHeroMovies(featuredMovies);
            } catch (error) {
                console.error('Failed to load hero movies:', error);
            }
        };

        fetchHeroMovies();
    }, []);

    return (
        <div className="hero-carousel h-72 md:h-96 lg:h-116 mt-18">
            <Carousel
                theme={{
                    scrollContainer: {
                        base: 'rounded-none',
                    },
                }}
            >
                {heroMovies.map((movie) => (
                    <HeroSlide
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                        image={heroImages[movie.backdrop]}
                        movieId={movie.id}
                        trailer={movie.trailer}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
