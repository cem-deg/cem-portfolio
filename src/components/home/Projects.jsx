'use client';

import Section from '../common/Section';
import Reveal from '../common/Reveal';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const PROJECTS_DATA = [
  {
    title: "Everything For Fresh Windows",
    category: "Windows Optimization",
    description: "A comprehensive guide and utility suite for setting up and optimizing a new Windows installation.",
    link: "https://github.com/cem-deg/Everything-For-Fresh-Windows",
    image: "/images/effw.jpeg"
  },
  {
    title: "Cem's ScreenShotter",
    category: "Browser Extension",
    description: "A professional Chrome extension for capturing and managing high-quality full-page screenshots.",
    link: "https://github.com/cem-deg/Cem-s-ScreenShotter",
    image: "/images/screenshotter.png"
  },
  {
    title: "Upcoming Project",
    category: "Development",
    description: "An innovative new web project is currently in development and will be featured here soon.",
    link: "#",
    image: null
  }
];

const Projects = () => {
  return (
    <Section id="projects" className={styles.projectsSection}>
      <Reveal delay={0.2}>
        <div className={styles.header}>
          <h2 className={styles.title}>SELECTED WORKS</h2>
          <div className={styles.line}></div>
        </div>
      </Reveal>
      
      <div className={styles.grid}>
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard 
            key={index}
            index={index}
            {...project}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
