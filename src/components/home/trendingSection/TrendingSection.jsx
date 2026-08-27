import FeaturedTrendingMovie from './FeaturedTrendingMovie';
import MostWatchedMovies from './MostWatchedMovies';

const TrendingSection = () => {
    return (
        <section className="max-w-7xl w-11/12 mx-auto px-4 my-10 md:my-16 lg:my-20">
            <div className="grid grid-cols-12 items-stretch gap-8 bg-canvas rounded-4xl p-5 md:p-6 lg:p-8">
                <FeaturedTrendingMovie />
                <MostWatchedMovies />
            </div>
        </section>
    );
};

export default TrendingSection;
