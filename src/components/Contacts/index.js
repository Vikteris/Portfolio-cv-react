import React, { useState } from "react";
import emailjs from 'emailjs-com';
import {
    Form,
    H1,
    Label,
    Input,
    Textarea,
    Button,
    ContactContainer,
    ContactH1,
    ContactWrapper,
    ContactRow,
    Column1,
    Column2,
    Contacts,
    Conta,
} from "./ContactsElements";

const ContactSection = () => {

const [loader, setLoader] = useState(false);

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ea5g6yd', 'template_bhyurj3', e.target, 'user_qgmCZx45HyTAJSRhZ1m0o')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
      e.target.reset();
  }

    return (
        <>
            <ContactContainer id='contacts'>
                <ContactH1>Contacts</ContactH1>
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                            <Contacts>
                                <Conta><span role="img">▶ Phone number: + 370 60483791</span></Conta>
                                <Conta><span role="img">▶ Email: vikteris@gmail.com</span></Conta>
                            </Contacts> 
                        </Column1>
                        <Column2>
                            <Form className="contact-form" onSubmit={sendEmail}>
                                <H1><span role="img" aria-label="selfie">Contact Me 🤳</span></H1>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    placeholder="Name"
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                />
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required
                                />
                                <Label htmlFor="name">Subject</Label>
                                <Input
                                    type="text" 
                                    id="name" 
                                    name="subject" 
                                    required
                                />
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    rows="5" 
                                    id="message" 
                                    name="message" 
                                    required
                                ></Textarea>
                                <Button
                                    // onClick={notify}
                                    type="submit">
                                        Send
                                </Button>
                            </Form>
                        </Column2>
                    </ContactRow> 
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default ContactSection



