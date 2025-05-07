import { motion } from "motion/react"
import Illustration from "../../assets/illustration.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import { HeroStyled } from "./HeroStyled";

export default function Hero() {
  return (
    <HeroStyled id="home">
      <div className="hero-info">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="greeting"
        >
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Raja Jha
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Software Engineer
        </motion.h3>

        <motion.p
          className="small-resume"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          6 months Experience
        </motion.p>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#contact">
            <button>Contact</button>
          </a>
        </motion.div>

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
      </div>

      <div className="hero-img">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img src={Illustration} alt="illustration" />
        </motion.div>
      </div>
    </HeroStyled>
  );
}
