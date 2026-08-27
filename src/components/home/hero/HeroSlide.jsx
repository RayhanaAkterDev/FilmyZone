import { useNavigate } from 'react-router';

import Button from '@/components/ui/Button';

const HeroSlide = ({ title, description, image, movieId, trailer }) => {
    const navigate = useNavigate();

    const handleWatchNow = () => {
        if (!trailer) return;

        window.open(trailer, '_blank', 'noopener,noreferrer');
    };

    const handleSeeDetails = () => {
        navigate(`/movies/${movieId}`);
    };

    return (
        <div
            className="relative h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-hero-overlay/70" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="font-inter text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                        {title}
                    </h1>

                    <p className="my-3 max-w-xl text-xs leading-5 text-white/80 sm:my-4 sm:text-sm sm:leading-6 md:text-base">
                        {description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 md:mt-10 lg:mt-12">
                        <Button type="button" onClick={handleWatchNow}>
                            Watch Now
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleSeeDetails}
                        >
                            See Details
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
