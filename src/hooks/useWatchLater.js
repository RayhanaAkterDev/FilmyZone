import { useEffect, useState } from "react";

import {
    getWatchLaterIds,
    isWatchLater,
    toggleWatchLater as toggleWatchLaterStorage,
} from "@/utils/movieStorage";

const useWatchLater = (movieId) => {
    const [watchLater, setWatchLater] = useState(() =>
        isWatchLater(movieId),
    );

    const [watchLaterIds, setWatchLaterIds] = useState(() =>
        getWatchLaterIds(),
    );

    useEffect(() => {
        const syncWatchLater = () => {
            setWatchLater(isWatchLater(movieId));
            setWatchLaterIds(getWatchLaterIds());
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
        toggleWatchLaterStorage(movieId);

        // Update this hook immediately.
        setWatchLater(isWatchLater(movieId));
        setWatchLaterIds(getWatchLaterIds());
    };

    return {
        watchLater,
        toggleWatchLater: handleToggleWatchLater,
        watchLaterIds,
    };
};

export default useWatchLater;