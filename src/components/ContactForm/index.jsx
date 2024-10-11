import React from 'react'
import { ContactFormHeading, ContactFormWrapper, Form, Input, SubmitButton, TextArea } from './ContactForm.styles'

const ContactForm = () => {
    return (
        <ContactFormWrapper>
            <ContactFormHeading>Contact Form</ContactFormHeading>
            <Form>
                <Input placeholder='Name' />
                <Input placeholder='Email' />
                <TextArea placeholder='Message' />
                <SubmitButton>Send</SubmitButton>
            </Form>
        </ContactFormWrapper>
    )
}

export default ContactForm