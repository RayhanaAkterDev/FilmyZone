import { CalendarDays, Clapperboard } from 'lucide-react';

import MovieCard from '@/components/movies/MovieCard';
import PageHeader from '@/components/shared/PageHeader';

const upcomingMovies = [
    // Your upcoming movie data
];

const UpComing = () => {
    return (
        <main className="border-b border-primary/10 bg-canvas pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl w-11/12 mx-auto px-4">
                {/* Header */}

                <PageHeader
                    variant="section"
                    eyebrow="Coming Soon"
                    title="Upcoming"
                    highlightedTitle="Movies"
                    description="Discover the movies arriving soon and keep track of what
                        you should watch next."
                />

                {/* Movies */}
                {upcomingMovies.length > 0 ? (
                    <section>
                        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                            <div className="flex items-center gap-2">
                                <Clapperboard
                                    size={19}
                                    className="text-primary"
                                />
                                <h2 className="font-semibold text-primary-typo">
                                    Coming Soon
                                </h2>
                            </div>

                            <span className="text-sm text-secondary-typo">
                                {upcomingMovies.length} movies
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {upcomingMovies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 text-center">
                        <CalendarDays
                            size={32}
                            strokeWidth={1.5}
                            className="mb-4 text-secondary-typo"
                        />

                        <h2 className="text-lg font-semibold text-primary-typo">
                            No upcoming movies
                        </h2>

                        <p className="mt-2 max-w-sm text-sm text-secondary-typo">
                            There are no upcoming movies to show right now.
                            Check back later for new releases.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default UpComing;
