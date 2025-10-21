import type { Album } from "../../data/albums";
import * as S from "./styles";

interface TrilogyDisplayProps {
    albums: Album[];
    activeIndex: number;
    onChangeAlbum: (index: number) => void;
}

const SpotifySVGIcon = () => (
    <svg fill="currentColor" viewBox="3 4 26 26" xmlns="http://www.w3.org/2000/svg">
        <path d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 22.628906 9.371094 28 16 28 C 22.628906 28 28 22.628906 28 16 C 28 9.371094 22.628906 4 16 4 Z M 16 6 C 21.554688 6 26 10.445313 26 16 C 26 21.554688 21.554688 26 16 26 C 10.445313 26 6 21.554688 6 16 C 6 10.445313 10.445313 6 16 6 Z M 14.40625 10.75 C 12.460938 10.75 10.765625 10.929688 9.15625 11.4375 C 8.730469 11.523438 8.375 11.84375 8.375 12.4375 C 8.375 13.03125 8.8125 13.554688 9.40625 13.46875 C 9.660156 13.46875 9.832031 13.375 10 13.375 C 11.355469 13.035156 12.882813 12.875 14.40625 12.875 C 17.367188 12.875 20.40625 13.535156 22.4375 14.71875 C 22.691406 14.804688 22.777344 14.90625 23.03125 14.90625 C 23.625 14.90625 24.039063 14.46875 24.125 13.875 C 24.125 13.367188 23.871094 13.042969 23.53125 12.875 C 20.992188 11.4375 17.621094 10.75 14.40625 10.75 Z M 14.125 14.46875 C 12.347656 14.46875 11.082031 14.722656 9.8125 15.0625 C 9.390625 15.230469 9.15625 15.492188 9.15625 16 C 9.15625 16.421875 9.492188 16.84375 10 16.84375 C 10.171875 16.84375 10.246094 16.835938 10.5 16.75 C 11.429688 16.496094 12.707031 16.34375 14.0625 16.34375 C 16.855469 16.34375 19.285156 17.023438 21.0625 18.125 C 21.230469 18.210938 21.402344 18.28125 21.65625 18.28125 C 22.164063 18.28125 22.5 17.851563 22.5 17.34375 C 22.5 17.003906 22.339844 16.667969 22 16.5 C 19.800781 15.144531 17.003906 14.46875 14.125 14.46875 Z M 14.40625 18.125 C 12.96875 18.125 11.605469 18.285156 10.25 18.625 C 9.910156 18.710938 9.65625 18.953125 9.65625 19.375 C 9.65625 19.714844 9.921875 20.0625 10.34375 20.0625 C 10.429688 20.0625 10.675781 19.96875 10.84375 19.96875 C 11.945313 19.714844 13.128906 19.5625 14.3125 19.5625 C 16.425781 19.5625 18.359375 20.070313 19.96875 21 C 20.140625 21.085938 20.332031 21.15625 20.5 21.15625 C 20.839844 21.15625 21.164063 20.902344 21.25 20.5625 C 21.25 20.136719 21.066406 19.980469 20.8125 19.8125 C 18.949219 18.710938 16.773438 18.125 14.40625 18.125 Z" />
    </svg>
);

const YoutubeSVGIcon = () => (
    <svg fill="currentColor" viewBox="0 -4 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path d="M30.722,20.579 C30.137,21.894 28.628,23.085 27.211,23.348 C27.066,23.375 23.603,24.000 16.010,24.000 L15.990,24.000 C8.398,24.000 4.932,23.375 4.788,23.349 C3.371,23.085 1.861,21.894 1.275,20.578 C1.223,20.461 0.001,17.647 0.001,12.000 C0.001,6.353 1.223,3.538 1.275,3.421 C1.861,2.105 3.371,0.915 4.788,0.652 C4.932,0.625 8.398,-0.000 15.990,-0.000 C23.603,-0.000 27.066,0.625 27.210,0.651 C28.628,0.915 30.137,2.105 30.723,3.420 C30.775,3.538 32.000,6.353 32.000,12.000 C32.000,17.647 30.775,20.461 30.722,20.579 ZM28.893,4.230 C28.581,3.529 27.603,2.759 26.845,2.618 C26.813,2.612 23.386,2.000 16.010,2.000 C8.615,2.000 5.185,2.612 5.152,2.618 C4.394,2.759 3.417,3.529 3.104,4.234 C3.094,4.255 2.002,6.829 2.002,12.000 C2.002,17.170 3.094,19.744 3.106,19.770 C3.417,20.471 4.394,21.241 5.153,21.382 C5.185,21.388 8.615,22.000 15.990,22.000 L16.010,22.000 C23.386,22.000 26.813,21.388 26.846,21.382 C27.604,21.241 28.581,20.471 28.894,19.766 C28.904,19.744 29.998,17.170 29.998,12.000 C29.998,6.830 28.904,4.255 28.893,4.230 ZM13.541,17.846 C13.379,17.949 13.193,18.000 13.008,18.000 C12.842,18.000 12.676,17.959 12.525,17.875 C12.206,17.699 12.008,17.364 12.008,17.000 L12.008,7.000 C12.008,6.637 12.204,6.303 12.521,6.127 C12.838,5.950 13.227,5.958 13.534,6.149 L21.553,11.105 C21.846,11.286 22.026,11.606 22.027,11.951 C22.028,12.296 21.852,12.618 21.560,12.801 L13.541,17.846 ZM14.009,8.794 L14.009,15.189 L19.137,11.963 L14.009,8.794 Z" />
    </svg>
);

const AppleMusicSVGIcon = () => (
    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
        <path stroke="currentColor" strokeWidth="12" d="m68 60 80-14M68 60v91m0-91V40.722a8 8 0 0 1 6.621-7.88l64-11.2c4.895-.857 9.379 2.91 9.379 7.88V46m0 0v89m-98.477.234-8.48 1.483A15.761 15.761 0 0 0 28 152.242c0 9.791 8.833 17.212 18.477 15.524l8.48-1.483A15.761 15.761 0 0 0 68 150.758c0-9.791-8.833-17.212-18.477-15.524Zm80-16-8.479 1.483A15.761 15.761 0 0 0 108 136.242c0 9.791 8.833 17.212 18.477 15.524l8.479-1.483A15.761 15.761 0 0 0 148 134.758c0-9.791-8.833-17.212-18.477-15.524Z" />
    </svg>
);


const TrilogyDisplay = ({ albums, activeIndex, onChangeAlbum }: TrilogyDisplayProps) => {
    return (
        <S.TrilogySection>

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
                            <SpotifySVGIcon />
                            Spotify
                        </S.PlatformButton>
                        {albums[activeIndex].youtube && (
                            <S.PlatformButton href={albums[activeIndex].youtube} target="_blank" rel="noopener noreferrer">
                                <YoutubeSVGIcon />
                                YouTube
                            </S.PlatformButton>
                        )}
                        {albums[activeIndex].apple && (
                            <S.PlatformButton href={albums[activeIndex].apple} target="_blank" rel="noopener noreferrer">
                                <AppleMusicSVGIcon />
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