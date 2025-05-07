import { motion } from "motion/react"
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
export default function SocialMedia(){
    return(
        <motion.div
        className="socialmedia"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <a
          href="https://www.linkedin.com/in/raja-jha-971a3122b"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919106813893&text=Hello+Raja+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Contact"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a
          href="https://github.com/Raja-Simform"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
        >
          <img src={githubIcon} alt="github" />
        </a>
      </motion.div>
    )
}