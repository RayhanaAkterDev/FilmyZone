import { useEffect, useState } from "react";

import {
    getFavoriteIds,
    isFavorite,
    toggleFavorite,
} from "@/utils/movieStorage";

const useFavorites = (movieId) => {
    const [favorite, setFavorite] = useState(() =>
        isFavorite(movieId),
    );

    useEffect(() => {
        const syncFavorite = () => {
            setFavorite(isFavorite(movieId));
        };

        window.addEventListener(
            "movie-storage-change",
            syncFavorite,
        );

        return () => {
            window.removeEventListener(
                "movie-storage-change",
                syncFavorite,
            );
        };
    }, [movieId]);

    const handleToggleFavorite = () => {
        toggleFavorite(movieId);
        setFavorite((prev) => !prev);
    };

    return {
        favorite,
        toggleFavorite: handleToggleFavorite,
        favoriteIds: getFavoriteIds(),
    };
};

export default useFavorites;