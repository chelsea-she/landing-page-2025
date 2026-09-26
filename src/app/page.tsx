"use client";

import { Navbar } from "@/app/components/navbar";
import { MapPin } from "lucide-react";
import Picture from "@/app/components/offset-square-image";

import { IoLogoLinkedin } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import RectPicture from "./components/offset-rect-image";
import SkillsSection from "./components/skills-section";
import ExperienceCard from "./components/experience-card";
import ProjectCard from "./components/project-card";
import GrayButton from "./components/gray-button";
import VerticalCards from "./components/vertical-cards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto">
        <section
          id="intro"
          className="flex flex-col px-4 py-8 lg:flex-row items-center lg:items-start gap-8 lg:gap-12 py-8 lg:py-16"
        >
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm order-1 lg:order-2">
            <Picture />
          </div>

          <div className="flex-1 order-2 lg:order-1">
            <h1 className="text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Hello, I'm Chelsea She{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </h1>
            <p className="text-base sm:text-lg text-app-gray-500  mb-6 lg:mb-8 leading-relaxed">
              I am currently student at Cornell University with a double major
              in Computer Science and Cognitive Science, minoring in Artificial
              Intelligence. I have experience in systems software, mobile app
              development, website development, AI/ML and NLP research. I am
              actively looking for a builder community or any opportunities in
              software engineering.
            </p>
            <div className="flex flex-row gap-3 sm:gap-6 lg:justify-start">
              <div className="flex items-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-app-gray-500  flex-shrink-0" />
                <p className="text-sm sm:text-base text-app-gray-500 ">
                  Chicago, IL
                </p>
              </div>
              <div className="flex items-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-app-gray-500  flex-shrink-0" />
                <p className="text-sm sm:text-base text-app-gray-500 ">
                  Ithaca, NY
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:justify-start mt-2 ml-1">
              <div className="flex items-center lg:justify-start gap-2">
                <div className="w-2 h-2 rounded-full animate-ping bg-[#10B981]"></div>
                <div className="absolute w-2 h-2 rounded-full bg-[#10B981]"></div>
                <p className="relative text-sm sm:text-base text-app-gray-500 ">
                  Available for new projects
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3 mt-6 sm:gap-6 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/chelsea-she-44344a247/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </a>
              <a href="https://github.com/chelsea-she" target="_blank">
                <FiGithub />
              </a>
            </div>
          </div>
        </section>
      </main>

      <section
        id="about"
        className="py-8 sm:py-12 md:py-16 lg:py-24 bg-app-gray-50"
      >
        <div className="text-app-gray-500 ">
          <div className="flex flex-column justify-center mb-3">
            <GrayButton label="about me" />
          </div>
          <div className="flex flex-col px-4 lg:flex-row items-center lg:items-start gap-6 lg:gap-8 py-3 lg:py-6">
            <div className="flex-1 flex justify-center lg:mt-8">
              <RectPicture />
            </div>
            <div className="flex-1 flex">
              <div className="w-full pr-4">
                <h2 className="text-center lg:text-left text-2xl text-foreground font-bold">
                  curious about me?
                </h2>
                <p className="mt-3">
                  I'm very passionate and self motivated in full-stack software
                  engineering. I love getting my hands on new projects to build!
                  Either it be website development with Next.js, or a mobile app
                  with Swift or Kotlin, I am always fascinated in the creation
                  process of creating truly impactful and human-centered
                  software.
                </p>
                <p className="mt-2">
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                  I also have experience working on large code-bases, and
                  collaborating with teams towards a collective goal.
                </p>
                <p className="mt-2">
                  I love to explore the intersections of technology and human
                  cognition, to make products that have human-centered designs.
                  At the end of the day, we aren't making products for robots,
                  but cognitively complex human beings, so I love researching
                  and reading about human-computer interaction.
                </p>
                <p className="mt-2">
                  Whenever I am not coding, you can find me playing any racket
                  related sport (tennis and pickelball), crocheting,
                  cooking/baking. I am trying to get into running, aspiring to
                  run a half-marathon one day :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section
        id="work"
        className="py-8 sm:py-12 md:py-16 lg:py-24 bg-app-gray-50"
      >
        <div className="text-app-gray-500 ">
          <div className="flex flex-column justify-center mb-2 lg:mb-4">
            <GrayButton label="experience" />
          </div>
          <p className="text-center mb-8 md:mb-12">
            Here is a summary of my most recent experiences:
          </p>

          <div className="flex justify-center">
            <ExperienceCard />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-8 sm:py-12 md:py-16 lg:py-24 bg-foreground"
      >
        <div className="text-app-gray-500 ">
          <div className="flex flex-column justify-center mb-2 lg:mb-4">
            <GrayButton label="projects" />
          </div>
          <p className="text-center mb-8 md:mb-12">
            Some of the noteworthy projects I have built:
          </p>

          <div className="flex justify-center">
            <ProjectCard />
          </div>
        </div>
      </section>

      <section
        id="other"
        className="py-8 sm:py-12 md:py-16 lg:py-24 bg-app-gray-50"
      >
        <div className="text-app-gray-500 ">
          <div className="flex flex-column justify-center mb-2 lg:mb-4">
            <GrayButton label="other" />
          </div>
          <p className="text-center mb-8 md:mb-12">
            Some other mini things I've done:
          </p>

          <VerticalCards />
        </div>
      </section>

      <footer
        id="contact"
        className="w-full scroll-mt-24 border-t border-gray-800 bg-gradient-to-b from-black to-gray-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <a
                href="#intro"
                className="flex items-center gap-4 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300"
              >
                <img
                  src="/chelsea-she-landing-page/assets/CS.png"
                  width={50}
                  height={50}
                />
                <div>
                  <p className="text-base font-semibold tracking-tight">
                    Chelsea She
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Computer Science &amp; Cognitive Science | AI Minor ·
                    Cornell University
                  </p>
                </div>
              </a>
              <a
                href="mailto:cms556@cornell.edu"
                className="inline-flex items-center rounded-md border border-sky-500/50 bg-sky-950/25 px-4 py-2 text-sm font-medium text-sky-200 transition-colors hover:border-sky-400 hover:bg-sky-900/35 hover:text-white"
              >
                Let’s connect
              </a>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-gray-800 pt-8 md:grid-cols-3">
              <nav aria-label="Footer navigation">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Explore
                </h2>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    ["About", "#about"],
                    ["Skills", "#skills"],
                    ["Experience", "#work"],
                    ["Projects", "#projects"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="transition-colors hover:text-white focus-visible:underline"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Find me online
                </h2>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/chelsea-she-44344a247/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:underline"
                    >
                      <IoLogoLinkedin aria-hidden="true" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/chelsea-she"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:underline"
                    >
                      <FiGithub aria-hidden="true" /> GitHub
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Contact
                </h2>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="mailto:cms556@cornell.edu"
                      className="break-words transition-colors hover:text-white focus-visible:underline"
                    >
                      cms556@cornell.edu
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+13126225135"
                      className="transition-colors hover:text-white focus-visible:underline"
                    >
                      312-622-5135
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="border-t border-gray-800 pt-4 text-center text-xs leading-relaxed text-gray-400">
              <a
                href="https://github.com/chelsea-she/chelsea-she-landing-page"
                className="underline underline-offset-4 hover:text-gray-200"
              >
                Built with 🩵 from Chelsea
              </a>
              {" · "}Design inspired by{" "}
              <a
                href="https://www.figma.com/community/file/1262992249991763120"
                className="underline underline-offset-4 hover:text-gray-200"
              >
                Sagar Shah
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
