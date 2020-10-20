import React from 'react';
import emailjs from 'emailjs-com';
import {
ContactContainer,
ContactH1,
ContactWrapper,
ContactRow,
Column1,
Column2
} from './ContactsElements';


const ContactSection = () => {


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_s7jdh6f', e.target, 'user_qgmCZx45HyTAJSRhZ1m0o')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <>
            <ContactContainer id='contacts'>
                <ContactH1>Contact</ContactH1>
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                        <h1>Labassdfsdf</h1> 
                        </Column1>
                        <Column2>
                            <form onSubmit={sendEmail}>
                                <input type="text" placeholder="Name" name="name"/>
                                <input type="email" placeholder="Email Address" name="email"/>
                                <input type="text" placeholder="Subject" name="subject"/>
                                <textarea  placeholder="Your message" name="message"></textarea>
                                <input type="submit" value="Send Message"></input>
                            </form>
                        </Column2>
                    </ContactRow> 
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default ContactSection
