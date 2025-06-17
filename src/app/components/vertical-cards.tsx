"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    image: "/assets/appDevHackChallenge.png",
    title: "Cornell AppDev Hack Challenge",
    description: `Developed a lost and found app named Found that aims to help Cornellians find their lost items throughout campus.
    Implemented backend with FirebaseAuth and SQL data storage.`,
    link: "https://drive.google.com/file/d/1Ll7kA1Wrlic71OqsCzma-fFChS-u_D3N/view?usp=sharing",
    linkText: "demo",
  },
  {
    id: 2,
    image: "/assets/shsHacks.png",
    title: "Highschool Wellness Hackathon",
    description: `Created a wellness website including linked spotify playlists, meditation timers, and breathing countdowns. 
     Led a website development workshop teaching Javascript.`,
    link: "https://replit.com/@ChelseaShe/shsHacks-2023",
    linkText: "replit",
  },
  {
    id: 3,
    image: "/assets/kodeWithKlossy.png",
    title: "KodeWithKlossy Website Challenge",
    description:
      "Made a website teaching fast fashion called CuttOff. Included an interactive map of thrift shops in different cities, informative slideshows, and a click through list of stores to avoid.",
    link: "https://replit.com/@ChelseaShe/KwK-Final-Project-Original-Copy",
    linkText: "replit",
  },
  {
    id: 4,
    image: "/assets/InspiritAIScholar.png",
    title: "Inspirit AI Scholar",
    description: `Learned how to develop ML models including computer vision, NLP, and neural networks.
      Analyzed sentiment on Twitter posts using NLP to determine sentiments on a particular company.`,
    link: "https://github.com/chelsea-she/InspiritAI-Scholar-Program",
    linkText: "github",
  },
  {
    id: 5,
    image: "/assets/artPortfolio.png",
    title: "Highschool Art Portfolio",
    description:
      "Learned how to self express individual ideas/beliefs, emotions, and experiences in the form of art in many different styles. This included Chinese painting, acrylic painting, oil painting, and watercolor.",
    link: "https://drive.google.com/file/d/1JOmqkMHND1Wm8fvbUNWgwSSFZaOWZG4f/view?usp=sharing",
    linkText: "portfolio",
  },
];

export default function VerticalCards() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      setActiveIndex(Math.round(scrollLeft / 304));
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 304;
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setActiveIndex(Math.round(scrollLeft / 304));
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 304;
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setActiveIndex(Math.round(scrollLeft / 304));
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="w-full flex flex-row justify-center items-center gap-6 lg:gap-12">
        <Button
          variant="outline"
          size="icon"
          className={`bg-foreground/90 backdrop-blur-sm shadow-lg dark:shadow-custom-gray hover:bg-foreground ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide py-4"
          onScroll={checkScrollButtons}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cardData.map((card) => (
            <Card
              key={card.id}
              className="flex-shrink-0 w-72 bg-app-foreground shadow-md dark:shadow-custom-gray hover:shadow-lg transition-shadow duration-300 p-0 m-0"
            >
              <CardContent className="p-0 m-0">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-app-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-app-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="pt-0 px-4 pb-4 -mt-4">
                <Button
                  variant="outline"
                  className="hover:bg-app-secondary hover:text-app-secondary-foreground transition-colors"
                  asChild
                >
                  <a
                    href={card.link}
                    className="flex items-center justify-center gap-2"
                  >
                    {card.linkText}
                    <Link className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className={`bg-foreground/90 backdrop-blur-sm shadow-lg dark:shadow-custom-gray hover:bg-foreground ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile-friendly scroll indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-app-gray-500" : "bg-app-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
