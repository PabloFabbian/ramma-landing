import React from "react";
import { Section, Title, MerchGrid, MerchItem, ItemImage, ItemInfo, ItemName, ItemPrice, OriginalPrice, DiscountBadge, PaymentInfo, BuyButton, StockIndicator } from "./styles";
import { merchItems } from "../../data/merchItems";

const MerchSection: React.FC = () => {
    return (
        <Section id="merch">
            <Title>OFFICIAL MERCH</Title>
            <MerchGrid>
                {merchItems.map((item) => (
                    <MerchItem key={item.id}>
                        {item.discount && <DiscountBadge>{item.discount} OFF</DiscountBadge>}
                        {item.stock === "low" && <StockIndicator>Últimas unidades</StockIndicator>}

                        <ItemImage src={item.image} alt={item.name} />

                        <ItemInfo>
                            <ItemName>{item.name}</ItemName>

                            <ItemPrice>
                                <span>{item.price}</span>
                                {item.originalPrice && <OriginalPrice>{item.originalPrice}</OriginalPrice>}
                            </ItemPrice>

                            <PaymentInfo>
                                {item.paymentMethods.map((payment: { method: string; discount?: string; finalPrice?: string; installments?: string }, index: number) => (
                                    <div key={index}>
                                        <strong>{payment.method}:</strong>
                                        {payment.discount && ` ${payment.discount}`}
                                        {payment.finalPrice && ` • ${payment.finalPrice}`}
                                        {payment.installments && ` • ${payment.installments}`}
                                    </div>
                                ))}
                            </PaymentInfo>

                            <BuyButton>
                                COMPRAR
                            </BuyButton>
                        </ItemInfo>
                    </MerchItem>
                ))}
            </MerchGrid>
        </Section>
    );
};

export default MerchSection;