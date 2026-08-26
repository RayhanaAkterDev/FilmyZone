import { useNavigate } from 'react-router';
import { Play, Star } from 'lucide-react';

import MovieActions from '@/components/movies/MovieActions';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleOpenMovie = () => {
        navigate(`/movies/${movie.id}`);
    };

    const handlePosterError = (event) => {
        event.currentTarget.src =
            'https://placehold.co/600x900/eef3f6/6b7280?text=No+Poster';
    };

    return (
        <article
            onClick={handleOpenMovie}
            className="group min-w-0 cursor-pointer"
        >
            {/* =====================================================
                POSTER
            ====================================================== */}
            <div className="relative aspect-2/3 overflow-hidden rounded-2xl bg-input ring-1 ring-black/5">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    onError={handlePosterError}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent" />

                {/* =================================================
                    MOVIE ACTIONS
                ================================================== */}
                <MovieActions movie={movie} />

                {/* =================================================
                    RATING
                ================================================== */}
                <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-lg bg-black/50 px-2 py-1.5 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md">
                    <Star
                        size={11}
                        fill="currentColor"
                        className="text-rating"
                    />

                    <span>{movie.rating}</span>
                </div>

                {/* =================================================
                    HOVER CONTENT
                ================================================== */}
                <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/85 via-black/15 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleOpenMovie();
                                }}
                                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary-hover"
                                aria-label={`View ${movie.title}`}
                            >
                                <Play
                                    size={15}
                                    fill="currentColor"
                                    className="ml-0.5"
                                />
                            </button>

                            <span className="text-xs font-medium text-white/90">
                                View details
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================================================
                MOVIE INFO
            ====================================================== */}
            <div className="mt-3.5 px-0.5">
                <h2 className="truncate text-[15px] font-semibold leading-5 text-primary-typo transition-colors duration-200 group-hover:text-primary">
                    {movie.title}
                </h2>

                <div className="mt-1.5 flex items-center gap-2 text-[11px] text-secondary-typo">
                    <span>{movie.year}</span>

                    <span className="h-0.5 w-0.5 rounded-full bg-muted-typo" />

                    <span>{movie.duration}</span>
                </div>

                {/* Genres */}
                <div className="mt-2.5 flex items-center gap-1.5 overflow-hidden">
                    {movie.genres?.slice(0, 2).map((genre) => (
                        <span
                            key={genre}
                            className="truncate rounded-md bg-input/80 px-2 py-1 text-[10px] font-medium text-secondary-typo"
                        >
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default MovieCard;
