import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';

import MovieActions from '@/components/movies/MovieActions';

const MostWatchedMovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movies/${movie.id}`);
    };

    return (
        <article
            onClick={handleCardClick}
            className="group relative h-full min-h-0 w-full cursor-pointer overflow-hidden rounded-2xl bg-input"
        >
            {/* Poster */}
            <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/35 to-transparent" />

            {/* Favorite + Watch Later */}
            <div onClick={(event) => event.stopPropagation()}>
                <MovieActions movie={movie} />
            </div>

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

            {/* Movie information */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4">
                <div className="flex items-end justify-between gap-3">
                    {/* Title + Year */}
                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-white">
                            {movie.title}
                        </h3>

                        <span className="mt-1 block text-[11px] text-white/60">
                            {movie.year}
                        </span>
                    </div>

                    {/* Details indicator */}
                    <div
                        className="flex h-9 w-9 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-primary"
                        aria-hidden="true"
                    >
                        <ArrowUpRight size={15} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default MostWatchedMovieCard;
