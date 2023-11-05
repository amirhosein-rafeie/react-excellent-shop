// import { UseQueryResult, useQuery } from "@tanstack/react-query";
// import { getAllPosts, getPost } from "../Axios/apis";
// import { AllPostsProps, PostProps } from "../../types/product";

// export const useGetAllPosts = (): UseQueryResult<AllPostsProps, Error> => {
//   return useQuery({ queryKey: ["posts"], queryFn: getAllPosts });
// };

// export const useGetPostById = ({
//   id,
// }: {
//   id: number | string | undefined;
// }): UseQueryResult<PostProps, Error> => {
//   return useQuery({
//     queryKey: ["post", id],
//     queryFn: getPost,
//   });
// };
