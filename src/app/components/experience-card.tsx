"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useId, useRef, useState } from "react";
import { ExternalLink, Sparkle, type LucideIcon } from "lucide-react";
import styles from "./experience-card.module.css";

type Position = {
  position: string;
  date?: string;
  update?: string;
  website?: { url: string; label?: string };
  bullets: string[];
};

type Experience = {
  organization: string;
  image: string;
  positions: Position[];
};

function ExperienceAction({
  tooltip,
  label,
  icon: Icon = Sparkle,
  onClick,
}: {
  tooltip: string;
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismissOutside(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, [open]);

  return (
    <div
      ref={container}
      className={styles.update}
      data-open={open}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={styles.updateTrigger}
        aria-label={label}
        aria-describedby={open ? tooltipId : undefined}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setOpen(true);
        }}
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible")) setOpen(true);
        }}
        onClick={(event) => {
          setOpen((previous) => (event.detail === 0 ? true : !previous));
          onClick?.();
        }}
      >
        <Icon
          size={18}
          className="text-sky-600 dark:text-sky-300"
          aria-hidden="true"
        />
      </button>
      <div
        id={tooltipId}
        role="tooltip"
        className={styles.updateTooltip}
        aria-hidden={!open}
      >
        {tooltip}
      </div>
    </div>
  );
}

