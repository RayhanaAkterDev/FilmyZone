import Hero from "@/components/home/hero/Hero";
import TrendingSection from "@/components/home/trendingSection/TrendingSection";
import ExploreMovies from "../components/home/exploreMovies/ExploreMovies";

const Home = () => {
    return (
        <>
            <Hero />
            <TrendingSection />
            <ExploreMovies />
        </>
    );
};

export default Home;
