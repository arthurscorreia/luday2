import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Perguntas.css';

const Pergunta3 = () => {
    const [resposta, setResposta] = useState(null);
    const [mostrarDica, setDica] = useState(false);

    const verificarResposta = (resposta) => {
        if (resposta === "D"){
        setResposta(true);
        }
        else {
        setResposta(false);
        }
    };

return (
    <div className="pergunta">
      <h1>Questão 3:</h1>
      <h2>Quando foi o nosso primeiro beijo? 🧑🏻‍❤️‍💋‍👩🏻</h2> 
      {/* se n me engano foi no dia dos pais - 13 de 2022 */}
      <button className="verDica" onClick={() => setDica(true)}>Ver dica</button>
      {mostrarDica && <p className="dica">Dica: Foi na despedida de Mari W em 2022 🤗</p>}
      
      <div>
        <button onClick={() => verificarResposta("A")}>A. Em algum dia de 2022</button>
        <button onClick={() => verificarResposta("B")}>B. 14/08/2022</button>
        <button onClick={() => verificarResposta("C")}>C. 12/08/2022</button>
        <button onClick={() => verificarResposta("D")}>D. 13/08/2022</button>
        <button onClick={() => verificarResposta("E")}>E. Não sei que pergunta difícil</button>
      </div>

      {resposta === true && (
        <div>
          <p style={{color: 'green' }}>Resposta certa! Parabéns!</p>
          <Link to="/pergunta4" className="perguntaProxima">
            Próxima Pergunta
          </Link>
        </div>
      )}

      {resposta === false &&
            <p style={{color: 'red' }}>Resposta errada! Tente novamente.</p>
        }
      <Link to="/" className="perguntaVoltar">
            Voltar para a tela inicial
      </Link>
    </div>
  );
};

export default Pergunta3;
      