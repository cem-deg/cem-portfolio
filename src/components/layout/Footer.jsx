'use client';

import Section from '../common/Section';
import Reveal from '../common/Reveal';
import styles from './Footer.module.css';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <Section className={styles.footerSection}>
        <Reveal delay={0.2}>
          <div className={styles.cta}>
            <h2 className={styles.title}>Let's build something<br />exceptional together.</h2>
            <a href="mailto:erencemdegirmenci@gmail.com" className={styles.emailLink}>
              erencemdegirmenci@gmail.com
            </a>
          </div>
        </Reveal>

        <div className={styles.bottomBar}>
          <div className={styles.copy}>
            <span>© {currentYear} EREN CEM DEĞİRMENCİ</span>
            <span className={styles.dot}>•</span>
            <span>DEVELOPER</span>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/cem-deg" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/eren-cem-de%C4%9Firmenci-3494a7246/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
