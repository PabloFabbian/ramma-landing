import { albums } from "../../data/albums";
import * as S from "./styles";

const MusicSection = () => {
    return (
        <S.Section id="music">
            <S.Title>Discografía</S.Title>

            <S.AlbumsGrid>
                {albums.map((album) => (
                    <S.AlbumCard key={album.title}>
                        <S.Cover src={album.cover} alt={album.title} />

                        <S.Info>
                            <h3>{album.title}</h3>
                            <span>{album.year}</span>

                            <S.Links>
                                <a href={album.spotify} target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/spotify.svg" alt="Spotify" />
                                </a>
                                <a href={album.youtube} target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/youtube.svg" alt="YouTube" />
                                </a>
                                <a href={album.apple} target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/apple.svg" alt="Apple Music" />
                                </a>
                            </S.Links>
                        </S.Info>
                    </S.AlbumCard>
                ))}
            </S.AlbumsGrid>
        </S.Section>
    );
};

export default MusicSection;