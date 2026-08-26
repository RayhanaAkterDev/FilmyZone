import { Bookmark, Heart } from "lucide-react";

import useFavorites from "@/hooks/useFavorites";
import useWatchLater from "@/hooks/useWatchLater";

const MovieActions = ({ movie }) => {
    const { favorite, toggleFavorite } = useFavorites(movie.id);

    const { watchLater, toggleWatchLater } = useWatchLater(movie.id);

    return (
        <div className="absolute left-3 top-3 flex gap-1.5">
            {/* Watch Later */}
            <button
                type="button"
                aria-label={
                    watchLater
                        ? `Remove ${movie.title} from watch later`
                        : `Add ${movie.title} to watch later`
                }
                title={watchLater ? "Remove from Watch Later" : "Watch Later"}
                onClick={(event) => {
                    event.stopPropagation();
                    toggleWatchLater();
                }}
                className={`flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-md transition-all duration-200 ${
                    watchLater
                        ? "bg-primary text-white"
                        : "bg-black/40 text-white/75 hover:bg-black/60 hover:text-white"
                }`}
            >
                <Bookmark size={14} fill={watchLater ? "currentColor" : "none"} />
            </button>

            {/* Favorite */}
            <button
                type="button"
                aria-label={
                    favorite
                        ? `Remove ${movie.title} from favorites`
                        : `Add ${movie.title} to favorites`
                }
                title={favorite ? "Remove from Favorites" : "Add to Favorites"}
                onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite();
                }}
                className={`flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-md transition-all duration-200 ${
                    favorite
                        ? "bg-primary text-white"
                        : "bg-black/40 text-white/75 hover:bg-black/60 hover:text-white"
                }`}
            >
                <Heart size={14} fill={favorite ? "currentColor" : "none"} />
            </button>
        </div>
    );
};

export default MovieActions;
