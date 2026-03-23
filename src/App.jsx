import { useState } from 'react'
import './App.css'
import Area from './components/area/area'
import Banner from './components/banner/banner'
import BrandSection from './components/brand/brandSection'
import Footer from './components/footer/footer'
import Forms from './components/forms/forms'
import HorizontalSections from './components/section/horizontalSections'

function App() {

  const [products, setProducts] = useState([
    {
      productName: "MacBook Pro",
      price: 7500,
      condition: "Usado",
      brandName: "HP",
      sectionName: "Computadores",
      brandImage: "https://dxc.scene7.com/is/image/dxc/hp_1050x1050?qlt=90&wid=768&ts=1749506259261&$square_desktop$&dpr=off",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuRp2kmgjvrsVDg7H6D7ZjmkTJSAA5t3zTQ&s"
    },
    {
      productName: "Teclado Mecânico",
      price: 350,
      condition: "Novo",
      sectionName: "Acessórios",
      brandName: "Positivo",
      brandImage: "https://oempregodossonhos.com.br/wp-content/uploads/2024/07/POSITIVOn-1.png",
      productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    }
  ])

  const [selectedSection, setSelectedSection] = useState(null)

  const [sections, setSections] = useState([
    { name: 'Computadores', image: 'https://thumbs.dreamstime.com/b/programmer-reviews-documentation-coding-pc-modern-office-software-developer-cross-referencing-paperwork-source-445409596.jpg?w=992' },
    { name: 'Acessórios', image: 'https://thumbs.dreamstime.com/b/computer-peripherals-laptop-accessories-composition-white-wooden-board-47590141.jpg?w=992' },
    { name: 'Impressoras', image: 'https://thumbs.dreamstime.com/b/printer-4724590.jpg?w=992' },
    { name: 'Games', image: 'https://thumbs.dreamstime.com/b/game-controller-25683.jpg?w=992' },
    { name: 'Gadgets', image: 'https://thumbs.dreamstime.com/b/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.jpg?w=768' },
  ])

  const brands = [
    { name: 'HP', image: 'https://dxc.scene7.com/is/image/dxc/hp_1050x1050?qlt=90&wid=768&ts=1749506259261&$square_desktop$&dpr=off' },
    { name: 'Positivo', image: 'https://oempregodossonhos.com.br/wp-content/uploads/2024/07/POSITIVOn-1.png' },
    { name: 'Dell', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMJLxQwJ2yj3S0NbQkph0pKK26NLO5dchJg&s' },
    { name: 'Asus', image: 'https://assets.cuponomia.com.br/img/stores/original/asus-637708415447543628.png' },
    { name: 'Xing-Ling', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fLx4U8Cgbhr1oKDK65fnbhqCo-LJuZckvg&s' }
  ];

  const [showModal, setShowModal] = useState(false)
  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")

  // adicionar nova section
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

  // adicionar novo produto
  const handleAddProduct = (product) => {
    setProducts([...products, product])
  }

  const filteredSections = sections.filter(
    section => !selectedSection || section.name === selectedSection
  )

  const hasProductsInSelected = selectedSection
    ? products.some(p => p.sectionName === selectedSection)
    : true


  return (
    <>
      <div className="container">
        <Banner />

        <HorizontalSections 
          sections={sections}
          onAdd={() => setShowModal(true)}
          onSelect={setSelectedSection}
          selectedSection={selectedSection}
        />

        {/* AREAS BASEADAS NAS SECTIONS */}
        {filteredSections.map((section) => (
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

        {/* mensagem quando filtrado e vazio */}
        {selectedSection && !hasProductsInSelected && (
          <div className="empty-state">
            Sem produtos nessa seção
          </div>
        )}

        <BrandSection brands={brands} />

        <div className="form-section">
          <Forms 
            onAddProduct={handleAddProduct}
            sections={sections}
            brands={brands}
            itens={sections.map(s => s.name)} // dropdown com as sections
          />
        </div>

        <Footer />
      </div>

      

      {/* MODAL */}
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