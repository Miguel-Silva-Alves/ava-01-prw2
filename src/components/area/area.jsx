import { useRef } from 'react';
import Product from '../product/product';
import './area.css';

const Area = ({ name, products = [], corPrimaria, corSecundaria }) => {

  const scrollRef = useRef(null)

  const getScrollAmount = () => {
    const container = scrollRef.current
    if (!container) return 0

    const firstCard = container.querySelector('.product-card')
    if (!firstCard) return 0

    const cardWidth = firstCard.offsetWidth
    const gap = 16 // mesmo gap do CSS

    return (cardWidth + gap) * 4 // Limita a quatro cards por seção
  }

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth'
    })
  }

  return (
    products.length > 0 && (
      <section
        className="area"
        style={{ backgroundColor: corSecundaria }}
      >
        <h3 style={{ borderColor: corPrimaria }}>
          {name}
        </h3>

        <div className="area-container">

          <button className="arrow left" onClick={scrollLeft}>
            ‹
          </button>

          <div 
            className="products" 
            ref={scrollRef}
            style={{ justifyContent: products.length < 4 ? 'flex-start' : 'flex-start' }}
          >
            {products.map((product, index) => (
              <Product
                key={index}
                productName={product.productName}
                price={product.price}
                condition={product.condition}
                brandName={product.brandName}
                brandImage={product.brandImage}
                productImage={product.productImage}
              />
            ))}
          </div>

          <button className="arrow right" onClick={scrollRight}>
            ›
          </button>

        </div>
      </section>
    )
  );
};

export default Area;