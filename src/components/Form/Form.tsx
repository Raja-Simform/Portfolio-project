import { FormStyled } from "./FormStyled"
// export default function Form(){
//      return (
//      <FormStyled>
//         <h3>To Get In Touch Use Form</h3>
//         <input id="email" type="email" placeholder="Email" required/>
//         <input id ="messege" type="text" placeholder="Messege" required/>
//         <button type="submit">Submit</button>
//      </FormStyled>
//      )

import { useState } from "react";

// }
export default function Form() {
   const [result, setResult] = useState("");
 
   const onSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);
 
     formData.append("access_key", "3eab47fd-b49b-4b26-8548-1a9775a21d40");
 
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData
     });
 
     const data = await response.json();
 
     if (data.success) {
       setResult("Form Submitted Successfully");
       event.target.reset();
     } else {
       console.log("Error", data);
       setResult(data.message);
     }
   };
 
   return (
     <FormStyled>
       <form onSubmit={onSubmit} id="form">
         <input id="name" type="text" name="name" placeholder="Name"  required/>
         <input type="email" id="email" name="email" placeholder="Email"  required/>
         <textarea name="message" id ="messege" placeholder="Write Your Messege"  required></textarea>
 
         <button type="submit">Submit Form</button>
 
       </form>
       <span>{result}</span>
 
     </FormStyled>
   );
 }