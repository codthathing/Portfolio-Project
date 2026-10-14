import { useEffect } from "react";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare, FaGithub, FaX } from "react-icons/fa6";
import StackSpan from "../common/StackSpan";

const tileVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const tileClass = "min-w-0 border border-[#303030] bg-[#171717] p-5 sm:p-6 lg:p-8";
const eyebrowClass = "mb-3 text-[0.65rem] font-semibold tracking-[0.16em] text-[#929292]";
const headingClass = "mb-4 font-Yantramanav text-xl font-bold leading-tight text-[#f1f1f1] sm:text-2xl";
const bodyClass = "text-sm leading-7 text-[#a7a7a7]";

function SectionHeading({ eyebrow, title, count }) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <p className={eyebrowClass}>{eyebrow}</p>
        <h2 className={`${headingClass} mb-0`}>{title}</h2>
      </div>
      <span className="border border-[#383838] px-2 py-1 font-Roboto text-xs text-[#9b9b9b]">{String(count).padStart(2, "0")}</span>
    </div>
  );
}

export default function ProjectsModal({ setModal, project_image, project_topic, project_text, project_description, project_status, project_architecture = [], project_features = [], project_stack = [], project_link, project_github, project_upcoming }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setModal(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setModal]);

  return (
    <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-[3vh] backdrop-blur-md sm:p-[4vh_4vw] lg:p-[5vh_5vw]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={(event) => { if (event.target === event.currentTarget) setModal(false) }}>
      <motion.section className="flex max-h-[90dvh] w-[90vw] flex-col overflow-hidden border border-[#414141] bg-[#111] text-[#f4f4f4] shadow-2xl shadow-black/60 lg:max-w-[1500px]" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.28, ease: "easeOut" }} onClick={(event) => event.stopPropagation()}>
        <header className="z-10 flex shrink-0 items-center justify-between border-b border-[#303030] bg-[#111] px-3 py-2.5 sm:px-5">
          <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-[#929292]">PROJECT DETAILS</p>
          <button type="button" className="grid size-9 place-items-center rounded-full border border-[#383838] bg-[#1a1a1a] text-sm text-[#d0d0d0] transition duration-200 hover:rotate-90 hover:bg-[#303030] hover:text-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#b7b7b7]" onClick={() => setModal(false)} aria-label="Close project details">
            <FaX aria-hidden="true" />
          </button>
        </header>

        <div className="grid min-h-0 flex-1 auto-rows-max grid-cols-1 gap-2 overflow-y-auto p-2 [scrollbar-color:#555_#171717] [scrollbar-width:thin] sm:grid-cols-2 lg:grid-cols-12 lg:gap-2.5 lg:p-2.5">
          <motion.figure className={`${tileClass} group relative m-0 flex min-h-56 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_45%,rgb(255_255_255_/_7%),transparent_65%),#101010] p-0 sm:min-h-72 lg:col-span-5`} variants={tileVariants} initial="initial" animate="animate">
            <img src={project_image} alt={`${project_topic} preview`} className="h-full min-h-56 w-full object-contain transition duration-500 group-hover:scale-[1.025] group-hover:contrast-105 sm:min-h-72" />
            <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate border border-white/15 bg-black/80 px-2.5 py-2 font-Roboto text-xs font-semibold uppercase text-[#eee]">{project_topic}</figcaption>
          </motion.figure>

          <motion.article className={`${tileClass} flex flex-col justify-center sm:col-span-1 sm:row-span-1 lg:col-span-7`} variants={tileVariants} initial="initial" animate="animate" transition={{ delay: 0.04 }}>
            <p className={eyebrowClass}>OVERVIEW</p>
            <h1 id="project-modal-title" className="mb-3 break-words font-Yantramanav text-2xl font-bold leading-[1.05] text-[#f6f6f6] sm:text-3xl lg:text-5xl capitalize">
              {project_topic}
            </h1>
            <p className="mb-5 text-[0.95rem] leading-7 text-[#c2c2c2] sm:text-base">{project_text}</p>
            {project_status && (
              <p className="mb-0 flex items-start gap-2.5 border-t border-[#333] pt-4 text-xs leading-6 text-[#a7a7a7]">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[#b7b7b7] shadow-[0_0_12px_rgb(220_220_220_/_35%)]" aria-hidden="true" />
                {project_status}
              </p>
            )}
          </motion.article>

          {project_description && (
            <motion.article className={`${tileClass} bg-[#1b1b1b] sm:col-span-2 lg:col-span-12`} variants={tileVariants} initial="initial" animate="animate" transition={{ delay: 0.08 }}>
              <p className={eyebrowClass}>THE STORY</p>
              <h2 className={headingClass}>About this project</h2>
              <p className={`${bodyClass} mb-0`}>{project_description}</p>
            </motion.article>
          )}

          {project_architecture.length > 0 && (
            <motion.article className={`${tileClass} sm:col-span-2 lg:col-span-6`} variants={tileVariants} initial="initial" animate="animate" transition={{ delay: 0.12 }}>
              <SectionHeading eyebrow="UNDER THE HOOD" title="Architecture" count={project_architecture.length} />
              <ol className="m-0 grid list-none gap-0 p-0">
                {project_architecture.map((item, index) => (
                  <li className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-[#303030] py-3" key={`${index}-${item}`}>
                    <span className="font-Roboto text-xs leading-6 text-[#777]">{String(index + 1).padStart(2, "0")}</span>
                    <p className={`${bodyClass} mb-0 break-words text-[0.82rem]`}>{item}</p>
                  </li>
                ))}
              </ol>
            </motion.article>
          )}

          {project_features.length > 0 && (
            <motion.article className={`${tileClass} sm:col-span-2 lg:col-span-6`} variants={tileVariants} initial="initial" animate="animate" transition={{ delay: 0.16 }}>
              <SectionHeading eyebrow="WHAT IT CAN DO" title="Key features" count={project_features.length} />
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {project_features.map(({ id, topic, description }, index) => (
                  <div className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 border border-[#303030] bg-[#1b1b1b] p-3" key={id ?? topic}>
                    <span className="font-Roboto text-xs leading-6 text-[#777]">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <h3 className="mb-1.5 break-words font-Roboto text-sm font-semibold text-[#e6e6e6]">{topic}</h3>
                      <p className="mb-0 break-words font-Roboto text-xs leading-5 text-[#a7a7a7]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          )}

          {project_stack.length > 0 && (
            <motion.article className={`${tileClass} bg-[#141414] sm:col-span-2 lg:col-span-12`} variants={tileVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
              <SectionHeading eyebrow="TOOLS & TECHNOLOGIES" title="Project stack" count={project_stack.length} />
              <div className="flex flex-wrap gap-2 border-b border-[#303030] pb-5">
                <StackSpan stackArray={project_stack} className="inline-flex items-center gap-2 rounded-full border border-[#3b3b3b] bg-[#1c1c1c] px-3 py-2 font-Roboto text-xs font-medium text-[#dedede]" />
              </div>
              <div className="mt-1 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {project_stack.map(({ id, stack_name, stack_use }) => (
                  <div className="min-w-0 border-b border-[#303030] py-4" key={id ?? stack_name}>
                    <h3 className="mb-1.5 break-words font-Roboto text-sm font-semibold capitalize text-[#e6e6e6]">{stack_name}</h3>
                    {stack_use && <p className="mb-0 break-words font-Roboto text-xs leading-5 text-[#a7a7a7]">{stack_use}</p>}
                  </div>
                ))}
              </div>
            </motion.article>
          )}

          {project_upcoming && (
            <motion.article className={`${tileClass} bg-[#1b1b1b] sm:col-span-1 lg:col-span-8`} variants={tileVariants} initial="initial" animate="animate" transition={{ delay: 0.24 }}>
              <p className={eyebrowClass}>WHAT&apos;S NEXT</p>
              <h2 className={headingClass}>On the roadmap</h2>
              <p className={`${bodyClass} mb-0`}>{project_upcoming}</p>
            </motion.article>
          )}

          {(project_github || project_link) && (
            <motion.nav className={`${tileClass} flex flex-col justify-center sm:col-span-1 lg:col-span-4`} aria-label="Project links" variants={tileVariants} initial="initial" animate="animate" transition={{ delay: 0.28 }}>
              <p className={eyebrowClass}>EXPLORE</p>
              <h2 className={headingClass}>Take a closer look</h2>
              <div className="grid gap-2">
                {project_github && (
                  <a className="flex min-h-11 items-center gap-2.5 border border-[#3b3b3b] px-3 py-2.5 font-Roboto text-xs font-medium text-[#e8e8e8] transition hover:border-[#696969] hover:bg-[#222] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#b7b7b7]" href={`https://github.com/codthathing/${project_github}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" />
                    Source code
                    <FaArrowUpRightFromSquare className="ml-auto text-[0.7rem] text-[#929292]" aria-hidden="true" />
                  </a>
                )}
                {project_link && (
                  <a className="flex min-h-11 items-center gap-2.5 border border-[#3b3b3b] px-3 py-2.5 font-Roboto text-xs font-medium text-[#e8e8e8] transition hover:border-[#696969] hover:bg-[#222] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#b7b7b7]" href={`https://${project_link}`} target="_blank" rel="noopener noreferrer">
                    Live project
                    <FaArrowUpRightFromSquare className="ml-auto text-[0.7rem] text-[#929292]" aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.nav>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}
