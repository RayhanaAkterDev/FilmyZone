import { useNavigate } from 'react-router';
import { ArrowLeft, Bookmark, Search } from 'lucide-react';

import useWatchLater from '@/hooks/useWatchLater';

const MovieDetailsHeader = ({ movie }) => {
    const navigate = useNavigate();

    const { watchLater, toggleWatchLater } = useWatchLater(movie.id);

    return (
        <header className="border-b border-border bg-surface">
            <div className="mx-auto flex h-16 max-w-6xl items-center">
                {/* Back */}

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    aria-label="Go back"
                    className="flex h-full w-14 shrink-0 items-center justify-center border-r border-border text-secondary-typo transition-colors hover:text-primary"
                >
                    <ArrowLeft size={19} />
                </button>

                {/* Search */}

                <button
                    type="button"
                    onClick={() => navigate('/movies')}
                    className="flex h-full flex-1 items-center gap-3 px-5 text-left text-sm text-secondary-typo transition-colors hover:text-primary-typo"
                >
                    <Search size={17} />

                    <span className="hidden sm:block">Search movies...</span>
                </button>

                {/* Watch Later */}

                <button
                    type="button"
                    onClick={toggleWatchLater}
                    className={`hidden h-full items-center gap-2 border-l border-border px-5 text-xs font-medium transition-colors sm:flex ${
                        watchLater
                            ? 'text-primary'
                            : 'text-secondary-typo hover:text-primary'
                    }`}
                >
                    <Bookmark
                        size={15}
                        fill={watchLater ? 'currentColor' : 'none'}
                    />

                    {watchLater ? 'Saved' : 'Watch later'}
                </button>
            </div>
        </header>
    );
};

export default MovieDetailsHeader;
