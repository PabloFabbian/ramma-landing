import * as S from "./styles";
import bgVideo from "../../assets/videos/bg-video.webm";

const Hero = () => {
    return (
        <S.Container>
            <S.VideoBackground
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={bgVideo} type="video/webm" />
            </S.VideoBackground>

            <S.Content>
                <S.Title>RAMMA</S.Title>

                <S.Subtitle>
                    <S.Line />
                    INMORTAL WORLD TOUR
                    <S.Line />
                </S.Subtitle>

                <S.Button>
                    <span>Escuchá el nuevo álbum</span>
                </S.Button>
            </S.Content>

            <S.ScrollIndicator />
        </S.Container>
    );
};

export default Hero;