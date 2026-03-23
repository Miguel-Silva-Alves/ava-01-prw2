import './brandSection.css'

const getRandomColor = () => {
  const colors = [
    '#FFE5E5',
    '#E5F0FF',
    '#E5FFF1',
    '#FFF5E5',
    '#F3E5FF'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const BrandSection = ({ brands = [] }) => {
  return (
    <div className="brand-carousel">
      <div className="brand-track">
        {[...brands, ...brands].map((brand, index) => (
          <div
            className="brand-card"
            key={index}
            style={{ backgroundColor: getRandomColor() }}
          >
            <img
              className="brand-logo"
              src={brand.image}
              alt={brand.name}
            />

            <span className="brand-name">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandSection