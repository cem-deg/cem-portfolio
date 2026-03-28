'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ecd.dev
        </Link>
        
        <div className={styles.links}>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#certificates">Certificates</Link>
          <Link href="#contact" className={styles.cta}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
