import { tourDates } from "../../data/tourDates";
import * as S from "./styles";

const isPastDate = (dateString: string): boolean => {
    const showDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return showDate < today;
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('es-ES', { month: 'short' }).toUpperCase();
    return { day, month };
};

const SoldOutIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 5.5l-5 5L4.5 7l1-1 1.5 1.5 4-4 1 1z" />
    </svg>
);

const TourSection = () => {
    return (
        <S.Section id="tour">
            <S.Container>
                <S.Header>
                    <S.Title>INMORTAL</S.Title>
                    <S.Subtitle>WORLD TOUR 2025</S.Subtitle>
                </S.Header>

                <S.TourList>
                    {tourDates.map((show) => {
                        const isPast = isPastDate(show.date);
                        const isSoldOut = show.status === 'soldOut';
                        const { day, month } = formatDate(show.date);

                        return (
                            <S.ShowRow
                                key={show.id}
                                $isPast={isPast}
                                $isSoldOut={isSoldOut}
                            >
                                <S.DateBox $isSoldOut={isSoldOut}>
                                    <S.Day $isSoldOut={isSoldOut}>{day}</S.Day>
                                    <S.Month $isSoldOut={isSoldOut}>{month}</S.Month>
                                </S.DateBox>

                                <S.ShowInfo>
                                    <S.City $isSoldOut={isSoldOut}>{show.city}</S.City>
                                    <S.Venue>{show.venue}</S.Venue>
                                </S.ShowInfo>

                                <S.StatusContainer>
                                    {isPast ? (
                                        <S.StatusBadge $type={isSoldOut ? "soldout" : "past"}>
                                            {isSoldOut ? (
                                                <>
                                                    <S.SoldOutIconWrapper>
                                                        <SoldOutIcon />
                                                    </S.SoldOutIconWrapper>
                                                    SOLD OUT
                                                </>
                                            ) : "FINALIZADO"}
                                        </S.StatusBadge>
                                    ) : isSoldOut ? (
                                        <S.StatusBadge $type="soldout">
                                            <S.SoldOutIconWrapper>
                                                <SoldOutIcon />
                                            </S.SoldOutIconWrapper>
                                            AGOTADO
                                        </S.StatusBadge>
                                    ) : (
                                        <S.TicketButton
                                            href={show.tickets}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            TICKETS
                                        </S.TicketButton>
                                    )}
                                </S.StatusContainer>

                                <S.RowLine $isPast={isPast} />
                            </S.ShowRow>
                        );
                    })}
                </S.TourList>

                <S.MoreShows>
                    <S.MoreShowsText>MÁS FECHAS PRÓXIMAMENTE</S.MoreShowsText>
                    <S.MoreShowsDots>
                        <span />
                        <span />
                        <span />
                    </S.MoreShowsDots>
                </S.MoreShows>
            </S.Container>
        </S.Section>
    );
};

export default TourSection;