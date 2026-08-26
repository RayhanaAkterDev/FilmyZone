const FAVORITES_KEY = "favoriteMovies";
const WATCH_LATER_KEY = "watchLaterMovies";

const getStoredIds = (key) => {
    try {
        const stored = localStorage.getItem(key);

        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const setStoredIds = (key, ids) => {
    localStorage.setItem(key, JSON.stringify(ids));

    // Notify other components in the same tab.
    window.dispatchEvent(new Event("movie-storage-change"));
};

/* =========================================================
   FAVORITES
========================================================= */

export const getFavoriteIds = () => {
    return getStoredIds(FAVORITES_KEY);
};

export const isFavorite = (movieId) => {
    return getFavoriteIds().includes(movieId);
};

export const addFavorite = (movieId) => {
    const ids = getFavoriteIds();

    if (ids.includes(movieId)) {
        return ids;
    }

    const updatedIds = [...ids, movieId];

    setStoredIds(FAVORITES_KEY, updatedIds);

    return updatedIds;
};

export const removeFavorite = (movieId) => {
    const updatedIds = getFavoriteIds().filter(
        (id) => id !== movieId,
    );

    setStoredIds(FAVORITES_KEY, updatedIds);

    return updatedIds;
};

export const toggleFavorite = (movieId) => {
    if (isFavorite(movieId)) {
        return removeFavorite(movieId);
    }

    return addFavorite(movieId);
};

/* =========================================================
   WATCH LATER
========================================================= */

export const getWatchLaterIds = () => {
    return getStoredIds(WATCH_LATER_KEY);
};

export const isWatchLater = (movieId) => {
    return getWatchLaterIds().includes(movieId);
};

export const addWatchLater = (movieId) => {
    const ids = getWatchLaterIds();

    if (ids.includes(movieId)) {
        return ids;
    }

    const updatedIds = [...ids, movieId];

    setStoredIds(WATCH_LATER_KEY, updatedIds);

    return updatedIds;
};

export const removeWatchLater = (movieId) => {
    const updatedIds = getWatchLaterIds().filter(
        (id) => id !== movieId,
    );

    setStoredIds(WATCH_LATER_KEY, updatedIds);

    return updatedIds;
};

export const toggleWatchLater = (movieId) => {
    if (isWatchLater(movieId)) {
        return removeWatchLater(movieId);
    }

    return addWatchLater(movieId);
};