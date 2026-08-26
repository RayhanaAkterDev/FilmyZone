import { useEffect, useState } from 'react';
import { Bookmark, Heart } from 'lucide-react';

import useFavorites from '@/hooks/useFavorites';
import useWatchLater from '@/hooks/useWatchLater';

const MovieActions = ({ movie }) => {
    const { favorite, toggleFavorite } = useFavorites(movie.id);

    const { watchLater, toggleWatchLater } = useWatchLater(movie.id);

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!message) {
            return;
        }

        const timer = setTimeout(() => {
            setMessage('');
        }, 1800);

        return () => clearTimeout(timer);
    }, [message]);

    const handleWatchLater = (event) => {
        event.stopPropagation();

        const wasAdded = !watchLater;

        toggleWatchLater();

        setMessage(
            wasAdded ? 'Added to Watch Later' : 'Removed from Watch Later',
        );
    };

    const handleFavorite = (event) => {
        event.stopPropagation();

        const wasAdded = !favorite;

        toggleFavorite();

        setMessage(wasAdded ? 'Added to Favorites' : 'Removed from Favorites');
    };

    return (
        <>
            {/* Success message */}
            {message && (
                <div className="pointer-events-none absolute left-1/2 top-14 z-30 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/75 px-3 py-2 text-[11px] font-medium text-white shadow-lg backdrop-blur-md">
                    {message}
                </div>
            )}

            {/* Movie actions */}
            <div className="absolute left-3 top-3 z-20 flex gap-1.5">
                {/* Watch Later */}
                <button
                    type="button"
                    aria-label={
                        watchLater
                            ? `Remove ${movie.title} from watch later`
                            : `Add ${movie.title} to watch later`
                    }
                    title={
                        watchLater ? 'Remove from Watch Later' : 'Watch Later'
                    }
                    onClick={handleWatchLater}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-md transition-all duration-200 cursor-pointer ${
                        watchLater
                            ? 'bg-primary text-white'
                            : 'bg-black/40 text-white/75 hover:bg-black/60 hover:text-white'
                    }`}
                >
                    <Bookmark
                        size={14}
                        fill={watchLater ? 'currentColor' : 'none'}
                    />
                </button>

                {/* Favorite */}
                <button
                    type="button"
                    aria-label={
                        favorite
                            ? `Remove ${movie.title} from favorites`
                            : `Add ${movie.title} to favorites`
                    }
                    title={
                        favorite ? 'Remove from Favorites' : 'Add to Favorites'
                    }
                    onClick={handleFavorite}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-md transition-all duration-200 cursor-pointer ${
                        favorite
                            ? 'bg-primary text-white'
                            : 'bg-black/40 text-white/75 hover:bg-black/60 hover:text-white'
                    }`}
                >
                    <Heart
                        size={14}
                        fill={favorite ? 'currentColor' : 'none'}
                    />
                </button>
            </div>
        </>
    );
};

export default MovieActions;
