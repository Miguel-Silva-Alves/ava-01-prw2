import './product.css';

const Product = ({
  productName,
  price,
  condition, // "new" | "used"
  sectionName,
  sectionImage,
  brandName,
  brandImage,
  userImage
}) => {
  return (
    <div className="product-card">

      {/* HEADER */}
      <div className="product-header">
        <div className="product-section">
          <img src={sectionImage} alt={sectionName} />
          <span>{sectionName}</span>
        </div>

        <div className="product-brand">
          <img src={brandImage} alt={brandName} />
          <span>{brandName}</span>
        </div>
      </div>

      {/* BODY */}
      <div className="product-body">
        <h4>{productName}</h4>
        <p className="price">R$ {price}</p>

        <span className={`badge ${condition}`}>
          {condition === "new" ? "New" : "Used"}
        </span>
      </div>

      {/* FOOTER */}
      <div className="product-footer">
        <img src={userImage} alt="user" />
      </div>

    </div>
  );
};

export default Product;