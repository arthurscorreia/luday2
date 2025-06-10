import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Perguntas.css';

const Pergunta5 = () => {
    const [resposta, setResposta] = useState(null);
    // const [mostrarDica, setDica] = useState(false);

    const verificarResposta = (resposta) => {
        if (resposta === "C") {
        setResposta(true);
        }
        else {
        setResposta(false);
        }
    };

return (
    <div className="pergunta">
      <h1>Questão 6:</h1>
      <h2>E o que vamos comer hoje? 🫠</h2> 
      {/* se n me engano foi no dia dos pais - 13 de 2022 */}
        {/* <button className="verDica" onClick={() => setDica(true)}>Ver dica</button>
        {mostrarDica && <p className="dica">Dica: Foi na despedida de Mari W em 2022 🤗</p>} */}
      
      <div>
        <button onClick={() => verificarResposta("A")}>Soho</button>
        <button onClick={() => verificarResposta("B")}>Chez Bernard</button>
        <button onClick={() => verificarResposta("C")}>Não vou te contar!!!</button>
        <button onClick={() => verificarResposta("D")}>Lotti</button>
        <button onClick={() => verificarResposta("E")}>Loro</button>
        </div>

      {resposta === true && (
        <div>
          <p style={{color: 'green' }}>Resposta certa! Parabéns!</p>
           <Link to="/pergunta7" className="perguntaProxima">
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

export default Pergunta5;
      