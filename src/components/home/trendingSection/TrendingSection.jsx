import FeaturedTrendingMovie from "./FeaturedTrendingMovie";
import MostWatchedMovies from "./MostWatchedMovies";

const TrendingSection = () => {
    return (
        <section className="mx-auto my-8 grid max-w-7xl grid-cols-12 items-stretch gap-5 rounded-3xl bg-canvas p-4 sm:my-10 sm:gap-6 sm:rounded-4xl sm:p-5 md:my-16 md:gap-8 md:p-6 lg:my-20 lg:p-8">
            <FeaturedTrendingMovie />
            <MostWatchedMovies />
        </section>
    );
};

export default TrendingSection;
