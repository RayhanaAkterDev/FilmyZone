import { Play, Star } from 'lucide-react';
import { useNavigate } from 'react-router';

const FeaturedMovieCard = ({ movie }) => {
    const navigate = useNavigate();

    if (!movie) {
        return null;
    }

    const handleCardClick = () => {
        navigate(`/movies/${movie.id}`);
    };

    const handlePlayClick = (event) => {
        event.stopPropagation();

        // Add trailer/play functionality here later.
    };

    return (
        <article
            onClick={handleCardClick}
            className="group relative h-full min-h-150 w-full cursor-pointer overflow-hidden rounded-2xl bg-input"
        >
            {/* Backdrop */}
            <img
                src={movie.backdrop || movie.poster}
                alt={movie.title}
                className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark gradient */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

            {/* Top information */}
            <div className="pointer-events-none absolute left-5 right-5 top-5 flex items-start justify-between">
                <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                    Trending
                </span>

                <div className="flex items-center gap-1.5 rounded-lg bg-black/45 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Star
                        size={12}
                        fill="currentColor"
                        className="text-rating"
                    />

                    <span>{movie.rating}</span>
                </div>
            </div>

            {/* Movie information */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                    {/* Meta information */}
                    <div className="mb-2 flex items-center gap-2 text-[11px] text-white/65">
                        <span>{movie.year}</span>

                        <span className="h-0.5 w-0.5 rounded-full bg-white/40" />

                        <span>{movie.duration}</span>

                        <span className="h-0.5 w-0.5 rounded-full bg-white/40" />

                        <span>{movie.rating}/10</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-white">
                        {movie.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 line-clamp-2 max-w-md text-xs leading-5 text-white/70">
                        {movie.description}
                    </p>

                    {/* Bottom actions */}
                    <div className="pointer-events-auto mt-8 flex items-center justify-between gap-3">
                        {/* Play */}
                        <button
                            type="button"
                            onClick={handlePlayClick}
                            aria-label={`Play ${movie.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-hover"
                        >
                            <Play
                                size={15}
                                fill="currentColor"
                                className="ml-0.5"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FeaturedMovieCard;
