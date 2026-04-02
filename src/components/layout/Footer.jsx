'use client';

import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const UpworkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 640 640" fill="currentColor">
    <path d="M493.9 359.6C443.6 359.6 410.4 320.7 401.1 305.7C413 210.4 447.9 180.3 493.9 180.3C539.4 180.3 574.8 216.7 574.8 270C574.8 323.3 539.4 359.7 493.9 359.7L493.9 359.6zM493.9 121.8C412 121.8 366.1 175.2 352.9 230.2C338 202.2 327 164.7 318.4 129.9L205.2 129.9L205.2 270.9C205.2 322 181.9 359.9 136.4 359.9C90.9 359.9 64.8 322.1 64.8 270.9L65.3 129.9L0 129.9L0 270.9C0 312 13.3 349.3 37.6 376C62.6 403.5 96.8 417.8 136.4 417.8C215.2 417.8 270.2 357.4 270.2 270.9L270.2 176.1C278.4 207.3 298 267.2 335.5 319.7L300.5 519.1L366.9 519.1L390 377.8C397.6 384.1 405.7 389.8 414.2 394.8C436.4 408.8 461.9 416.7 488.1 417.6C488.1 417.6 492.1 417.8 494.2 417.8C575.4 417.8 640.1 354.9 640.1 270C640.1 185.1 575.3 121.9 494.1 121.9L493.9 121.8z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/cem-deg',
    icon: <GithubIcon />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eren-cem-de%C4%9Firmenci-3494a7246/',
    icon: <LinkedinIcon />,
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01d805a103f11716ab',
    icon: <UpworkIcon />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      {/* Top divider */}
      <div className={styles.divider} />

      <div className={styles.container}>
        {/* CTA block */}
        <div className={styles.cta}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's build something <br className={styles.br} />
            <span className={styles.accent}>exceptional</span> together.
          </motion.h2>

          <motion.a
            href="mailto:erencemdegirmenci@gmail.com"
            className={styles.emailBtn}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} />
            <span>erencemdegirmenci@gmail.com</span>
            <ArrowUpRight size={16} className={styles.arrowIcon} />
          </motion.a>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copy}>
            <span className={styles.brand}>ecd.dev</span>
            <span className={styles.sep}>·</span>
            <span>© {currentYear} Eren Cem Değirmenci</span>
          </div>

          <div className={styles.socials}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={styles.socialLink}
              >
                {s.icon}
                <span className={styles.socialLabel}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
