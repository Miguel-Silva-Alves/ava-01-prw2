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
      condition: "used",
      brandName: "HP",
      sectionName: "Computadores",
      brandImage: "https://dxc.scene7.com/is/image/dxc/hp_1050x1050?qlt=90&wid=768&ts=1749506259261&$square_desktop$&dpr=off",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuRp2kmgjvrsVDg7H6D7ZjmkTJSAA5t3zTQ&s"
    },
    {
      productName: "Teclado Mecânico",
      price: 350,
      condition: "new",
      sectionName: "Acessórios",
      brandName: "Positivo",
      brandImage: "https://oempregodossonhos.com.br/wp-content/uploads/2024/07/POSITIVOn-1.png",
      productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    }
  ])

  const [sections, setSections] = useState([
    { name: 'Computadores', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Acessórios', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Impressoras', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Games', image: 'https://i.pravatar.cc/100?img=4' },
    { name: 'Gadgets', image: 'https://i.pravatar.cc/100?img=5' },
  ])

  const brands = [
    { name: 'HP', image: 'https://dxc.scene7.com/is/image/dxc/hp_1050x1050?qlt=90&wid=768&ts=1749506259261&$square_desktop$&dpr=off' },
    { name: 'Positivo', image: 'https://oempregodossonhos.com.br/wp-content/uploads/2024/07/POSITIVOn-1.png' },
    { name: 'Dell', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMJLxQwJ2yj3S0NbQkph0pKK26NLO5dchJg&s' },
    { name: 'Asus', image: 'https://assets.cuponomia.com.br/img/stores/original/asus-637708415447543628.png' },
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

  return (
    <>
      <div className="container">
        <Banner />

        <HorizontalSections 
          sections={sections}
          onAdd={() => setShowModal(true)}
        />

        {/* AREAS BASEADAS NAS SECTIONS */}
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