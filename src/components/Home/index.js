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
            <h2>Esse site foi feito para você, com muito amor e carinho!</h2>
            <p>Teste os seus conhecimentos sobre o nosso namoro 👇!</p>
            <Link to="/quiz" className="botaoQuiz">
                Quiz 🧠    
            </Link>
            <p>Veja a nossa galeria de fotos 👇!</p>
            <Link to="/galeria" className="botaoGaleria">
                Galeria 🧑🏻‍❤️‍👩🏻
            </Link>
            <p>Ou ouça a nossa playlist no Spotify 👇!</p>
            <a
                href="https://open.spotify.com/playlist/57n9prum1XFL0BGUtfrElD?si=0da8721f1532417e&pt=cac3a0a94707724ee2c531f6a74a0b38"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="botaoPlaylist">
                    {/* <img src="/images/spotify-icon.png" alt="Spotify Icon" /> */}
                    Nossa playlist ❤️
                </button>
            </a>
            {/* <Link to="/galeria">
                <div className = "botaoGaleria">
                <button>Nossa galeria</button>
                </div>
            </Link> */}
            {/* <p>Acesse um textinho especial para você!</p>
            <Link to="/textinho" className="botaoTextinho">
                Textinho
            </Link> */}
        </div>
    );
};

export default Home;