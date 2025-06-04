import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Yape Wallet</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/items">Funcionalidades</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  )
}

export default Header
