import './horizontalSections.css'

const HorizontalSections = ({ sections = [], onAdd, onSelect, selectedSection }) => {
  return (
    <div className="sections-container">
      {sections.map((section, index) => (
        <div 
          className={`section-item ${selectedSection === section.name ? 'active' : ''}`}
          key={index}
          onClick={() => 
            onSelect(selectedSection === section.name ? null : section.name)
          }
        >
          <div className="section-circle">
            <img src={section.image} alt={section.name} />
          </div>
          <span>{section.name}</span>
        </div>
      ))}

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