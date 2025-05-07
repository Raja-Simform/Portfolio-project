import { motion } from "motion/react"
import Illustration from "../../assets/illustration.svg";
import Hello from "../../assets/Hello.gif";
import { HeroStyled } from "./HeroStyled";
import SocialMedia from "../SocialMedia/SocialMedia";

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
        <SocialMedia/>
  
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
