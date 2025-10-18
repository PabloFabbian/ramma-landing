import * as S from "./styles";

const Hero = () => {
    return (
        <S.Container>
            <S.VideoBackground autoPlay loop muted>
                <source src="/videos/ramma-clip.mp4" type="video/mp4" />
            </S.VideoBackground>
            <S.Content>
                <h1>RAMMA</h1>
                <p>INMORTAL WORLD TOUR</p>
                <S.Button>Escuchá el nuevo álbum</S.Button>
            </S.Content>
        </S.Container>
    );
};

export default Hero;