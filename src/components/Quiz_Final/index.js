import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz_Final.css';

const QuizFinal = () => {
     return (
            <div className="quiz_final">
                <div className="quiz_final-img">
                <img src="/images/gif-parabens.gif" alt="Gif de parabéns" />
            </div>
                <h1>Parabéns!! Você concluiu o nosso quiz!!</h1>
                <h2>Você realmente conhece o nosso relacionamento!! 😍🎉</h2>
                <h3>Agora você pode acessar a página galeria!!</h3>
                {/* <p>Teste seu conhecimento sobre o nosso namoro!!</p> */}
                {/* <Link to="/pergunta1" className="botaoIniciarPergunta">
                    Começar o quiz      
                </Link> */}
                <Link to="/" className="quizVoltar">
                    Voltar
                </Link>
            </div>
        );
}

export default QuizFinal;