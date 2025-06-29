import Image from "next/image";
import GrayButton from "./gray-button";

const skills = [
  {
    name: "Python",
    logo: "/landing-page-2025/assets/logo/python-logo.png",
    tempLogo: "/assets/logo/python-logo.png",
    alt: "Python logo",
  },
  {
    name: "Java",
    logo: "/landing-page-2025/assets/logo/java-logo.png",
    tempLogo: "/assets/logo/java-logo.png",
    alt: "Java logo",
  },
  {
    name: "HTML/CSS/JS",
    logo: "/landing-page-2025/assets/logo/html-logo.png",
    tempLogo: "/assets/logo/html-logo.png",
    alt: "HTML/CSS/JS logo",
  },
  {
    name: "NextJS",
    logo: "/landing-page-2025/assets/logo/nextjs-logo.png",
    tempLogo: "/assets/logo/nextjs-logo.png",
    alt: "NextJS logo",
  },
  {
    name: "Swift",
    logo: "/landing-page-2025/assets/logo/swift-logo.png",
    tempLogo: "/assets/logo/swift-logo.png",
    alt: "Swift logo",
  },
  {
    name: "Tailwind",
    logo: "/landing-page-2025/assets/logo/tailwind-logo.png",
    tempLogo: "/assets/logo/tailwind-logo.png",
    alt: "Tailwind logo",
  },
  {
    name: "TypeScript",
    logo: "/landing-page-2025/assets/logo/ts-logo.png",
    tempLogo: "/assets/logo/ts-logo.png",
    alt: "TypeScript logo",
  },
  {
    name: "Git",
    logo: "/landing-page-2025/assets/logo/git-logo.png",
    tempLogo: "/assets/logo/git-logo.png",
    alt: "Git logo",
  },
  {
    name: "Firebase",
    logo: "/landing-page-2025/assets/logo/firebase-logo.png",
    tempLogo: "/assets/logo/firebase-logo.png",
    alt: "Firebase logo",
  },
  {
    name: "Kotlin",
    logo: "/landing-page-2025/assets/logo/kotlin-logo.png",
    tempLogo: "/assets/logo/kotlin-logo.png",
    alt: "Kotlin logo",
  },
  {
    name: "SQL",
    logo: "/landing-page-2025/assets/logo/sql-logo.png",
    tempLogo: "/assets/logo/sql-logo.png",
    alt: "SQL logo",
  },
  {
    name: "Apple Developer",
    logo: "/landing-page-2025/assets/logo/apple-logo.png",
    tempLogo: "/assets/logo/apple-logo.png",
    alt: "Apple logo",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-muted-foreground">
          {/* Section Header */}
          <div className="flex justify-center mb-2 md:mb-4">
            <GrayButton label="skills" />
          </div>
          <p className="text-center mb-8 md:mb-12">
            The skills, tools and technologies I am good at:
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-3 p-2 sm:p-3 md:p-4 rounded-lg hover:bg-app-gray-50 transition-colors duration-200"
              >
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                  <img
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.alt}
                    width={96}
                    height={96}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 md:hover:scale-110"
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base text-center font-medium text-app-gray-700 mt-1">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
