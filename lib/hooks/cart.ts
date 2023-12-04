import { atomWithStorage } from 'jotai/utils'
import { ProductType, ProductsVariant } from '../types/product';

export interface CartItem extends ProductType {
  quantity: number;
  variant: ProductsVariant | null;
}

export const cartAtom = atomWithStorage<CartItem[]>('cart', []);
