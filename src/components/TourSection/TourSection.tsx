import { Section, Title, DatesContainer, DateCard } from "./styles";
import { tourDates } from "../../data/tourDates";

const TourSection = () => {
    return (
        <Section id="tour">
            <Title>Tour Dates</Title>
            <DatesContainer>
                {tourDates.map((date) => (
                    <DateCard key={date.id}>
                        <h3>{date.city}</h3>
                        <p>{date.venue}</p>
                        <span>{date.date}</span>
                        <a href={date.tickets} target="_blank" rel="noopener noreferrer">
                            Tickets
                        </a>
                    </DateCard>
                ))}
            </DatesContainer>
        </Section>
    );
};

export default TourSection;