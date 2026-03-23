import { useState } from 'react';
import './product.css';

const Product = ({
  productName,
  price,
  condition,
  brandName,
  brandImage,
  productImage
}) => {

  const fallback = "https://placehold.co/300x200?text=Sem+Imagem"

  const [imgSrc, setImgSrc] = useState(productImage || fallback)
  return (
    <div className="product-card">

      {/* HEADER - BRAND */}
      <div className="product-header">
        <img src={brandImage} alt={brandName} />
        <span>{brandName}</span>
      </div>

      {/* IMAGE */}
      <div className="product-image">
        <img
          src={imgSrc}
          alt={productName}
          onError={() => setImgSrc(fallback)}
        />
      </div>

      {/* INFO */}
      <div className="product-info">
        <h4>{productName}</h4>

        <p className="price">
          R$ {price}
        </p>

        <span className={`badge ${condition}`}>
          {condition === "Novo" ? "Novo" : "Usado"}
        </span>
      </div>

    </div>
  );
};

export default Product;