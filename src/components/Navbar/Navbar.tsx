import * as S from "./styles";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detectar sección activa
            const sections = ["music", "tour", "merch", "newsletter"];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let foundSection = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        foundSection = section;
                        break;
                    }
                }
            }

            setActiveSection(foundSection);

            // Si está en el top, no hay sección activa
            if (window.scrollY < 100) {
                setActiveSection("");
            }
        };

        handleScroll(); // Ejecutar inmediatamente
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const getSectionLabel = (section: string) => {
        const labels: Record<string, string> = {
            music: "Música",
            tour: "Tour",
            merch: "Merch",
            newsletter: "Newsletter"
        };
        return labels[section] || "";
    };

    return (
        <S.Navbar $scrolled={isScrolled}>
            <S.Logo>RAMMA</S.Logo>

            {activeSection && (
                <S.MobileSectionIndicator>
                    {getSectionLabel(activeSection)}
                </S.MobileSectionIndicator>
            )}

            <S.NavLinks $open={menuOpen}>
                <a href="#music" className={activeSection === "music" ? "active" : ""}>
                    Música
                </a>
                <a href="#tour" className={activeSection === "tour" ? "active" : ""}>
                    Tour
                </a>
                <a href="#merch" className={activeSection === "merch" ? "active" : ""}>
                    Merch
                </a>
                <a href="#newsletter" className={activeSection === "newsletter" ? "active" : ""}>
                    Newsletter
                </a>
            </S.NavLinks>

            <S.MenuButton onClick={() => setMenuOpen(!menuOpen)} $open={menuOpen}>
                <span />
                <span />
                <span />
            </S.MenuButton>
        </S.Navbar>
    );
};

export default Navbar;