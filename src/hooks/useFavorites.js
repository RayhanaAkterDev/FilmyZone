import { useEffect, useState } from "react";

import {
    getFavoriteIds,
    isFavorite,
    toggleFavorite as toggleFavoriteStorage,
} from "@/utils/movieStorage";

const useFavorites = (movieId) => {
    const [favorite, setFavorite] = useState(() =>
        isFavorite(movieId),
    );

    const [favoriteIds, setFavoriteIds] = useState(() =>
        getFavoriteIds(),
    );

    useEffect(() => {
        const syncFavorites = () => {
            setFavorite(isFavorite(movieId));
            setFavoriteIds(getFavoriteIds());
        };

        window.addEventListener(
            "movie-storage-change",
            syncFavorites,
        );

        return () => {
            window.removeEventListener(
                "movie-storage-change",
                syncFavorites,
            );
        };
    }, [movieId]);

    const handleToggleFavorite = () => {
        toggleFavoriteStorage(movieId);

        // Update this hook immediately.
        setFavorite(isFavorite(movieId));
        setFavoriteIds(getFavoriteIds());
    };

    return {
        favorite,
        toggleFavorite: handleToggleFavorite,
        favoriteIds,
    };
};

export default useFavorites;