export interface PaymentMethod {
    method: string;
    discount?: string;
    finalPrice?: string;
    installments?: string;
}

export interface MerchItemData {
    id: number;
    name: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    image: string;
    stock: 'low' | 'available' | 'out' | string;
    paymentMethods: PaymentMethod[];
}

export const merchItems: MerchItemData[] = [
    {
        id: 1,
        name: "INMORTAL Zip Hoodie Black Logo",
        price: "$35.555,00",
        originalPrice: "$37.426,00",
        discount: "5%",
        image: "/src/assets/images/Merch/white-hoodie.webp",
        stock: "low",
        paymentMethods: [
            { method: "Transferencia/depósito", discount: "5% OFF", finalPrice: "$33.777,25" },
            { method: "Tarjetas", installments: "1 pago sin interés" }
        ]
    },
    {
        id: 2,
        name: "INMORTAL Red Logo Tee",
        price: "$35.555,00",
        originalPrice: "$37.426,00",
        discount: "5%",
        image: "/src/assets/images/Merch/red-logo-tee.webp",
        stock: "available",
        paymentMethods: [
            { method: "Transferencia/depósito", discount: "5% OFF", finalPrice: "$33.777,25" },
            { method: "Tarjetas", installments: "1 pago sin interés" }
        ]
    },
    {
        id: 3,
        name: "INMORTAL Zip Hoodie White Logo",
        price: "$60.000,00",
        image: "/src/assets/images/Merch/black-hoodie.webp",
        stock: "available",
        paymentMethods: [
            { method: "Transferencia/depósito", discount: "5% OFF", finalPrice: "$57.000,00" },
            { method: "Tarjetas", installments: "3 cuotas sin interés" }
        ]
    },
    {
        id: 4,
        name: "INMORTAL Black Logo Tee",
        price: "$35.555,00",
        originalPrice: "$37.426,00",
        discount: "5%",
        image: "/src/assets/images/Merch/black-logo-tee.webp",
        stock: "available",
        paymentMethods: [
            { method: "Transferencia/depósito", discount: "5% OFF", finalPrice: "$33.777,25" },
            { method: "Tarjetas", installments: "1 pago sin interés" }
        ]
    }
];