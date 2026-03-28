'use client';

import Section from '../common/Section';
import Reveal from '../common/Reveal';
import styles from './Certificates.module.css';
import { Award } from 'lucide-react';

const CERT_DATA = [
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2026",
    link: "/certificates/CS50x.pdf"
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "2026",
    link: "/certificates/datacamp-python101.pdf"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "2026",
    link: "/certificates/full-stack.pdf"
  }
];

const Certificates = () => {
  return (
    <Section id="certificates" className={styles.certSection}>
      <Reveal delay={0.2}>
        <div className={styles.header}>
          <h2 className={styles.title}>CERTIFICATIONS</h2>
          <div className={styles.line}></div>
        </div>
      </Reveal>
      
      <div className={styles.grid}>
        {CERT_DATA.map((cert, index) => (
          <Reveal key={index} delay={0.2 + index * 0.1}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certCard}>
              <div className={styles.iconWrapper}>
                <Award className={styles.icon} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                <span className={styles.date}>{cert.date}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;
