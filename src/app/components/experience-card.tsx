import Image from "next/image";

export default function ExperienceCard() {
  const experiences = [
    {
      position: "Research Intern",
      bullets: [
        `Researched under Cornell's Bowers CIS Undergraduate Research Program alongside Prof. Yang`,
        `Developed case study web app measuring constructive learning when participants write with generative AI `,
        `Researched intersectionalities of human-computer interaction, impact of LLMs and generative AI, and website development`,
      ],
      date: "June 2025 - Present",
      image: "/landing-page-2025/assets/cis.png",
      tempImage: "/assets/cis.png",
    },
    {
      position: "Software Developer",
      bullets: [
        `Developer on Cornell's Digital Technology Initiative Project Team for CURaise, a centralized platform designed to streamline and unify fundraising events across the Cornell campus`,
        `Collaborated with UI/UX designers to implement responsive, interactive frontend components using modern web technologies.`,
        `Networked with backend fuctionalities like Supabase for data management and Zod for schema validation and type safety`,
      ],
      date: "Feb 2025 - Present",
      image: "/landing-page-2025/assets/dti.png",
      tempImage: "/assets/dti.png",
    },
    {
      position: "Developer Fellow",
      bullets: [
        "Developed and deployed 5 projects at Headstarter Fellowship: a personal landing page, pantry inventory tracker (Cloudinary image classification), misinformation education chatbot (OpenAI API), AI flashcard generator (with Stripe upgraded accounts), and RAG rate my professor chatbot (Pinecone)",
        "Full stack Swift developer on a team that jump started an iOS mobile app called InstaVerify, which detects misinformation with research proven human-centered countermeasures",
      ],
      date: "Jun 2024 - Aug 2024",
      image: "/landing-page-2025/assets/headstarter.jpeg",
      tempImage: "/assets/headstarter.jpeg",
    },
    {
      position: "Research Assistant",
      bullets: [
        `Wrote a review paper for the psychology behind misinformation, human-centered solutions 
               to combating misinformation, and how can current implemented countermeasures be more human-centered`,
        `Under the assistance of Emory professor Prof. Shu, currently preparing for publication by end of summer`,
      ],
      date: "Jun 2023 - Present",
      image: "/landing-page-2025/assets/emory.png",
      tempImage: "/assets/emory.png",
    },
    {
      position: "Lead Instructor",
      bullets: [
        `Taught 100+ young coders the fundamentals of coding at Code Ninjas`,
        `Led middle school student program centered on game development
              curriculum: Scratch (block coding), JavaScript, Roblox Studio,
              Unity (C#)`,
        `Assisted in junior programs for elementary school students:
              Scratch Jr. (block coding), Code Spark, circuits`,
      ],
      date: "Oct 2021- May 2024",
      image: "/landing-page-2025/assets/code-ninjas.png",
      tempImage: "/assets/code-ninjas.png",
    },
  ];
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-between items-center py-6 lg:py-12 px-2 sm:px-4 lg:px-8 lg:gap-8 bg-white dark:bg-black shadow-md dark:shadow-custom-gray w-[90%] lg:w-[55%] rounded-lg"
        >
          <div className="w-24 py-4 lg:w-72 lg:p-2">
            <img
              src={experience.tempImage}
              alt="Rectangle image with diagonal offset"
              width={80}
              height={80}
              className="max-w-[80%] max-h-full object-contain rounded-lg"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex flex-col w-[80%] lg:w-[100%]">
            <p className="text-center lg:text-left text-lg font-medium text-foreground mb-2 mb:py-4">
              {experience.position}
            </p>
            <ul className="list-disc ml-4">
              {experience.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>

          <p className="mt-2 lg:mt-0 text-center lg:text-left text-sm text-muted-foreground h-full lg:whitespace-nowrap lg:w-32">
            {experience.date}
          </p>
        </div>
      ))}
    </div>
  );
}
