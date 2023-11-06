import { useParams } from "react-router-dom";
import { useGetProductById } from "../../Services/Hooks/product";

const Product = () => {
  const { id } = useParams();
  const { data } = useGetProductById(id);

  console.log(data);

  return <div>{data?.title}</div>;
};

export default Product;
