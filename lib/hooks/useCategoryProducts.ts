import { useQuery } from "react-query";
import { ProductResponse } from "@/lib/types/response";

export const useCategoryProducts = (categoryId: number, page?: number, per_page?: number, sort?: string, sort_type?: string, min_price?: number, max_price?: number) => {
  let query = `products?category_id=${categoryId}&page=${page || 1}&per_page=${per_page || 12}&sort=${sort || 'created_at'}&sort_type=${sort_type || 'desc'}`;

  if (min_price) {
      query += `&min_price=${min_price}`;
  }

  if (max_price) {
      query += `&max_price=${max_price}`;
  }

  const { data, isLoading } = useQuery<ProductResponse>(
      query,
      {
          keepPreviousData: true,
          enabled: !!categoryId,
      }
  );

  return { data, isLoading };
};