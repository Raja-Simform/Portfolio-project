import { FormStyled } from "./FormStyled"
export default function Form(){
     return (
     <FormStyled>
        <h3>To Get In Touch Use Form</h3>
        <input id="email" type="email" placeholder="Email" required/>
        <input id ="messege" type="text" placeholder="Messege" required/>
        <button type="submit">Submit</button>
     </FormStyled>
     )
}