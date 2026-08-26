import featuredMovieImage from "@/assets/images/home/trending/featuredMovieImage.jpg";

const FeaturedMovieCard = () => {
    return (
        <div className="group relative h-full min-h-150 w-full overflow-hidden rounded-2xl cursor-pointer">
            <img
                src={featuredMovieImage}
                alt="Money Heist Part 5"
                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
        </div>
    );
};

export default FeaturedMovieCard;
