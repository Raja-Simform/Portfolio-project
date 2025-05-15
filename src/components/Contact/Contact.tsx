import Form from "../Form/Form";
import { ContactStyled } from "./ContactStyled";
// import { motion, useInView } from "motion/react";
// import { useRef } from "react";
export default function Contact(){
    
    return(
    <ContactStyled id="contact">
         <h2>Contact</h2>
         <span id="aboutme">I'm a frontend developer who enjoys building fast,
                    responsive web apps using React and modern JavaScript
                    frameworks. I focus on creating clean, interactive UIs with
                    a strong emphasis on performance, accessibility, and user
                    experience. I'm passionate about writing modular,
                    maintainable code and constantly exploring new tools and
                    techniques in the frontend ecosystem. Whether it's building
                    intuitive interfaces, optimizing workflows, or refining
                    component architecture, I love solving real problems through
                    code. I'm always learning, experimenting, and pushing my
                    skills forward.I love bringing ideas to life in digital realm.Lets collaborate &
            turns your vision into reality</span>
            
        <div className="contact-details">
            <a href="mailto:raja.jha@simformsolutions.com"><button>Email</button></a>
            <a href="tel:+919106813893"> <button>Phone</button></a>
        </div>
        <Form/>
    </ContactStyled>
    )
}