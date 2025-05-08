import Form from "../Form/Form";
import { ContactStyled } from "./ContactStyled";

export default function Contact(){
    return(
    <ContactStyled>
         <h2>Contact</h2>
         <span>I love bringing ideas to life in digital realm.Lets collaborate &
            turns your vision into reality</span>
            
        <div className="contact-details">
            <button>Email</button>
            <button>Phone</button>
        </div>
        <Form/>
    </ContactStyled>
    )
}