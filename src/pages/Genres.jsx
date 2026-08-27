import { useNavigate } from "react-router";

import genres from "@/components/data/genresData.js";

import PageHeader from "@/components/shared/PageHeader";

const Genres = () => {
    const navigate = useNavigate();

    const handleGenreClick = (genre) => {
        navigate(`/movies?genre=${encodeURIComponent(genre.name)}`);
    };

    return (
        <section className="mx-auto max-w-7xl w-11/12 px-4 py-20 mt-18">
            <PageHeader
                eyebrow="Explore"
                title="Find something"
                highlightedTitle="you’ll love."
                description="Explore movies and series by genre. Whether you're looking for something thrilling, emotional, funny, or completely out of this world, start with a story that matches your mood."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {genres.map((genre) => (
                    <article
                        key={genre.name}
                        onClick={() => handleGenreClick(genre)}
                        className="group relative min-h-75 cursor-pointer overflow-hidden rounded-2xl"
                    >
                        <img
                            src={genre.image}
                            alt={genre.name}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/10" />

                        <div className="relative flex h-full min-h-75 flex-col justify-end p-6 text-white">
                            <div className="mb-auto flex items-start justify-between">
                                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                                    Genre
                                </span>

                                <span className="text-sm text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                                    →
                                </span>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">{genre.name}</h2>

                                <p className="mt-2 text-sm leading-5 text-white/70">
                                    {genre.description}
                                </p>

                                <div className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4">
                                    <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                                        Explore genre
                                    </span>

                                    <span className="text-sm text-primary transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Genres;
