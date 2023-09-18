import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div>
      <h1>Sobre a Empresa</h1><br></br><br></br>
      <Link to="/">Pagina Home</Link><br></br>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Sobre;
