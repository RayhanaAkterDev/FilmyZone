import FeaturedMovieCard from "@/components/movies/FeaturedMovieCard";

const FeaturedTrendingMovie = () => {
    return (
        <div className="col-span-12 flex flex-col md:col-span-4">
            <h2 className="trending-heading">
                Trending <span className="block">Now</span>
            </h2>

            <div className="min-h-0 flex-1">
                <FeaturedMovieCard />
            </div>
        </div>
    );
};

export default FeaturedTrendingMovie;
