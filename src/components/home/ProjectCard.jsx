import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, description, image, index, link = "#" }) => {
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <ArrowUpRight size={32} />
              <span>Görüntüle</span>
            </div>
          </div>
          {image ? (
            <Image 
              src={image} 
              alt={title} 
              fill 
              style={{ objectFit: 'cover' }}
              className={styles.projectImage}
            />
          ) : (
            <div className={styles.placeholderImage}>
              <div className={styles.rect}></div>
              <div className={styles.codeSnippet}>
                <code>{title.toLowerCase().replace(/ /g, '-')}</code>
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.cardInfo}>
          <p className={styles.category}>{category}</p>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
