'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
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
    title: "Intermediate Python",
    issuer: "DataCamp",
    date: "2026",
    link: "/certificates/datacamp-python-Intermediate.pdf"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "2026",
    link: "/certificates/full-stack.pdf"
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "2026",
    link: "/certificates/datacamp-python101.pdf"
  }
];

const Certificates = () => {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  // Native wheel handler — passive: false zorunlu ki preventDefault çalışsın
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      e.stopPropagation();
      el.scrollLeft += e.deltaY > 0 ? 50 : -50;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const scrollBy = (dir) => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
      trackRef.current.style.userSelect = '';
    }
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  // Mouse drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.userSelect = 'none';
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
      trackRef.current.style.userSelect = '';
    }
  };

  return (
    <Section id="certificates" className={styles.certSection}>
      <Reveal delay={0.2}>
        <div className={styles.header}>
          <h2 className={styles.title}>CERTIFICATIONS</h2>
          <div className={styles.line}></div>
          {/* Arrow buttons */}
          <div className={styles.arrows}>
            <button
              className={`${styles.arrowBtn} ${!canScrollLeft ? styles.arrowDisabled : ''}`}
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className={`${styles.arrowBtn} ${!canScrollRight ? styles.arrowDisabled : ''}`}
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              disabled={!canScrollRight}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className={styles.track}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className={styles.inner}>
          {CERT_DATA.map((cert, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certCard}>
                <div className={styles.iconWrapper}>
                  <Award className={styles.icon} size={20} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <span className={styles.date}>{cert.date}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certificates;