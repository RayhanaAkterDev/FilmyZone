import { useEffect, useState } from 'react';

import MostWatchedMovieCard from '@/components/movies/MostWatchedMovieCard';

const MostWatchedMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/data/moviesData.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch movies.');
                }

                const data = await response.json();

                // Sort by mostWatched and keep only the top 6
                const topMovies = [...data]
                    .sort((a, b) => b.mostWatched - a.mostWatched)
                    .slice(0, 6);

                setMovies(topMovies);
            } catch (error) {
                console.error('Failed to load most watched movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="col-span-12 flex flex-col md:col-span-8">
            <h2 className="trending-heading trending-heading-mostWatched">
                Most <span className="block text-primary">Watched</span>
            </h2>

            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:grid-rows-2">
                {movies.map((movie) => (
                    <MostWatchedMovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MostWatchedMovies;
