import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'; 

const Home = () => {
    return (
        <div className="home">
            <div className = "home-img-luana-arthur">
                <img src = "/images/imagem-luana-arthur-diadosnamorados.png" alt="Foto de nós dois" />
            </div>
            <h1>Bem vinda ao nosso site!!</h1>
            <h2>Esse site foi feito para você, Luana, com muito amor e carinho!</h2>
            <p>Responda o quiz e ganhe um brinde secreto!</p>
            <Link to="/quiz">
                <button>Quiz</button>      
            </Link>
            <Link to="/galeria" className="botaoGaleria">
                Ir para nossa galeria
            </Link>
            {/* <Link to="/galeria">
                <div className = "botaoGaleria">
                <button>Nossa galeria</button>
                </div>
            </Link> */}
        </div>
    );
};

export default Home;