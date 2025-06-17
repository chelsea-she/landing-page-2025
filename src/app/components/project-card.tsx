import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import GrayButton from "./gray-button";

export default function ProjectCard() {
  const projects = [
    {
      name: "instaVerify",
      description: `Developed an iOS mobile app called InstaVerify, which detects 	
      aims to use reseach proven countermeasures against misinformation: accuracy nudging, explanatory debunking, and increased awareness.
      Detects misinformation through spoken words or Youtube video links, with explanations. Educates users detection techniques through GPT chatbot.
      Planning to deploy in App Store by end of summer.`,
      image: "/landing-page-2025/assets/instaVerify.png",
      tempImage: "/assets/instaVerify.png",
      skills: [
        "Swift",
        "XCode",
        "OpenAI API",
        "Firebase",
        "Apple Audio Capability",
        "Apple Developer",
      ],
      link: "https://drive.google.com/file/d/1fizmeSY0FDcQuXCiKKdQNQnJzUtsYLtz/view?usp=sharing",
    },
    {
      name: "shsConnect",
      description: `Developed a messaging iOS app to foster communication among 4K+ students and deans as a full stack Swift developer.
      Automated push notifications using Firebase Cloud Functions (JS) to manage FCM tokens and integrate with APNS, ensuring  
      notifications based on Realtime Database events. Implemented secure user authentication with FirebaseAuth, while automating 
      mass user creation from CSV uploads to Firestore.`,
      image: "/landing-page-2025/assets/shsConnect.png",
      tempImage: "/assets/shsConnect.png",
      skills: [
        "Swift",
        "XCode",
        "Firebase",
        "Firestore",
        "Realtime Database",
        "FirebaseAuth",
        "Apple Developer",
        "APNS",
      ],
      link: "https://drive.google.com/file/d/1Y1uXlpGKBs2z4hh05SVsTTeo4mIuSbZ3/view?usp=drive_link",
    },
    {
      name: "Misinformation Detection Research Paper",
      description: `Published a research paper on a long text, explanatory, state of the art (SOTA) performance fake news detector. 
      Compared differences between SOTA fake news detector performances trained with long news article texts rather than short twitter texts.
      Worked alongside Inspirit AI's Fellowship Research Program mentor Clayton Greenberg.`,
      image: "/landing-page-2025/assets/inspiritAIResearch.png",
      tempImage: "/assets/inspiritAIResearch.png",
      skills: ["Python", "Google Colab", "NLP", "ML/AI", "Kaggle"],
      link: "https://www.jsr.org/hs/index.php/path/article/view/5505",
    },
  ];
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row justify-between items-center bg-foreground shadow-md dark:shadow-custom-gray w-[90%] lg:w-[80%] rounded-lg
            ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          {/* py-6 lg:py-12 px-2 sm:px-4 lg:px-8 lg:gap-8 */}
          <div className="basis-1/2 flex items-center justify-center h-full bg-app-gray-50 py-6 lg:py-12 rounded-t-lg">
            <a className="flex items-center justify-center" href={project.link}>
              <img
                src={project.image}
                alt={project.name + " image"}
                width={500}
                height={500}
                className="px-auto max-w-[90%] max-h-full object-contain rounded-lg shadow-md dark:shadow-custom-gray transition-transform duration-500 lg:hover:scale-105 lg:hover:shadow-lg"
              />
            </a>
          </div>
          <div className="basis-1/2 flex flex-col gap-3 px-8 lg:py-12">
            <p className="text-center lg:text-left text-lg font-medium text-black">
              {project.name}
            </p>
            <ul>{project.description}</ul>
            <div className="flex flex-row flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <GrayButton label={skill} key={index} />
              ))}
            </div>
            <a href={project.link}>
              <SquareArrowOutUpRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