function ExperienceStack({ experience }: { experience: Experience }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();
  const stacked = experience.positions.length > 1;

  return (
    <article
      className={`flex items-center gap-5 md:gap-10 w-[90%] md:w-[70%] xl:w-[55%]`}
      aria-label={`${experience.organization} experience`}
    >
      <div className="mb-5 flex items-center gap-4 px-2">
        <Image
          src={experience.image}
          alt={`${experience.organization} logo`}
          width={110}
          height={110}
          className="h-[110px] w-[110px] shrink-0 rounded-lg object-contain"
        />
      </div>
      <div className={styles.stack} data-stacked={stacked}>
        {experience.positions.map((role, index) => {
          const active = index === activeIndex;
          const headingId = `${panelId}-heading-${index}`;
          const contentId = `${panelId}-content-${index}`;

          return (
            <section
              key={`${role.position}-${index}`}
              className={styles.card}
              data-active={active}
              onPointerEnter={(event) => {
                if (
                  stacked &&
                  event.pointerType === "mouse" &&
                  window.matchMedia("(min-width: 768px) and (hover: hover)")
                    .matches
                ) {
                  setActiveIndex(index);
                }
              }}
            >
              <div className={`${styles.heading} justify-between`}>
                <div className="flex min-w-0 items-center gap-1">
                  <h4 className="text-lg font-medium text-foreground">
                    {stacked ? (
                      <button
                        id={headingId}
                        type="button"
                        className={styles.positionTrigger}
                        aria-expanded={active}
                        aria-controls={contentId}
                        onFocus={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                      >
                        {experience.organization} • {role.position}
                      </button>
                    ) : (
                      <span id={headingId}>
                        {experience.organization} • {role.position}
                      </span>
                    )}
                  </h4>
                  {role.update && (
                    <ExperienceAction
                      tooltip={role.update}
                      label={`Update for ${role.position}`}
                    />
                  )}
                  {role.website && (
                    <ExperienceAction
                      tooltip={role.website.label || "Visit project website"}
                      label={`Visit project website for ${role.position} (opens in a new tab)`}
                      icon={ExternalLink}
                      onClick={() =>
                        window.open(
                          role.website!.url,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    />
                  )}
                </div>
                {role.date && (
                  <span className="text-sm font-normal text-app-gray-500">
                    {role.date}
                  </span>
                )}
              </div>
              <div
                id={contentId}
                role="region"
                aria-labelledby={headingId}
                aria-hidden={!active}
                className={styles.content}
              >
                <div className={styles.contentClip}>
                  {role.bullets.length > 0 && (
                    <ul className={styles.bullets}>
                      {role.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bullet}
                          style={
                            {
                              "--reveal-delay": `${100 + Math.min(bulletIndex, 6) * 90}ms`,
                            } as CSSProperties
                          }
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}

export default function ExperienceCard() {
  const experiences: Experience[] = [
    {
      organization: "Apple",
      image: "/landing-page-2025/assets/apple.png",
      positions: [
        {
          position: "Software Engineer Intern",
          bullets: [
            `Built & shipped an MCP for an internal company-wide Apple AI assistant with 60K+ monthly active users`,
            `Engineered an end-to-end concurrent audio-synthesis pipeline with multi-speaker TTS models (Gemini TTS), pydub, DSP silence detection, and timestamp alignment to sync a live transcript to playback`,
            ` Deployed a cross-platform iOS app and mobile-web support with internal authentication, Keychain & Passkey, iOS accessibility zoom, haptics, liquid glass, sidebar with gesture recognition, and native context menus and alerts`,
          ],
          date: "May 2026 - Present",
        },
      ],
    },
    {
      organization: "Cornell DTI Project Team",
      image: "/landing-page-2025/assets/dti.png",
      positions: [
        {
          position: "Software Developer",
          website: {
            url: "https://www.curaise.app/buyer",
            label: "Visit CURaise (Cornell emails only)",
          },
          bullets: [
            `Developer on Cornell's Digital Technology Initiative Project Team for CURaise, a centralized platform designed to streamline and unify fundraising events across the Cornell campus`,
            `Collaborated with UI/UX designers to implement responsive, interactive frontend components using modern web technologies.`,
            `Networked with backend fuctionalities like Supabase for data management and Zod for schema validation and type safety`,
          ],
          date: "Feb 2025 - Present",
        },
      ],
    },
    {
      organization: "Cornell ACSU",
      image: "/landing-page-2025/assets/acsu.png",
      positions: [
        {
          position: "Website Developer Lead",
          bullets: [`Deployed new website on Cornell's server`],
          date: "Aug 2026 - Present",
          website: {
            url: "https://acsu.cornell.edu/",
            label: "Visit our revamped ACSU page",
          },
          update: "Currently developing a new chatbot/RAG Resources page!",
        },
        {
          position: "Website Developer Officer",
          bullets: [
            `Re-designed and developed a whole new website using Figma and NextJS/NodeJS`,
            `Developed a new Events page, integrating the weekly email newsletters on the website live using Mailgun`,
          ],
          date: "Feb 2025 - May 2026",
        },
      ],
    },
    {
      organization: "Cornell Bowers CIS",
      image: "/landing-page-2025/assets/cis.png",
      positions: [
        {
          position: "Research Assistant",
          bullets: [
            `Researched how AI interactions can influence 3D design processes and create more effective problem solving.`,
            `Prototyped a 3-panel 3D interface in React that can simulate horizontal and vertical knitting and log user interactions into MongoDB.`,
          ],
          date: "Feb 2026 - May 2026",
        },
        {
          position: "BURE Research Intern",
          update: "Submitted for review in CSCW 2026!",
          bullets: [
            `Participated in BURE through Professor Qian Yang’s DesignAI Lab`,
            `Developed and deployed a web application that captures raw keystroke data as participants engaged in argumentative writing tasks with autocompletion and chatbot features.`,
            `Analyzed user writing data logs using Huggingface/NLP techniques to visualize and detect key interaction patterns that promote constructive learning.`,
          ],
          date: "June 2025 - Feb 2026",
        },
      ],
    },
    {
      organization: "Headstarter",
      image: "/landing-page-2025/assets/headstarter.jpeg",
      positions: [
        {
          position: "Developer Fellow",
          bullets: [
            "Developed and deployed 5 projects at Headstarter Fellowship: a personal landing page, pantry inventory tracker (Cloudinary image classification), misinformation education chatbot (OpenAI API), AI flashcard generator (with Stripe upgraded accounts), and RAG rate my professor chatbot (Pinecone)",
            "Full stack Swift developer on a team that jump started an iOS mobile app called InstaVerify, which detects misinformation with research proven human-centered countermeasures",
          ],
          date: "Jun 2024 - Aug 2024",
        },
      ],
    },
    // {
    //   organization: "Emory University",
    //   image: "/landing-page-2025/assets/emory.png",
    //   positions: [
    //     {
    //       position: "Research Assistant",
    //       bullets: [
    //         `Wrote a review paper for the psychology behind misinformation, human-centered solutions
    //                to combating misinformation, and how can current implemented countermeasures be more human-centered`,
    //         `Under the assistance of Emory professor Prof. Shu, currently preparing for publication by end of summer`,
    //       ],
    //       date: "Jun 2023 - Present",
    //     },
    //   ],
    // },
    {
      organization: "Code Ninjas",
      image: "/landing-page-2025/assets/code-ninjas.png",
      positions: [
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
        },
      ],
    },
  ];
  return (
    <div className="flex w-full flex-col items-center gap-10 sm:gap-12">
      {experiences.map((experience) => (
        <ExperienceStack
          key={experience.organization}
          experience={experience}
        />
      ))}
    </div>
  );
}
