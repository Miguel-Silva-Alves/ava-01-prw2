import { useState } from 'react'
import './App.css'
import Area from './components/area/area'
import Banner from './components/banner/banner'
import HorizontalSections from './components/section/horizontalSections'

function App() {

  // 🔥 agora é products
  const [products, setProducts] = useState([
    {
      productName: "MacBook Pro",
      price: 7500,
      condition: "used",
      sectionName: "Computadores",
      sectionImage: "https://i.pravatar.cc/50?img=1",
      brandName: "Apple",
      brandImage: "https://logo.clearbit.com/apple.com",
      userImage: "https://i.pravatar.cc/50?img=10"
    },
    {
      productName: "Teclado Mecânico",
      price: 350,
      condition: "new",
      sectionName: "Acessórios",
      sectionImage: "https://i.pravatar.cc/50?img=2",
      brandName: "Logitech",
      brandImage: "https://logo.clearbit.com/logitech.com",
      userImage: "https://i.pravatar.cc/50?img=11"
    }
  ])

  const [sections, setSections] = useState([
    { name: 'Computadores', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Acessórios', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Impressoras', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Games', image: 'https://i.pravatar.cc/100?img=4' },
    { name: 'Gadgets', image: 'https://i.pravatar.cc/100?img=5' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")

  // 🚀 adicionar nova section
  const handleAddSection = () => {
    if (!newName || !newImage) return

    const newSection = {
      name: newName,
      image: newImage
    }

    setSections([...sections, newSection])
    setShowModal(false)
    setNewName("")
    setNewImage("")
  }

  return (
    <>
      <div className="container">
        <Banner />

        <HorizontalSections 
          sections={sections}
          onAdd={() => setShowModal(true)}
        />

        {/* 🔥 AREAS BASEADAS NAS SECTIONS */}
        {sections.map((section) => (
          <Area
            key={section.name}
            name={section.name}
            corPrimaria="#6278F7"
            corSecundaria="#F5F7FF"
            products={products.filter(
              product => product.sectionName === section.name
            )}
          />
        ))}
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Adicionar seção</h3>

            <input
              type="text"
              placeholder="Nome"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <input
              type="text"
              placeholder="URL da imagem"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>
                Cancelar
              </button>

              <button onClick={handleAddSection}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App