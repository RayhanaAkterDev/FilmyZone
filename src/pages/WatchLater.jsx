import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

import MovieCard from "@/components/movies/MovieCard";
import PageHeader from "@/components/shared/PageHeader";
import Button from "@/components/ui/Button";

import { getWatchLaterIds } from "@/utils/movieStorage";

const WatchLater = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [watchLaterIds, setWatchLaterIds] = useState(getWatchLaterIds());

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("/data/moviesData.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch movies.");
                }

                const data = await response.json();

                setMovies(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const syncWatchLater = () => {
            setWatchLaterIds(getWatchLaterIds());
        };

        window.addEventListener("movie-storage-change", syncWatchLater);

        return () => {
            window.removeEventListener("movie-storage-change", syncWatchLater);
        };
    }, []);

    const watchLaterMovies = movies.filter((movie) => watchLaterIds.includes(movie.id));

    return (
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <PageHeader
                eyebrow="Your collection"
                title="Watch"
                highlightedTitle="later."
                description="Save movies you want to watch and keep your personal watchlist ready for later."
            />

            {loading && <p className="text-sm text-secondary-typo">Loading watch later...</p>}

            {error && <p className="text-sm text-primary">{error}</p>}

            {!loading && !error && watchLaterMovies.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <Bookmark size={22} className="text-primary" />
                    </div>

                    <h2 className="mt-5 text-lg font-semibold text-primary-typo">
                        Your watchlist is empty
                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-secondary-typo">
                        Save movies you want to watch later and they'll appear here.
                    </p>

                    <Button
                        type="button"
                        className="mt-6"
                        onClick={() => {
                            window.location.href = "/movies";
                        }}
                    >
                        Browse movies
                    </Button>
                </div>
            )}

            {!loading && !error && watchLaterMovies.length > 0 && (
                <div className="grid gap-x-4 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {watchLaterMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default WatchLater;
