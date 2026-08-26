import { useEffect, useState } from "react";

import {
    getWatchLaterIds,
    isWatchLater,
    toggleWatchLater,
} from "@/utils/movieStorage";

const useWatchLater = (movieId) => {
    const [watchLater, setWatchLater] = useState(() =>
        isWatchLater(movieId),
    );

    useEffect(() => {
        const syncWatchLater = () => {
            setWatchLater(isWatchLater(movieId));
        };

        window.addEventListener(
            "movie-storage-change",
            syncWatchLater,
        );

        return () => {
            window.removeEventListener(
                "movie-storage-change",
                syncWatchLater,
            );
        };
    }, [movieId]);

    const handleToggleWatchLater = () => {
        toggleWatchLater(movieId);
        setWatchLater((prev) => !prev);
    };

    return {
        watchLater,
        toggleWatchLater: handleToggleWatchLater,
        watchLaterIds: getWatchLaterIds(),
    };
};

export default useWatchLater;