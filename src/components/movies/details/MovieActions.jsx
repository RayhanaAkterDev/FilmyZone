import { Bookmark, Heart, Play, Share2 } from 'lucide-react';

const MovieActions = ({
    favorite,
    watchLater,
    toggleFavorite,
    toggleWatchLater,
}) => {
    return (
        <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Watch Trailer */}

            <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
            >
                <Play size={15} fill="currentColor" />
                Watch trailer
            </button>

            {/* Favorite */}

            <button
                type="button"
                onClick={toggleFavorite}
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all ${
                    favorite
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-surface text-secondary-typo hover:border-primary hover:text-primary'
                }`}
            >
                <Heart size={16} fill={favorite ? 'currentColor' : 'none'} />

                {favorite ? 'Favorited' : 'Favorite'}
            </button>

            {/* Watch Later */}

            <button
                type="button"
                onClick={toggleWatchLater}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all ${
                    watchLater
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-surface text-secondary-typo hover:border-primary hover:text-primary'
                }`}
                aria-label={
                    watchLater
                        ? 'Remove from watch later'
                        : 'Add to watch later'
                }
            >
                <Bookmark
                    size={16}
                    fill={watchLater ? 'currentColor' : 'none'}
                />
            </button>

            {/* Share */}

            <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-secondary-typo transition-colors hover:border-primary hover:text-primary"
                aria-label="Share movie"
            >
                <Share2 size={16} />
            </button>
        </div>
    );
};

export default MovieActions;
