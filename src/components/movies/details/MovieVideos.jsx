import { Play } from 'lucide-react';

const MovieVideos = ({ movie }) => {
    return (
        <div>
            <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Watch
                </p>

                <h2 className="mt-2 text-2xl font-bold text-primary-typo">
                    Videos
                </h2>
            </div>

            <div className="overflow-hidden rounded-2xl bg-input">
                {movie.trailer ? (
                    <video
                        controls
                        poster={movie.poster}
                        className="aspect-video w-full object-cover"
                        src={movie.trailer}
                    />
                ) : (
                    <div className="flex aspect-video items-center justify-center">
                        <div className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Play size={18} fill="currentColor" />
                            </div>

                            <p className="mt-4 text-sm font-medium text-primary-typo">
                                Trailer coming soon
                            </p>

                            <p className="mt-1 text-xs text-secondary-typo">
                                No trailer has been added for this movie yet.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieVideos;
