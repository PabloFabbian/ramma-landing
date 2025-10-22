import React, { useState } from "react";
import * as S from "./styles";

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    return (
        <S.Section id="newsletter">
            <S.Container>
                <S.ContentWrapper>
                    <S.LeftSide>
                        <S.Eyebrow>INFORMACIÓN EXCLUSIVA</S.Eyebrow>
                        <S.Title>
                            <S.TitleHighlight>PRIMERAS</S.TitleHighlight>

                            NOVEDADES
                        </S.Title>
                        <S.Description>
                            Mantente informado sobre nuevos lanzamientos, fechas de conciertos y colecciones especiales.
                            Recibe contenido prioritario y oportunidades exclusivas antes que nadie.
                        </S.Description>

                        <S.Features>
                            <S.Feature>
                                <S.FeatureIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3V21M9 6L9 18M15 9V18M6 8L18 16M6 16L18 8" stroke="#FF4747" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </S.FeatureIcon>
                                <S.FeatureText>Lanzamientos exclusivos</S.FeatureText>
                            </S.Feature>
                            <S.Feature>
                                <S.FeatureIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="6" width="16" height="12" rx="2" stroke="#FF4747" stroke-width="2" />
                                        <path d="M8 4V8M16 4V8M4 10H20" stroke="#FF4747" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </S.FeatureIcon>
                                <S.FeatureText>Acceso preferente a eventos</S.FeatureText>
                            </S.Feature>
                            <S.Feature>
                                <S.FeatureIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8H8M16 12H8M16 16H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#FF4747" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </S.FeatureIcon>
                                <S.FeatureText>Ediciones limitadas</S.FeatureText>
                            </S.Feature>
                        </S.Features>
                    </S.LeftSide>

                    <S.RightSide>
                        <S.FormCard $submitted={submitted}>
                            {!submitted ? (
                                <>
                                    <S.FormTitle>SUSCRIPCIÓN</S.FormTitle>
                                    <S.Form onSubmit={handleSubmit}>
                                        <S.InputWrapper>
                                            <S.Input
                                                type="email"
                                                placeholder="tu@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <S.InputLine />
                                        </S.InputWrapper>
                                        <S.SubmitButton type="submit">
                                            <span>SUSCRIBIRSE</span>
                                            <S.ButtonArrow>→</S.ButtonArrow>
                                        </S.SubmitButton>
                                    </S.Form>
                                    <S.Privacy>
                                        Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
                                    </S.Privacy>
                                </>
                            ) : (
                                <S.SuccessMessage>
                                    <S.SuccessIcon>✓</S.SuccessIcon>
                                    <S.SuccessTitle>¡CONFIRMADO!</S.SuccessTitle>
                                    <S.SuccessText>
                                        Gracias por suscribirte. Revisa tu correo para confirmar tu suscripción.
                                    </S.SuccessText>
                                </S.SuccessMessage>
                            )}
                        </S.FormCard>

                        <S.SocialProof>
                            <S.ProofText>
                                <S.ProofNumber>+15K</S.ProofNumber> SUSCRIPTORES
                            </S.ProofText>
                        </S.SocialProof>
                    </S.RightSide>
                </S.ContentWrapper>

                <S.BottomCTA>
                    <S.CTAText>
                        Conecta con **Ramma** en redes sociales:
                    </S.CTAText>
                    <S.SocialLinks>
                        <S.SocialLink href="https://instagram.com/ramma" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </S.SocialLink>
                        <S.SocialLink href="https://tiktok.com/@ramma" target="_blank" rel="noopener noreferrer">
                            TikTok
                        </S.SocialLink>
                        <S.SocialLink href="https://twitter.com/ramma" target="_blank" rel="noopener noreferrer">
                            X/Twitter
                        </S.SocialLink>
                        <S.SocialLink href="https://youtube.com/@ramma" target="_blank" rel="noopener noreferrer">
                            YouTube
                        </S.SocialLink>
                    </S.SocialLinks>
                </S.BottomCTA>
            </S.Container>

            <S.BackgroundNoise />
        </S.Section>
    );
};

export default Newsletter;