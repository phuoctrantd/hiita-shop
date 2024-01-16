import { atom } from 'jotai';
import { CategoryType } from '../types/category';

export const categoriesState = atom<CategoryType[]>([]);