import { useQuery } from "react-query";
import { NewsResponse } from "@/lib/types/response";

export const useNews = (page?: number, per_page?: number) => {
    let query = `posts?page=${page || 1}&per_page=${per_page || 12}`;
    
    const { data } = useQuery<NewsResponse>(
        query,
        {
        keepPreviousData: true,
        enabled: true,
        }
    );
    
    return { data };
    }