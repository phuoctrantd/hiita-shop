import { StaticImageData } from "next/image";
export type ProductType = {
    id: number;
    name: string;
    price: number;
    promotional_price?: number;
    code: string;
    status: number;
    is_publish: number;
    type: number;
    category_id: number;
    country_id: number;
    variant_type_id: number;
    images: [
      {
        id?: number;
        image_url: string;
      }

    ]
    description: string;
    created_at: string | null;
    updated_at: string | null;
    discount: string | null;
    category: {
      id: number;
      name: string;
    };
    country: {
      id: number;
      name: string;
    };
    variant_type?: {
      id: number;
      name: string;
    };
    product_variants: ProductsVariant[];
    };
    export type ProductsVariant = {
      id: number;
      product_id: number;
      name: string;
      price: number;
      promotional_price: number;
      status: number;
      box_size: string;
      code: string;
      image_url: string;
      flash_sale?: {
        id: number;
        discount: number;
        price: number;
        quantity: number;
        sold_quantity: number;
    };
    };

