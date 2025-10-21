import type { Album } from "../../data/albums";
import * as S from "./styles";

interface TrilogyDisplayProps {
    albums: Album[];
    activeIndex: number;
    onChangeAlbum: (index: number) => void;
}

const TrilogyDisplay = ({ albums, activeIndex, onChangeAlbum }: TrilogyDisplayProps) => {
    return (
        <S.TrilogySection>
            <S.TrilogyLabel>LA TRILOGÍA</S.TrilogyLabel>

            <S.TrilogyDisplay>
                <S.AlbumStack>
                    {albums.map((album, index) => (
                        <S.StackedAlbum
                            key={album.title}
                            $active={activeIndex === index}
                            $position={index - activeIndex}
                            onClick={() => onChangeAlbum(index)}
                        >
                            <S.AlbumCover src={album.cover} alt={album.title} />
                            <S.AlbumOverlay $active={activeIndex === index}>
                                <S.AlbumTitle>{album.title}</S.AlbumTitle>
                                <S.AlbumYear>{album.year}</S.AlbumYear>
                            </S.AlbumOverlay>
                        </S.StackedAlbum>
                    ))}
                </S.AlbumStack>

                <S.AlbumDetails>
                    <S.DetailTitle>{albums[activeIndex].title}</S.DetailTitle>
                    <S.DetailYear>{albums[activeIndex].year}</S.DetailYear>

                    {albums[activeIndex].description && (
                        <S.DetailDescription>
                            {albums[activeIndex].description}
                        </S.DetailDescription>
                    )}

                    <S.PlatformLinks>
                        <S.PlatformButton href={albums[activeIndex].spotify} target="_blank" rel="noopener noreferrer">
                            <S.SpotifyIcon />
                            Spotify
                        </S.PlatformButton>
                        {albums[activeIndex].youtube && (
                            <S.PlatformButton href={albums[activeIndex].youtube} target="_blank" rel="noopener noreferrer">
                                <S.YoutubeIcon />
                                YouTube
                            </S.PlatformButton>
                        )}
                        {albums[activeIndex].apple && (
                            <S.PlatformButton href={albums[activeIndex].apple} target="_blank" rel="noopener noreferrer">
                                <S.AppleIcon />
                                Apple Music
                            </S.PlatformButton>
                        )}
                    </S.PlatformLinks>

                    <S.TrilogyNav>
                        {albums.map((_, index) => (
                            <S.NavDot
                                key={index}
                                $active={activeIndex === index}
                                onClick={() => onChangeAlbum(index)}
                            />
                        ))}
                    </S.TrilogyNav>
                </S.AlbumDetails>
            </S.TrilogyDisplay>
        </S.TrilogySection>
    );
};

export default TrilogyDisplay;