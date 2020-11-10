import React, { useState } from "react";
import { db } from "../firebase";
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

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");

const [loader, setLoader] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
    .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
        })
    .then(() => {
        setLoader(false);
        alert("Your message has been send");
        setLoader(false);
        })
    .catch((error) => {
        alert(error.message);
        setLoader(false);
        });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    };

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
                            <Form onSubmit={handleSubmit}>
                                <H1><span role="img" aria-label="selfie">Contact Me 🤳</span></H1>
                                <Label>Name</Label>
                                <Input
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Label>Email</Label>
                                <Input
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Label>Subject</Label>
                                <Input
                                    placeholder="Subject"
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <Label>Message</Label>
                                <Textarea
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></Textarea>
                                <Button
                                    type="submit"
                                    style={{ background: loader ? "#ccc" : "#01bf71" }}
                                    >Send
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



