import MostWatchedMovieCard from "@/components/movies/MostWatchedMovieCard";

import spiderManImage from "@/assets/images/home/trending/mostWatchedMovie1.jpg";
import interstellarImage from "@/assets/images/home/trending/mostWatchedMovie2.jpg";
import inceptionImage from "@/assets/images/home/trending/mostWatchedMovie3.jpg";
import darkKnightImage from "@/assets/images/home/trending/mostWatchedMovie4.jpg";
import squidGameImage from "@/assets/images/home/trending/mostWatchedMovie5.jpg";
import oppenheimerImage from "@/assets/images/home/trending/mostWatchedMovie6.jpg";

const mostWatchedMovies = [
    {
        id: 1,
        title: "Spider-Man: No Way Home",
        description:
            "Spider-Man's identity is revealed, forcing him to ask Doctor Strange for help and unleashing villains from other universes.",
        image: spiderManImage,
    },
    {
        id: 2,
        title: "Interstellar",
        description:
            "A team of explorers travels through a wormhole in search of a new home for humanity.",
        image: interstellarImage,
    },
    {
        id: 3,
        title: "Inception",
        description:
            "A skilled thief enters people's dreams to steal secrets and complete an impossible mission.",
        image: inceptionImage,
    },
    {
        id: 4,
        title: "The Dark Knight",
        description:
            "Batman faces the Joker, a criminal mastermind who pushes Gotham City into chaos.",
        image: darkKnightImage,
    },
    {
        id: 5,
        title: "Squid Game",
        description:
            "Hundreds of desperate contestants compete in deadly games for a life-changing prize.",
        image: squidGameImage,
    },
    {
        id: 6,
        title: "Oppenheimer",
        description:
            "The story of J. Robert Oppenheimer and his role in developing the first atomic bomb.",
        image: oppenheimerImage,
    },
];

const MostWatchedMovies = () => {
    return (
        <div className="col-span-12 flex flex-col md:col-span-8">
            <h2 className="trending-heading trending-heading-mostWatched">
                Most <span className="block">Watched</span>
            </h2>

            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:grid-rows-2">
                {mostWatchedMovies.map((movie) => (
                    <MostWatchedMovieCard
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                        image={movie.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default MostWatchedMovies;
