import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

import MovieDetailsHeader from '@/components/movies/details/MovieDetailsHeader';
import MovieDetailsTabs from '@/components/movies/details/MovieDetailsTabs';
import MovieInfo from '@/components/movies/details/MovieInfo';
import MovieVideos from '@/components/movies/details/MovieVideos';
import MoviePhotos from '@/components/movies/details/MoviePhotos';
import MovieRatingBar from '@/components/movies/details/MovieRatingBar';

import ExploreMovies from '../components/home/exploreMovies/ExploreMovies';

const MovieDetails = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [activeTab, setActiveTab] = useState('info');

    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch('/data/moviesData.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch movie.');
                }

                const data = await response.json();

                const foundMovie = data.find(
                    (item) => String(item.id) === String(movieId),
                );

                if (!foundMovie) {
                    throw new Error('Movie not found.');
                }

                setMovie(foundMovie);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [movieId]);

    if (loading) {
        return (
            <main className="min-h-screen bg-canvas px-5 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm text-secondary-typo">
                        Loading movie...
                    </p>
                </div>
            </main>
        );
    }

    if (error || !movie) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-canvas px-5">
                <div className="text-center">
                    <h1 className="text-xl font-semibold text-primary-typo">
                        Movie not found
                    </h1>

                    <p className="mt-2 text-sm text-secondary-typo">
                        {error || "We couldn't find this movie."}
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate('/movies')}
                        className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                    >
                        Browse movies
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <MovieDetailsHeader movie={movie} />

            <MovieDetailsTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
                {activeTab === 'info' && <MovieInfo movie={movie} />}

                {activeTab === 'videos' && <MovieVideos movie={movie} />}

                {activeTab === 'photos' && <MoviePhotos movie={movie} />}
            </section>

            {activeTab === 'info' && (
                <MovieRatingBar
                    movie={movie}
                    userRating={userRating}
                    hoverRating={hoverRating}
                    setUserRating={setUserRating}
                    setHoverRating={setHoverRating}
                />
            )}

            <ExploreMovies />
        </main>
    );
};

export default MovieDetails;
