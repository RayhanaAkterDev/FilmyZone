import Hero from '@/components/home/hero/Hero';
import TrendingSection from '@/components/home/trendingSection/TrendingSection';
import ExploreMovies from '@/components/home/exploreMovies/ExploreMovies';
import TopRatedMovies from '../components/home/topRatedMovies/TopRatedMovies';
import UpComing from '@/components/home/upComing/UpComing';

const Home = () => {
    return (
        <>
            <Hero />
            <TrendingSection />
            <TopRatedMovies />
            <UpComing />
            <ExploreMovies />
        </>
    );
};

export default Home;
