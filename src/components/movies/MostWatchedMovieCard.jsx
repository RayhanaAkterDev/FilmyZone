const MostWatchedMovieCard = ({ title, image }) => {
    return (
        <div className="group relative h-full min-h-0 w-full overflow-hidden rounded-2xl cursor-pointer">
            <img
                src={image}
                alt={`${title} poster`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
        </div>
    );
};

export default MostWatchedMovieCard;
