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
    label: 'Email',
    href: 'mailto:erencemdegirmenci@gmail.com',
    icon: <Mail size={18} />,
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
