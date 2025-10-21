import React, { useState } from "react";
import { Container, Title, Subtitle, Form, Input, Button, Message } from "./styles";

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <Container id="newsletter">
            <Title>Stay Updated</Title>
            <Subtitle>Join Ramma’s world and get notified about new music, merch, and tours.</Subtitle>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit">Subscribe</Button>
            </Form>

            {submitted && <Message>Thanks for joining! 🎧</Message>}
        </Container>
    );
};

export default Newsletter;