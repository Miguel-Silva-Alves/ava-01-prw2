import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2 className="footer-title">Mas Developer</h2>

        <p className="footer-subtitle">
          Desenvolvedor desde 2018
        </p>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/miguel-alves-746690225/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="https://github.com/Miguel-Silva-Alves" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.instagram.com/miguelsilva.fiel?igsh=MWxtZTFlOGgxanYyYw==" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Miguel Alves — Todos os direitos reservados
        </span>

      </div>
    </footer>
  )
}

export default Footer