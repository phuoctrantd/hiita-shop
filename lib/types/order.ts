import { ProductType, ProductsVariant } from "./product";

export type OrderType = {
id: number;
name: string;
email: string;
phone_number: string;
user_id: number;
address: string;
note: string;
payment_type: number;
price: number;
code: string;
created_at: string;
updated_at: string;
status: number;
product_variants:[
{   id: number;
    product: ProductType;
    product_variant: ProductsVariant;
    quantity: number;
    total_price: number;
}
]
};