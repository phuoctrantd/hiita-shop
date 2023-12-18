import { atom } from 'jotai'
import { ProductType, ProductsVariant } from '../types/product';

interface CheckoutProductType extends ProductType {
    quantity: number;
    variant: ProductsVariant | null;
  }
export const checkoutAtom = atom<CheckoutProductType[]>([]);