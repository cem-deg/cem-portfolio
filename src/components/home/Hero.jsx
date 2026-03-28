'use client';

import Section from '../common/Section';
import Reveal from '../common/Reveal';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Section className={styles.hero}>
      <Reveal delay={0.2} y={30}>
        <span className={styles.intro}>HEY, I'M EREN CEM.</span>
      </Reveal>
      <Reveal delay={0.4} y={30}>
        <h1 className={styles.title}>
          I build <span className={styles.accent}>modern</span>, digital products with <span className={styles.accent}>precision</span>.
        </h1>
      </Reveal>
      <Reveal delay={0.6} y={30}>
        <p className={styles.subtitle}>
          Software developer focused on creating innovative, professional web solutions. 
          Expertise in React, Next.js, and architectural excellence.
        </p>
      </Reveal>
      <Reveal delay={0.8} y={30}>
        <div className={styles.buttons}>
          <a href="#projects" className={styles.primary}>View My Work</a>
          <a href="#about" className={styles.secondary}>About Me</a>
        </div>
      </Reveal>
    </Section>
  );
};

export default Hero;
