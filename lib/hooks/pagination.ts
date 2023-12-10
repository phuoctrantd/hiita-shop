import React from "react";

export function usePagination() {
    const [page, setPage] = React.useState<number>(1);
   
    const handleChangePagination = (event: React.ChangeEvent<unknown>, value:number) => {
      setPage(value);
    };
   
    return {
      page,
      handleChangePagination,
    };
   }