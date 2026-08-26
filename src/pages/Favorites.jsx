import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import MovieCard from "@/components/movies/MovieCard";
import PageHeader from "@/components/shared/PageHeader";
import Button from "@/components/ui/Button";

import { getFavoriteIds } from "@/utils/movieStorage";

const Favorites = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [favoriteIds, setFavoriteIds] = useState(getFavoriteIds());

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
        const syncFavorites = () => {
            setFavoriteIds(getFavoriteIds());
        };

        window.addEventListener("movie-storage-change", syncFavorites);

        return () => {
            window.removeEventListener("movie-storage-change", syncFavorites);
        };
    }, []);

    const favoriteMovies = movies.filter((movie) => favoriteIds.includes(movie.id));

    return (
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <PageHeader
                eyebrow="Your collection"
                title="Movies you"
                highlightedTitle="love."
                description="Keep your favorite movies in one place and come back to them whenever you want."
            />

            {loading && <p className="text-sm text-secondary-typo">Loading favorites...</p>}

            {error && <p className="text-sm text-primary">{error}</p>}

            {!loading && !error && favoriteMovies.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <Heart size={22} className="text-primary" />
                    </div>

                    <h2 className="mt-5 text-lg font-semibold text-primary-typo">
                        No favorites yet
                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-secondary-typo">
                        Movies you love will appear here. Start exploring and add your favorites.
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

            {!loading && !error && favoriteMovies.length > 0 && (
                <div className="grid gap-x-4 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {favoriteMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
