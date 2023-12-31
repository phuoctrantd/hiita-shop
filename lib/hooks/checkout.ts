import { atom } from 'jotai'
import { ProductType, ProductsVariant } from '../types/product';

interface CheckoutProductType extends ProductType {
    quantity: number;
    variant: ProductsVariant;
  }
export const checkoutAtom = atom<CheckoutProductType[]>([]);
export const checkoutSourceAtom = atom<string | null>(null);