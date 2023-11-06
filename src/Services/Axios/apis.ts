import { QueryKey } from "@tanstack/react-query";
import axiosInstance from ".";
import { ProductProps } from "../../types/product";

export const getProduct = ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<ProductProps> => {
  const id = queryKey?.[1];
  return axiosInstance.get(`/products/${id}`).then((res) => res.data);
};

export const getAllProducts = (): Promise<ProductProps[]> =>
  axiosInstance.get("/products").then((res) => res.data);
