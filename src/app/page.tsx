"use client";
import { useState } from "react";

import { Navbar } from "@/app/components/navbar";
import { Phone, PhoneCall, MapPin, Mail, MailOpen } from "lucide-react";
import Picture from "@/app/components/offset-square-image";

import { IoLogoLinkedin } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import RectPicture from "./components/offset-rect-image";
import SkillsSection from "./components/skills-section";
import ExperienceCard from "./components/experience-card";
import ProjectCard from "./components/project-card";
import GrayButton from "./components/gray-button";
import CopyButton from "./components/copy-button";
import VerticalCards from "./components/vertical-cards";

export default function Home() {
  const [mailHovered, setMailHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);

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
              in Computer Science and Cognitive Science. I have experience in
              mobile app development, website development, AI/ML and NLP
              research. I am actively looking for any opportunities in computer
              programming and software engineering.
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
                  I am a passionate, self motivated full-stack software
                  developer. I love getting my hands on new projects to build.
                  Either it be website development with Next.js, or a mobile app
                  with Swift or Kotlin, I am always fascinated in the creation
                  process of creating truly impactful and human-centered
                  software.
                </p>
                <p className="mt-2">
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                  However, I also have experience working on large code-bases,
                  and collaborating with teams towards a collective goal.
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
                  related sport (tennis and pickelball) or cooking/baking. I am
                  trying to get into running, aspiring to run a half-marathon
                  one day :)
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

      <section
        id="contact"
        className="py-8 sm:py-12 md:py-16 lg:py-24 bg-foreground"
      >
        <div className="text-app-gray-500 ">
          <div className="flex justify-center mb-2 lg:mb-4">
            <GrayButton label="get in touch" />
          </div>
          <p className="text-center mb-4 md:mb-8">
            Feel free to reach out to me if you're looking for a developer, have
            a query, or simply want to connect :)
          </p>
          <div className="flex flex-col justify-center items-center text-foreground gap-4 md:gap-8">
            <div className="flex flex-row items-center">
              <h1 className="text-xl px-1">cms556@cornell.edu</h1>
              <span className="inline-block rotate-90 w-6 h-0.5 bg-foreground rounded-full align-middle" />
              <span
                onMouseEnter={() => setMailHovered(true)}
                onMouseLeave={() => setMailHovered(false)}
                className="inline-flex"
              >
                {mailHovered ? (
                  <a href={`mailto:cms556@cornell.edu`}>
                    <MailOpen className="h-7 w-7 md:h-9 md:w-9 p-2 rounded-md cursor-pointer hover:bg-accent"></MailOpen>
                  </a>
                ) : (
                  <Mail className="h-7 w-7 md:h-9 md:w-9 p-2 rounded-md cursor-pointer hover:bg-accent" />
                )}
              </span>
              <CopyButton value="email" />
            </div>

            <div className="flex flex-row items-center">
              <h1 className="text-xl px-1">312-622-5135</h1>
              <span className="inline-block rotate-90 w-6 h-0.5 bg-foreground rounded-full align-middle" />
              <span
                onMouseEnter={() => setPhoneHovered(true)}
                onMouseLeave={() => setPhoneHovered(false)}
                className="inline-flex"
              >
                {phoneHovered ? (
                  <a href={`sms:3126225135`}>
                    <PhoneCall className="h-7 w-7 md:h-9 md:w-9 p-2 rounded-md cursor-pointer hover:bg-accent" />
                  </a>
                ) : (
                  <Phone className="h-7 w-7 md:h-9 md:w-9 p-2 rounded-md cursor-pointer hover:bg-accent" />
                )}
              </span>
              <CopyButton value="phone" />
            </div>

            <div className="flex flex-row items-center gap-3 lg:-mt-4 sm:gap-6 lg:justify-start">
              <p>You may also find me on these platforms!</p>
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
        </div>
      </section>

      <footer className="w-full flex items-center justify-center py-4 bg-app-gray-50">
        <p>
          <a href="https://github.com/chelsea-she/landing-page-2025">
            <u>coded</u>
          </a>{" "}
          with 🩵 by Chelsea She and
          <a href="https://www.figma.com/community/file/1262992249991763120">
            {" "}
            <u>design</u>
          </a>{" "}
          inspired by Sagar Shah
        </p>
      </footer>
    </div>
  );
}
