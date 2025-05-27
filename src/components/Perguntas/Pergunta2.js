import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Perguntas.css';

const Pergunta2 = () => {
    const [resposta, setResposta] = useState(null);
    
    const verificarResposta = (resposta) => {
        if (resposta === "C"){
        setResposta(true);
        }
        else {
        setResposta(false);
        }
    };

return (
    <div className="pergunta">
      <div className="pergunta-img">
        <img src="/images/chicoanalua.png" alt="IMG da pergunta 2" />
      </div>
      <h1>Questão 2:</h1>
      <h2>Qual o nome dos nossos filhos de pelúcia? 🧸</h2>
      <div>
        <button onClick={() => verificarResposta("A")}>A. Chiquinho e Chiquinha</button>
        <button onClick={() => verificarResposta("B")}>B. Pulga e Piolho</button>
        <button onClick={() => verificarResposta("C")}>C. Chico e Analua</button>
        <button onClick={() => verificarResposta("D")}>D. Francisco e Cecília</button>
        <button onClick={() => verificarResposta("E")}>E. Armandinho e Analua</button>
      </div>

      {resposta === true && (
        <div>
          <p style={{color: 'green' }}>Resposta certa! Parabéns!</p>
          <Link to="/pergunta3" className="perguntaProxima">
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

export default Pergunta2;
      