import * as S from "./styles";
import RammaProfilePic from "../../assets/images/profile.jpeg";

interface SinglesCardProps {
    spotifyUrl: string;
}

const SinglesCard = ({ spotifyUrl }: SinglesCardProps) => {
    return (
        <S.SinglesSection href={spotifyUrl} target="_blank" rel="noopener noreferrer">
            <S.SinglesContent>
                <S.SinglesIcon profilePicUrl={RammaProfilePic} />
                <S.SinglesText>
                    <S.SinglesTitle>Singles & Features</S.SinglesTitle>
                    <S.SinglesSubtitle>Explorá todas las colaboraciones →</S.SinglesSubtitle>
                </S.SinglesText>
            </S.SinglesContent>
            <S.SinglesGradient />
        </S.SinglesSection>
    );
};

export default SinglesCard;