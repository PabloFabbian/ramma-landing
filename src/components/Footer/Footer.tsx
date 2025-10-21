import React from "react";
import { Container, Logo, Socials, IconLink, Copy } from "./styles";

const Footer: React.FC = () => {
    return (
        <Container>
            <Logo>RAMMA</Logo>

            <Socials>
                <IconLink
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                            fill="currentColor"
                        />
                    </svg>
                </IconLink>

                <IconLink
                    href="https://open.spotify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Spotify"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.373 18.627 0 12 0zm5.482 17.437a.75.75 0 0 1-1.027.253c-2.806-1.724-6.34-2.113-10.51-1.163a.75.75 0 1 1-.326-1.465c4.503-1.004 8.358-.563 11.441 1.309a.75.75 0 0 1 .422 1.066zm1.462-2.87a.9.9 0 0 1-1.23.304c-3.21-1.963-8.095-2.534-11.887-1.4a.9.9 0 0 1-.522-1.72c4.182-1.269 9.524-.626 13.168 1.567a.9.9 0 0 1 .471 1.249zm.137-2.933c-3.739-2.211-9.964-2.412-13.592-1.329a1.05 1.05 0 0 1-.598-2.014c4.085-1.213 10.988-.983 15.23 1.526a1.05 1.05 0 1 1-1.04 1.817z"
                            fill="currentColor"
                        />
                    </svg>
                </IconLink>

                <IconLink
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.498 6.186a2.99 2.99 0 0 0-2.107-2.115C19.615 3.5 12 3.5 12 3.5s-7.615 0-9.391.571A2.99 2.99 0 0 0 .502 6.186 31.231 31.231 0 0 0 0 12a31.23 31.23 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.107 2.115C4.385 20.5 12 20.5 12 20.5s7.615 0 9.391-.571a2.99 2.99 0 0 0 2.107-2.115A31.23 31.23 0 0 0 24 12a31.23 31.23 0 0 0-.502-5.814zM9.75 15.02V8.98l6 3.02-6 3.02z"
                            fill="currentColor"
                        />
                    </svg>
                </IconLink>

                <IconLink
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 2a5.5 5.5 0 0 0 5.5 5.5v2.023a7.524 7.524 0 0 1-4-1.197V15a5.5 5.5 0 1 1-5.5-5.5c.169 0 .335.009.5.025V11a3.5 3.5 0 1 0 3.5 3.5V2h.5z"
                            fill="currentColor"
                        />
                    </svg>
                </IconLink>
            </Socials>

            <Copy>© 2025 Ramma. All rights reserved.</Copy>
        </Container>
    );
};

export default Footer;