import { useState } from "react";
import { trilogy, eps, RAMMA_SPOTIFY_PROFILE } from "../../data/albums";
import TrilogyDisplay from "./TrilogyDisplay";
import EpsGrid from "./EpsGrid";
import SinglesCard from "./SinglesCard";
import * as S from "./styles";

const MusicSection = () => {
    const [activeAlbum, setActiveAlbum] = useState(1);

    return (
        <S.Section id="music">
            <S.Container>
                <S.Header>
                    <S.Title>DISCOGRAFÍA</S.Title>
                    <S.Subtitle>La evolución del sonido</S.Subtitle>
                </S.Header>

                <TrilogyDisplay
                    albums={trilogy}
                    activeIndex={activeAlbum}
                    onChangeAlbum={setActiveAlbum}
                />

                <EpsGrid eps={eps} />

                <SinglesCard spotifyUrl={RAMMA_SPOTIFY_PROFILE} />
            </S.Container>
        </S.Section>
    );
};

export default MusicSection;