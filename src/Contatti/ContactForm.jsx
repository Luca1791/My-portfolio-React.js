import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import './Contact.css'


function Contact() {
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Lucaweb', 'template_1p1t2gq', form.current, {
        publicKey: 'AgaySjLUw1Afe1nLn',
      })
      .then(
        () => {
            Swal.fire({
				title: "Messaggio Inviato",
				text: "You clicked the button!",
				icon: "success"
			});
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
  };



    return (
        
        <section className='contact' id='Contatti'>
          <form ref={form} onSubmit={sendEmail}>
            <h2>
              Contact
            </h2>
            <div className="input-box">
              <label >Full name</label>
              <input type="text" className="field" placeholder="Enter yuor name" required name="user_name" />
            
            </div>
            <div className="input-box">
              <label > Email Address</label>
              <input type="email" className="field" placeholder="Enter your email" required name="user_email" />
            
            
            
            </div>
            <div className="input-box">
              <label >Your message</label>
              <textarea name="message"  className="field mess" placeholder="your message" required></textarea>
            
            </div>
            <button type="submit" value="Send">Send message</button>
          </form>
        
        </section>
        
      )
}





export default  Contact