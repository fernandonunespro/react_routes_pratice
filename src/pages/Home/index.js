import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo a Home</h1><br></br><br></br>
      <Link to="/sobre">Sobre</Link><br></br>
      <Link to="/contato">Contato</Link>

      <br></br><hr></hr><br></br>

      <Link to="/produto/12345">Acessar Produto 12345</Link>
    </div>
  );
}

export default Home;
