import { useInView, motion } from "motion/react";
import { useRef } from "react";
import { skillsIcons } from "../../constants/AboutConstant";

export default function Skills() {
  const skillContainerRef = useRef(null);
  const isSkillsContainerInView = useInView(skillContainerRef, {
    once: true,
    amount: 0.3,
  });
  return (
    <div className="hard-skills" ref={skillContainerRef}>
      {skillsIcons.map((skill, index) => (
        <div className="ability" key={index}>
          <motion.img
            src={skill.src}
            alt={skill.alt}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isSkillsContainerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5, delay: skill.delay }}
          />
        </div>
      ))}
    </div>
  );
}
