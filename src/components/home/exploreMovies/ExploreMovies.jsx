import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import heroBanner1 from '@/assets/images/home/dune.jpg';

const ExploreMovies = () => {
    return (
        <section
            className="max-w-7xl mx-auto bg-rank my-8 md:my-16 lg:my-20 rounded-4xl p-4 md:p-6 lg:p-28 flex flex-col justify-center items-center gap-12 text-surface relative exploreMovies z-10 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${heroBanner1})` }}
        >
            <h1 className="text-6xl font-bold font-lobster">
                Find your next favorite movie
            </h1>
            <Link to="/movies">
                <Button className="cursor-pointer">Explore Movies</Button>
            </Link>
        </section>
    );
};

export default ExploreMovies;
