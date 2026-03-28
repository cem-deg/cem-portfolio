import Image from 'next/image';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import styles from './About.module.css';

const About = () => {
  const skills = [
    "React / Next.js",
    "UI Architecture",
    "JavaScript",
    "Python"
  ];

  return (
    <Section id="about" className={styles.aboutSection}>
      <div className={styles.grid}>
        <div className={styles.imageCol}>
          <Reveal delay={0.2}>
            <div className={styles.profileWrapper}>
              <Image 
                src="/images/pp.jpeg" 
                alt="Profile" 
                width={400}
                height={500}
                className={styles.profileImage}
                priority
              />
            </div>
          </Reveal>
        </div>
        
        <div className={styles.contentCol}>
          <Reveal delay={0.4}>
            <span className={styles.tagline}>ABOUT ME</span>
            <h2 className={styles.title}>Crafting digital excellence with a focus on architecture.</h2>
            <p className={styles.text}>
              I believe in clean code, scalable architecture, and user-centric design. 
              My approach combines technical precision with creative problem-solving to build 
              products that not only look great but also perform exceptionally.
            </p>
            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>{skill}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default About;
