import { Check, Share2, Star } from 'lucide-react';

const MovieRatingBar = ({
    movie,
    userRating,
    hoverRating,
    setUserRating,
    setHoverRating,
}) => {
    const movieStars = Math.round(movie.rating / 2);

    return (
        <div className="border-y border-border ">
            <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
                {/* Movie rating */}

                <div className="flex items-center justify-between gap-4 px-6 py-5 border-r border-border">
                    <div>
                        <p className="text-xs font-medium text-secondary-typo">
                            Movie rating
                        </p>

                        <div className="mt-2 flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={14}
                                    fill={
                                        index < movieStars
                                            ? 'currentColor'
                                            : 'none'
                                    }
                                    className={
                                        index < movieStars
                                            ? 'text-rating'
                                            : 'text-muted-typo'
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <span className="text-sm font-semibold text-primary-typo">
                        {movie.rating}
                    </span>
                </div>

                {/* User rating */}

                <div className="flex items-center justify-between gap-4 px-6 py-5 border-r border-border">
                    <div>
                        <p className="text-xs font-medium text-secondary-typo">
                            Rate this movie
                        </p>

                        <div className="mt-2 flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, index) => {
                                const rating = index + 1;

                                const active =
                                    (hoverRating || userRating) >= rating;

                                return (
                                    <button
                                        key={rating}
                                        type="button"
                                        onMouseEnter={() =>
                                            setHoverRating(rating)
                                        }
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setUserRating(rating)}
                                        className="text-secondary-typo transition-colors hover:text-rating"
                                        aria-label={`Rate ${rating} out of 5`}
                                    >
                                        <Star
                                            size={16}
                                            fill={
                                                active ? 'currentColor' : 'none'
                                            }
                                            className={
                                                active ? 'text-rating' : ''
                                            }
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {userRating > 0 && (
                        <div className="flex items-center gap-1 text-xs font-medium text-primary">
                            <Check size={13} />
                            {userRating}/5
                        </div>
                    )}
                </div>

                {/* Share */}

                <button
                    type="button"
                    className="flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                    <div>
                        <p className="text-xs font-medium text-secondary-typo">
                            Share this movie
                        </p>

                        <p className="mt-1 text-sm font-semibold text-primary-typo">
                            Tell someone about it
                        </p>
                    </div>

                    <Share2 size={18} className="text-secondary-typo" />
                </button>
            </div>
        </div>
    );
};

export default MovieRatingBar;
