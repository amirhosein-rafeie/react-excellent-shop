import { useGetAllProducts } from "../../Services/Hooks/product";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const { data, isLoading, isError, error } = useGetAllProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        {data?.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
