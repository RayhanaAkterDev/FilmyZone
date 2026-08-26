import { Star } from 'lucide-react';

import useFavorites from '@/hooks/useFavorites';
import useWatchLater from '@/hooks/useWatchLater';

import MovieActions from '@/components/movies/details/MovieActions';
import MovieMeta from '@/components/movies/details/MovieMeta';

const MovieInfo = ({ movie }) => {
    const { favorite, toggleFavorite } = useFavorites(movie.id);

    const { watchLater, toggleWatchLater } = useWatchLater(movie.id);

    return (
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
            {/* Poster */}

            <div className="mx-auto w-full max-w-75 lg:mx-0">
                <div className="group relative overflow-hidden rounded-[22px] bg-input shadow-sm ring-1 ring-black/5">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="aspect-2/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/20 to-transparent" />
                </div>
            </div>

            {/* Information */}

            <div className="flex min-w-0 flex-col">
                {/* Title */}

                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary-typo sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
                        {movie.title}
                    </h1>

                    <div className="mt-3 flex items-center gap-3">
                        <MovieRating rating={movie.rating} />

                        <span className="text-sm font-semibold text-primary-typo">
                            {movie.rating}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-muted-typo" />

                        <span className="text-xs text-secondary-typo">
                            User rating
                        </span>
                    </div>
                </div>

                {/* Genres */}

                <div className="mt-5 flex flex-wrap gap-2">
                    {movie.genres?.map((genre) => (
                        <span
                            key={genre}
                            className="rounded-full bg-input px-3 py-1.5 text-[11px] font-medium text-secondary-typo"
                        >
                            {genre}
                        </span>
                    ))}
                </div>

                {/* Description */}

                <p className="mt-6 max-w-3xl text-sm leading-7 text-secondary-typo">
                    {movie.description ||
                        movie.story ||
                        'Discover the story, characters, and world behind this movie.'}
                </p>

                {/* Metadata */}

                <div className="mt-7 grid max-w-2xl gap-x-10 gap-y-4 border-t border-border pt-6 sm:grid-cols-2">
                    <MovieMeta
                        label="Director"
                        value={movie.director || 'Not available'}
                    />

                    <MovieMeta
                        label="Cast"
                        value={
                            movie.cast?.join(', ') ||
                            movie.starring?.join(', ') ||
                            'Not available'
                        }
                    />

                    <MovieMeta
                        label="Release"
                        value={
                            movie.releaseDate ||
                            movie.release ||
                            movie.year ||
                            'Not available'
                        }
                    />

                    <MovieMeta
                        label="Duration"
                        value={movie.duration || 'Not available'}
                    />

                    <MovieMeta
                        label="Language"
                        value={
                            movie.language ||
                            movie.languages?.join(', ') ||
                            'English'
                        }
                    />
                </div>

                {/* Actions */}

                <MovieActions
                    favorite={favorite}
                    watchLater={watchLater}
                    toggleFavorite={toggleFavorite}
                    toggleWatchLater={toggleWatchLater}
                />
            </div>
        </div>
    );
};

const MovieRating = ({ rating }) => {
    const filledStars = Math.round(rating / 2);

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
                <Star
                    key={index}
                    size={14}
                    fill={index < filledStars ? 'currentColor' : 'none'}
                    className={
                        index < filledStars ? 'text-rating' : 'text-muted-typo'
                    }
                />
            ))}
        </div>
    );
};

export default MovieInfo;
