import { useQuery } from "react-query";
import { ProductResponse } from "@/lib/types/response";

export const useCategoryProducts = (categoryId: number,page?:number,per_page?:number) => {
    const { data,isLoading  } = useQuery<ProductResponse>(
        `products?category_id=${categoryId}&page=${page || 1}&per_page=${per_page || 12}`,
        {
          keepPreviousData: true,
          enabled: !!categoryId,
        }
      );

      return { data, isLoading };
};