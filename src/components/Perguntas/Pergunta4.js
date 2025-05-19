import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Perguntas.css';

const Pergunta4 = () => {
    const [resposta, setResposta] = useState(null);
    // const [mostrarDica, setDica] = useState(false);

    const verificarResposta = (resposta) => {
        if (resposta === "E") {
        setResposta(true);
        }
        else {
        setResposta(false);
        }
    };

return (
    <div className="pergunta">
      <h1>Questão 5:</h1>
      <h2>Qual foi o primeiro filme que vimos juntos no cinema? 🎥</h2> 
      {/* se n me engano foi no dia dos pais - 13 de 2022 */}
        {/* <button className="verDica" onClick={() => setDica(true)}>Ver dica</button>
        {mostrarDica && <p className="dica">Dica: Foi na despedida de Mari W em 2022 🤗</p>} */}
      
      <div>
        <button onClick={() => verificarResposta("A")}>After</button>
        <button onClick={() => verificarResposta("B")}>Gato de botas 2</button>
        <button onClick={() => verificarResposta("C")}>Amor de redenção</button>
        <button onClick={() => verificarResposta("D")}>Não sei</button>
        <button onClick={() => verificarResposta("E")}>Ingresso para o paraíso</button>
        </div>

      {resposta === true && (
        <div>
          <p style={{color: 'green' }}>Resposta certa! Parabéns!</p>
           <Link to="/pergunta5" className="perguntaProxima">
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

export default Pergunta4;
      