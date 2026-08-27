import { useEffect, useState } from 'react';

import MovieCard from '@/components/movies/MovieCard';
import PageHeader from '@/components/shared/PageHeader';

const TopRatedMovies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const response = await fetch('/data/moviesData.json');
                const movies = await response.json();

                const topRated = movies
                    .filter((movie) => Number(movie.rating) > 8)
                    .sort((a, b) => Number(b.rating) - Number(a.rating))
                    .slice(0, 5);

                setTopRatedMovies(topRated);
            } catch (error) {
                console.error('Failed to load top-rated movies:', error);
            }
        };

        fetchTopRatedMovies();
    }, []);

    return (
        <section className="py-16 bg-canvas border-y border-primary/10">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Header */}

                <PageHeader
                    variant="section"
                    eyebrow="Highest Rated"
                    title="Top Rated Movies"
                    highlightedTitle="Movies"
                    description="The highest-rated movies on FilmyZone."
                />

                {/* Movies */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
                    {topRatedMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopRatedMovies;
