import { AboutStyled } from "./AboutStyled";
import { motion, useInView } from "motion/react";
import rajaImg from "../../assets/raja.png";

import { useRef } from "react";
import Skills from "../Skills/Skills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
export default function About() {
  const aboutInfoRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const imageRef = useRef(null);
  const skillsTitleRef = useRef(null);

  const isEducationInView = useInView(educationRef, {
    once: true,
    amount: 0.5,
  });
  const isExperienceInView = useInView(experienceRef, {
    once: true,
    amount: 0.5,
  });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isSkillsTitleInView = useInView(skillsTitleRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <AboutStyled id="about">
      <div className="about-info" ref={aboutInfoRef}>
        <PersonalInfo aboutInfoRef={aboutInfoRef} />
        <motion.div
          className="education"
          ref={educationRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isEducationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Education</h3>
          <h5>Bachelor's of Engineering(BE) in Computer Engineering</h5>
          <p>L.D College of Engineering</p>
          <p>8.51 CGPA</p>
        </motion.div>
        <motion.div
          className="experience"
          ref={experienceRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Experience:</h3>
          <h4>Trainee Engineer</h4>
          <p>Simform Solutions | Jan 2025 - Present</p>
          <p>Ahmedabad, India</p>
        </motion.div>
      </div>

      <div className="about-img">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={rajaImg} alt="profile-picture" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          ref={skillsTitleRef}
          animate={
            isSkillsTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are my main skills:
        </motion.h3>
        <Skills />
      </div>
    </AboutStyled>
  );
}
