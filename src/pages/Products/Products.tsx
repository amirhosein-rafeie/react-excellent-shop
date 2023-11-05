import axios from "axios";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((data) => console.log("data", data.data));
  }, []);

  const addPost = () => {
    axios
      .post("http://localhost:3000/api/products", {
        price: 200000,
        discount: {
          percent: 10,
          time: "Thu Jan 03 2024 03:30:00 GMT+0330 (Iran Standard Time)",
        },
        title: "پیراهن آستین بلند مردانه باینت",
        size: ["2XL", "XL", "Medium"],
        count: 50,
        remaining_count: 50,
      })
      .then((data) => console.log(data.data));
  };

  return (
    <div>
      <button onClick={addPost}>اضافه کن</button>
    </div>
  );
};

export default Products;
