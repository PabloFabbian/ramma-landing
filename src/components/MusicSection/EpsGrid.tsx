import type { Album } from "../../data/albums";
import * as S from "./styles";

interface EpsGridProps {
    eps: Album[];
}

const EpsGrid = ({ eps }: EpsGridProps) => {
    return (
        <S.EpsSection>
            <S.SectionLabel>EP'S</S.SectionLabel>
            <S.EpsGrid>
                {eps.map((ep) => (
                    <S.EpCard key={ep.title} href={ep.spotify} target="_blank" rel="noopener noreferrer">
                        <S.EpCover src={ep.cover} alt={ep.title} />
                        <S.EpInfo>
                            <S.EpTitle>{ep.title}</S.EpTitle>
                            <S.EpYear>{ep.year}</S.EpYear>
                        </S.EpInfo>
                        <S.PlayOverlay>
                            <S.PlayIcon />
                        </S.PlayOverlay>
                    </S.EpCard>
                ))}
            </S.EpsGrid>
        </S.EpsSection>
    );
};

export default EpsGrid;