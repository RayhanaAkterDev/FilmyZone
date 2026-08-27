import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import MovieCard from '@/components/movies/MovieCard';
import PageHeader from '@/components/shared/PageHeader';
import Button from '@/components/ui/Button';

const MOVIES_PER_LOAD = 15;

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedGenre = searchParams.get('genre');

    const [movies, setMovies] = useState([]);
    const [visibleCount, setVisibleCount] = useState(MOVIES_PER_LOAD);

    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/data/moviesData.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch movies.');
                }

                const data = await response.json();
                setMovies(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // Filter movies by selected genre
    const filteredMovies = selectedGenre
        ? movies.filter((movie) =>
              movie.genres.some(
                  (genre) =>
                      genre.toLowerCase() === selectedGenre.toLowerCase(),
              ),
          )
        : movies;

    // Show first 15, then load more
    const visibleMovies = filteredMovies.slice(0, visibleCount);

    const hasMoreMovies = visibleCount < filteredMovies.length;

    const handleLoadMore = () => {
        if (loadingMore) return;

        setLoadingMore(true);

        setTimeout(() => {
            setVisibleCount((prev) => prev + MOVIES_PER_LOAD);
            setLoadingMore(false);
        }, 700);
    };

    const handleClearGenre = () => {
        setSearchParams({});
        setVisibleCount(MOVIES_PER_LOAD);
    };

    return (
        <section className="mx-auto max-w-7xl w-11/12 px-4 py-20 mt-18">
            <PageHeader
                eyebrow={selectedGenre ? 'Genre' : 'Discover'}
                title={selectedGenre ? 'Movies in' : 'Stories worth'}
                highlightedTitle={selectedGenre || 'watch.'}
                description={
                    selectedGenre
                        ? `Explore our collection of ${selectedGenre.toLowerCase()} movies and discover your next favorite story.`
                        : 'Browse our collection of movies and discover your next favorite story.'
                }
            />

            {loading && (
                <p className="text-sm text-secondary-typo">Loading movies...</p>
            )}

            {error && <p className="text-sm text-primary">{error}</p>}

            {!loading && !error && (
                <>
                    {/* Active Genre */}
                    {selectedGenre && (
                        <div className="mb-10 flex items-center gap-3">
                            <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                                {selectedGenre}
                            </span>

                            <button
                                type="button"
                                onClick={handleClearGenre}
                                className="text-xs font-medium text-secondary-typo transition-colors hover:text-primary"
                            >
                                Clear filter
                            </button>
                        </div>
                    )}

                    {filteredMovies.length === 0 ? (
                        <div className="py-20 text-center">
                            <p className="text-sm text-secondary-typo">
                                No movies found in this genre.
                            </p>

                            <button
                                type="button"
                                onClick={handleClearGenre}
                                className="mt-3 text-sm font-semibold text-primary hover:text-primary-hover"
                            >
                                Browse all movies
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-x-4 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                                {visibleMovies.map((movie) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                            </div>

                            {hasMoreMovies && (
                                <div className="mt-16 flex justify-center">
                                    <Button
                                        type="button"
                                        onClick={handleLoadMore}
                                        disabled={loadingMore}
                                        className="min-w-40 cursor-pointer"
                                    >
                                        {loadingMore
                                            ? 'Loading movies...'
                                            : 'Load more movies'}
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </section>
    );
};

export default Movies;
