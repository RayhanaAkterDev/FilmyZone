const MoviePhotos = ({ movie }) => {
    const photos = movie.photos || [];

    return (
        <div>
            <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Gallery
                </p>

                <h2 className="mt-2 text-2xl font-bold text-primary-typo">
                    Photos
                </h2>
            </div>

            {photos.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {photos.map((photo, index) => (
                        <div
                            key={photo}
                            className="group overflow-hidden rounded-2xl bg-input"
                        >
                            <img
                                src={photo}
                                alt={`${movie.title} scene ${index + 1}`}
                                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex min-h-70 items-center justify-center rounded-2xl bg-input">
                    <div className="text-center">
                        <p className="text-sm font-medium text-primary-typo">
                            No photos available
                        </p>

                        <p className="mt-1 text-xs text-secondary-typo">
                            Movie photos will appear here.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoviePhotos;
