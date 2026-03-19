import './horizontalSections.css'

const HorizontalSections = ({ sections = [], onAdd }) => {
  return (
    <div className="sections-container">
      {sections.map((section, index) => (
        <div className="section-item" key={index}>
          <div className="section-circle">
            <img src={section.image} alt={section.name} />
          </div>
          <span>{section.name}</span>
        </div>
      ))}

      {/* Último item: adicionar */}
      <div className="section-item add-item" onClick={onAdd}>
        <div className="section-circle">
          <span className="plus">+</span>
        </div>
        <span>Adicionar</span>
      </div>
    </div>
  )
}

export default HorizontalSections