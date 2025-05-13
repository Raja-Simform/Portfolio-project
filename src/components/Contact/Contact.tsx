import Form from "../Form/Form";
import { ContactStyled } from "./ContactStyled";
// import { motion, useInView } from "motion/react";
// import { useRef } from "react";
export default function Contact(){
    // const contactRef=
    return(
    <ContactStyled id="contact">
         <h2>Contact</h2>
         <span>I love bringing ideas to life in digital realm.Lets collaborate &
            turns your vision into reality</span>
            
        <div className="contact-details">
            <a href="mailto:raja.jha@simformsolutions.com"><button>Email</button></a>
            <a href="tel:+919106813893"> <button>Phone</button></a>
        </div>
        <Form/>
    </ContactStyled>
    )
}