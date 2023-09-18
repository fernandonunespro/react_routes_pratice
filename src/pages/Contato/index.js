import { Link } from 'react-router-dom'

function Contato(){
  return(
    <div>
      <h1>Pagina contato</h1><br></br><br></br>
      <span>Contato da Empresa: (77) 9999-9999</span><br></br>
      <Link to="/">Pagina Home</Link><br></br>
      <Link to="/sobre">Sobre</Link><br></br>
    </div>
  )
}

export default Contato;