import {
  UseQueryResult,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { getAllProducts, getProduct } from "../Axios/apis";
import { ProductProps } from "../../types/product";

type T = Omit<UseQueryOptions<ProductProps, Error, ProductProps>, "queryKey">;

type Y = Omit<
  UseQueryOptions<ProductProps[], Error, ProductProps[]>,
  "queryKey"
>;

export const useGetAllProducts = (
  options?: Y
): UseQueryResult<ProductProps[], Error> => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    ...options,
  });
};

export const useGetProductById = (
  id: number | string | undefined,
  options?: T
) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: getProduct,
    ...options,
  });
};
