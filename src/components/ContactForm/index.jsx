import { useRef } from "react"
import {
    ContactFormHeading,
    ContactFormWrapper,
    Form,
    Input,
    SubmitButton,
    TextArea
} from "./ContactForm.styles"
import { sendEmail } from "../../helpers/emailHelper"

const ContactForm = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        sendEmail(formRef)
            .then((result) => {
                console.log("Email sent:", result.text)
                alert("Message sent successfully!")
                e.target.reset()
            })
            .catch((error) => {
                console.error("Email failed:", error.text)
                alert("Failed to send message. Please try again.")
            })
    }

    return (
        <ContactFormWrapper>
            <ContactFormHeading>Contact Form</ContactFormHeading>
            <Form ref={formRef} >
                <Input type="text" name="name" placeholder="Name" required />
                <Input type="email" name="email" placeholder="Email" required />
                <TextArea name="message" placeholder="Message" required />
                <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
            </Form>
        </ContactFormWrapper>
    )
}

export default ContactForm
