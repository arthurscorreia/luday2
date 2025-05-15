import React from 'react';
import { Link } from 'react-router-dom'
import './Pre_Quiz.css';

const Quiz = () => {
    return (
        <div className="quiz">
            <div className="quiz-img">
            <img src="/images/gif-diadosnamorados.gif" alt="Gif do dia dos namorados" />
        </div>
            <h1>Quiz do dia dos namorados</h1>
            <h2>Você está preparada para começar o nosso quiz?</h2>
            <p>Teste seu conhecimento sobre o nosso namoro!!</p>
            <Link to="/pergunta1">
                <button>Começar o quiz</button>      
            </Link>
            <Link to="/" className="quizVoltar">
                Voltar
            </Link>
        </div>
    );
};

export default Quiz;