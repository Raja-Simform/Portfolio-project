import { AboutStyled } from "./AboutStyled"
import { motion, useInView } from "motion/react"
import rajaImg from '../../assets/raja.PNG'
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import { useRef } from "react"
export default function About(){
 
  const aboutInfoRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const imageRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const skillContainerRef=useRef(null);

  const isInfoInView = useInView(aboutInfoRef, { once: true, amount: 0.3 });
  const isEducationInView = useInView(educationRef, { once: true, amount: 0.5 });
  const isExperienceInView = useInView(experienceRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isSkillsTitleInView = useInView(skillsTitleRef, { once: true, amount: 0.5 });
  const isSkillsContainerInView = useInView(skillContainerRef, { once: true, amount: 0.3 });

  const skillsIcons = [
    { src: python, alt: "Python", delay: 0.8 },
    { src: java, alt: "Java", delay: 0.85 },
    { src: jsIcon, alt: "JavaScript", delay: 0.9 },
    { src: reactIcon, alt: "React", delay: 0.95 },
    { src: typescriptIcon, alt: "TypeScript", delay: 1.0 },
    { src: htmlIcon, alt: "HTML", delay: 1.2 },
    { src: cssIcon, alt: "CSS", delay: 1.25 },
    { src: boostrapIcon, alt: "Bootstrap", delay: 1.3 },
  ];
    return (
    <AboutStyled id="about" >
      <div className="about-info" ref={aboutInfoRef}>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 , delay: 0.1 }}
        >
          About Me
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 , delay: 0.2}}
        >
         Hey there! I'm Raja, a passionate Software Developer with a strong foundation in full-stack web development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 , delay: 0.3}}
        >
        I create responsive web applications, build clean and scalable frontend systems, and enjoy working on collaborative real-time tools.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 , delay: 0.4}}
        >
       I also love diving into system design, crafting efficient algorithms, and have hands-on experience with technologies like React.js, Node.js and Android (Java).
        </motion.p>
      <motion.div
        className="education"
        ref={educationRef}
        initial={{opacity:0,y:50}}
        animate={isEducationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{duration:0.5,delay:0.2}}
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
        animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
          animate={isSkillsTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are my main skills:
      </motion.h3>
      <div className="hard-skills" ref={skillContainerRef}>
          {skillsIcons.map((skill, index) => (
             <div className="hability" key={index}>
              <motion.img 
                src={skill.src} 
                alt={skill.alt}
                initial={{ opacity: 0, y: 50 }}
                animate={isSkillsContainerInView? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: skill.delay }}
              />
            </div>
          )
          )}
        </div>
      </div>
    </AboutStyled>)
}