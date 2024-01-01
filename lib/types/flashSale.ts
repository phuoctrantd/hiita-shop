import { ProductType } from "./product";

export type FlashSaleType = {
    start_at: Date;
    end_at: Date;
    products:ProductType[]
}

 