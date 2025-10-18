export interface Album {
    title: string;
    year: number;
    cover: string;
    spotify: string;
    youtube: string;
    apple: string;
}

export const albums: Album[] = [
    {
        title: "Incrédulo",
        year: 2022,
        cover: "/images/albums/incredulo.jpg",
        spotify: "https://open.spotify.com/album/xyz",
        youtube: "https://www.youtube.com/watch?v=xyz",
        apple: "https://music.apple.com/album/xyz",
    },
    {
        title: "Intrépido",
        year: 2023,
        cover: "/images/albums/intrepido.jpg",
        spotify: "https://open.spotify.com/album/xyz",
        youtube: "https://www.youtube.com/watch?v=xyz",
        apple: "https://music.apple.com/album/xyz",
    },
    {
        title: "Inmortal",
        year: 2025,
        cover: "/images/albums/inmortal.jpg",
        spotify: "https://open.spotify.com/album/xyz",
        youtube: "https://www.youtube.com/watch?v=xyz",
        apple: "https://music.apple.com/album/xyz",
    },
];