import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Galeria.css';

const Galeria = () => {
  const imagensIniciais = [
    "images/FotosLu/Foto1.jpg",
    "images/FotosLu/Foto2.jpg",
    "images/FotosLu/Foto3.jpg",
    "images/FotosLu/Foto4.jpg",
    "images/FotosLu/Foto5.jpg",
    "images/FotosLu/Foto6.jpg",
    "images/FotosLu/Foto7.jpg",
    "images/FotosLu/Foto8.jpg",
    "images/FotosLu/Foto9.jpg",
    "images/FotosLu/Foto10.jpg",
  ];

  const [imagens, setImagens] = useState(imagensIniciais);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagens((prevImagens) => [...prevImagens, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="galeria">
      <h1>Galeria</h1>
      <h2>Fotos selecionadas por você na nossa galeria!!</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="galeriaSwiper"
      >
      {imagens.map((src, index) => (
        <SwiperSlide key={index}>
        <div className="polaroid">
        <img src={src} alt={`Foto ${index + 1}`} />
      </div>
    </SwiperSlide>
    ))}

      </Swiper>

      <div className="uploadContainer">
        <label className="uploadLabel">
          Adicionar imagem a galeria:
          <input type="file" accept="image/*" onChange={handleUpload} />
        </label>
      </div>

      <Link to="/" className="botaoVoltar">
        Voltar para a tela inicial
      </Link>
    </div>
  );
};

export default Galeria;
