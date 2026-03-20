import Product from '../product/product';
import './area.css';

const Area = ({ name, products = [], corPrimaria, corSecundaria }) => {
  return (
    products.length > 0 && (
      <section
        className="area"
        style={{ backgroundColor: corSecundaria }}
      >
        <h3 style={{ borderColor: corPrimaria }}>
          {name}
        </h3>

        <div className="products">
          {products.map((product, index) => (
            <Product
              key={index}
              productName={product.productName}
              price={product.price}
              condition={product.condition}
              sectionName={product.sectionName}
              sectionImage={product.sectionImage}
              brandName={product.brandName}
              brandImage={product.brandImage}
              userImage={product.userImage}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Area;