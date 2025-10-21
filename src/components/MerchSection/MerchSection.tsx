import React from "react";
import { Section, Title, MerchGrid, MerchItem, ItemImage, ItemInfo, ItemName, ItemPrice, BuyButton } from "./styles";

const merchItems = [
    {
        id: 1,
        name: "Ramma Hoodie",
        price: "$60",
        image: "/src/assets/images/hoodie.jpg",
    },
    {
        id: 2,
        name: "Ramma T-shirt",
        price: "$35",
        image: "/src/assets/images/tshirt.jpg",
    },
    {
        id: 3,
        name: "Ramma Cap",
        price: "$25",
        image: "/src/assets/images/cap.jpg",
    },
];

const MerchSection: React.FC = () => {
    return (
        <Section id="merch">
            <Title>Official Merch</Title>
            <MerchGrid>
                {merchItems.map((item) => (
                    <MerchItem key={item.id}>
                        <ItemImage src={item.image} alt={item.name} />
                        <ItemInfo>
                            <ItemName>{item.name}</ItemName>
                            <ItemPrice>{item.price}</ItemPrice>
                            <BuyButton>Buy Now</BuyButton>
                        </ItemInfo>
                    </MerchItem>
                ))}
            </MerchGrid>
        </Section>
    );
};

export default MerchSection;