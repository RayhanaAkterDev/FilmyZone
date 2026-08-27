import { useEffect, useState } from 'react';

import MovieCard from '@/components/movies/MovieCard';
import PageHeader from '@/components/shared/PageHeader';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await fetch('/data/moviesData.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch trending movies.');
                }

                const data = await response.json();

                const trendingMovies = data
                    .filter((movie) => movie.trending === true)
                    .sort((a, b) => a.trendingRank - b.trendingRank);

                setMovies(trendingMovies);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <section className="mx-auto max-w-7xl w-11/12 px-4 py-20 mt-18">
            <PageHeader
                eyebrow="Trending"
                title="What everyone's"
                highlightedTitle="watching."
                description="Discover the movies and stories getting the most attention right now."
            />

            {loading && (
                <p className="text-sm text-secondary-typo">
                    Loading trending movies...
                </p>
            )}

            {error && <p className="text-sm text-primary">{error}</p>}

            {!loading && !error && movies.length === 0 && (
                <p className="text-sm text-secondary-typo">
                    No trending movies available right now.
                </p>
            )}

            {!loading && !error && movies.length > 0 && (
                <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Trending;
