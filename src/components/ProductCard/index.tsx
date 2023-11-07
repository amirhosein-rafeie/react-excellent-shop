import { useState } from "react";
import { motion } from "framer-motion";

import { ProductProps } from "../../types/product";
import style from "./product-card-style.module.css";
import { useNavigate } from "react-router-dom";

const ColorCircle = ({
  color,
  isSelected,
  onClick,
}: {
  color: string;
  isSelected: boolean;
  onClick: (color: string) => void;
}) => {
  return (
    <motion.div
      onClick={() => onClick(color)}
      className={style.circleColorOutline}
      initial={{ border: "none" }}
      animate={{
        ...(isSelected
          ? {
              scale: 1.2,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: color,
            }
          : {}),
      }}
    >
      <div className={style.colorCircle} style={{ backgroundColor: color }} />
    </motion.div>
  );
};

const ProductCard = (props: ProductProps) => {
  const { id, title, colors, images } = props;
  const [selectedColor, setSelectedColor] = useState(colors?.[0]);
  const navigate = useNavigate();

  const changeColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <motion.div
      className={style.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={style.imageBox}>
        <motion.div
          className={style.imageBackground}
          initial={{ backgroundColor: "" }}
          animate={{ backgroundColor: selectedColor }}
        >
          <motion.div
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            className={style.imageBoxCircle}
          />
          <motion.div
            key={selectedColor}
            whileHover={{
              scale: [1, 1.2, 1],
              transition: { repeat: Infinity },
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={style.image}
            style={{
              backgroundImage: `url(${images?.[0]})`,
            }}
          />
        </motion.div>
      </div>
      <motion.div className={style.contentBox}>
        <h3 onClick={() => navigate(`/products/${id}`)}>{title}</h3>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          className={style.colorsWrapper}
        >
          {colors?.map((item, index) => (
            <ColorCircle
              key={index}
              color={item}
              isSelected={item === selectedColor}
              onClick={changeColor}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
