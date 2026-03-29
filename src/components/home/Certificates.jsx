'use client';

import { useRef, useState, useEffect } from 'react';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import styles from './Certificates.module.css';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <Section id="certificates" className={styles.certSection}>
      <Reveal delay={0.2}>
        <div className={styles.header}>
          <h2 className={styles.title}>CERTIFICATIONS</h2>
          <div className={styles.line}></div>
        </div>
      </Reveal>
      
      <motion.div 
        ref={carousel} 
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {CERT_DATA.map((cert, index) => (
            <motion.div key={index} className={styles.item}>
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className={styles.hint}>
        <ChevronLeft size={16} />
        <span>Drag to explore</span>
        <ChevronRight size={16} />
      </div>
    </Section>
  );
};

export default Certificates;
