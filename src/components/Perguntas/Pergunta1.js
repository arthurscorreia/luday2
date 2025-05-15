import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Perguntas.css';

const Pergunta1 = () => {
    const [resposta, setResposta] = useState(null);
    
    const verificarResposta = (resposta) => {
        if (resposta === "A"){
        setResposta(true);
        }
        else {
        setResposta(false);
        }
    };

return (
    <div className="pergunta">
      <h1>Questão 1:</h1>
      <h2>Quando começamos a namorar? 🤔</h2>
      <div>
        <button onClick={() => verificarResposta("A")}>A. 09/10/2022</button>
        <button onClick={() => verificarResposta("B")}>B. 09/10/2021</button>
        <button onClick={() => verificarResposta("C")}>C. 10/09/2022</button>
        <button onClick={() => verificarResposta("D")}>D. 09/10/2023</button>
        <button onClick={() => verificarResposta("E")}>E. 19/09/2022</button>
      </div>

      {resposta === true && (
        <div>
          <p style={{color: 'green' }}>Resposta certa! Parabéns!</p>
          <Link to="/pergunta2" className="perguntaProxima">
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

export default Pergunta1;
      