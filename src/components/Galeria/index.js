import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Galeria.css'; 

const Galeria = () => {
    return (
    <div className="galeria">
      <h1>Galeria</h1>
      <h2>Fotos selecionadas por você na nossa galeria!!</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="galeriaSwiper"
      >
        <SwiperSlide>
          <img
            src="images/Editadas/Foto1.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto2.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto3.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto4.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto5.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto6.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto7.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto8.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto9.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/Editadas/Foto10.png"
            alt="Foto de nós dois"
          />
        </SwiperSlide>
      </Swiper>

      <Link to="/" className="botaoVoltar">
        Voltar para a tela inicial
      </Link>
    </div>
  );
};

export default Galeria;