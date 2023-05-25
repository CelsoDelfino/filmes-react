import './erro.css';

import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div className="error">
            <h1>404</h1>
            <h2>Página não encontrada</h2>

            <Link to='./'>Veja todos os filmes</Link>
        </div>
    )
}
export default Erro;