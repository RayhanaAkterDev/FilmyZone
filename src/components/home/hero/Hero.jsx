"use client";

import { Carousel } from "flowbite-react";

import HeroSlide from "./HeroSlide";

import heroBanner1 from "@/assets/images/home/heroBanner1.jpg";
import heroBanner2 from "@/assets/images/home/heroBanner2.jpg";
import heroBanner3 from "@/assets/images/home/heroBanner3.jpg";

const heroSlides = [
    {
        id: 1,
        title: "Dune: Part Two",
        description:
            "Paul Atreides joins the Fremen on a journey of revenge and destiny across the dangerous world of Arrakis.",
        image: heroBanner1,
    },
    {
        id: 2,
        title: "Avatar: The Way of Water",
        description:
            "Jake Sully and Neytiri build a new life with their family while protecting the world of Pandora from a familiar threat.",
        image: heroBanner2,
    },
    {
        id: 3,
        title: "Oppenheimer",
        description:
            "The story of J. Robert Oppenheimer and the scientific race that changed the course of history forever.",
        image: heroBanner3,
    },
];

export function Hero() {
    return (
        <div className="hero-carousel h-72 md:h-96">
            <Carousel
                theme={{
                    scrollContainer: {
                        base: "rounded-none",
                    },
                }}
            >
                {heroSlides.map((slider) => (
                    <HeroSlide
                        key={slider.id}
                        title={slider.title}
                        description={slider.description}
                        image={slider.image}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default Hero;
