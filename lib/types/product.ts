import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    name: string;
    price: string;
    priceSale: string;
    images: StaticImageData[];
    description: string;
    category: string;
    brand: string;
    variants?: Variant[]
    };
export type Variant = {
    id: number;
    box_size: string;
    sizes: Size[];
    };

export type Size = {
    id: number;
    name: string;
    price: string;
    priceSale: string;
    quantity: number;
}
