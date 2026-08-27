import { useEffect, useState } from 'react';

import FeaturedMovieCard from '@/components/movies/FeaturedMovieCard';

const FeaturedTrendingMovie = () => {
    const [trendingMovie, setTrendingMovie] = useState(null);

    useEffect(() => {
        const fetchTrendingMovie = async () => {
            try {
                const response = await fetch('/data/moviesData.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch movies.');
                }

                const movies = await response.json();

                const movie = movies.find((item) => item.trending === true);

                setTrendingMovie(movie || null);
            } catch (error) {
                console.error('Failed to load trending movie:', error);
            }
        };

        fetchTrendingMovie();
    }, []);

    return (
        <div className="col-span-12 flex flex-col md:col-span-4">
            <h2 className="trending-heading">
                Trending <span className="block text-primary">Now</span>
            </h2>

            <div className="min-h-0 flex-1">
                {trendingMovie && <FeaturedMovieCard movie={trendingMovie} />}
            </div>
        </div>
    );
};

export default FeaturedTrendingMovie;
