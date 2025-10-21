import increduloImg from "../assets/images/Discos/incredulo.webp";
import inmortalImg from "../assets/images/Discos/inmortal.webp";
import intrepidoImg from "../assets/images/Discos/intrepido.webp";
import etlmImg from "../assets/images/Eps/ETLM.webp";
import sesImg from "../assets/images/Eps/SES.webp";
import tripImg from "../assets/images/Eps/TRIP.webp";
import trip2Img from "../assets/images/Eps/TRIP2.webp";

export interface Album {
    title: string;
    year: string;
    cover: string;
    description?: string;
    spotify: string;
    youtube?: string;
    apple?: string;
}

export const trilogy: Album[] = [
    {
        title: "INCRÉDULO",
        year: "2022",
        cover: increduloImg,
        description: "El inicio de la trilogía. Trap crudo y letras introspectivas que marcan el despertar de una nueva era.",
        spotify: "https://open.spotify.com/album/incredulo",
        youtube: "https://youtube.com/playlist/incredulo",
        apple: "https://music.apple.com/album/incredulo"
    },
    {
        title: "INTRÉPIDO",
        year: "2023",
        cover: intrepidoImg,
        description: "La evolución. Ramma se atreve a experimentar con nuevos sonidos sin perder su esencia callejera.",
        spotify: "https://open.spotify.com/album/intrepido",
        youtube: "https://youtube.com/playlist/intrepido",
        apple: "https://music.apple.com/album/intrepido"
    },
    {
        title: "INMORTAL",
        year: "2024",
        cover: inmortalImg,
        description: "El cierre épico. Un álbum que consolida su lugar en la escena del trap argentino para siempre.",
        spotify: "https://open.spotify.com/album/inmortal",
        youtube: "https://youtube.com/playlist/inmortal",
        apple: "https://music.apple.com/album/inmortal"
    }
];

export const eps: Album[] = [
    {
        title: "El Trap lo Merece",
        year: "2021",
        cover: etlmImg,
        spotify: "https://open.spotify.com/album/etlm"
    },
    {
        title: "Somos el Show",
        year: "2021",
        cover: sesImg,
        spotify: "https://open.spotify.com/album/ses"
    },
    {
        title: "Trip",
        year: "2020",
        cover: tripImg,
        spotify: "https://open.spotify.com/album/trip"
    },
    {
        title: "Trip 2",
        year: "2020",
        cover: trip2Img,
        spotify: "https://open.spotify.com/album/trip2"
    }
];

export const RAMMA_SPOTIFY_PROFILE = "https://open.spotify.com/artist/RAMMA_ID";