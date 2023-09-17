import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import Foto2 from "../../assets/foto2.jpg";
import Foto5 from '../../assets/foto5.jpg';
import Foto6 from '../../assets/foto6.jpg';
import Seta from '../../assets/seta.png';
import Forms from "../../components/Forms/Forms.js";
import styles from "./Home.module.css"
import Infos from "../../components/Infos/Infos.js";



const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
 }, []);

  return (
    <div>

<section id='about' className={styles.fundo01} >
  <label class="padding-top-label"></label>
  <div styles="" class="container ">
    <div styles="" class="row">

      <div  class="col-md-4  text-center" >
        <div class="d-none d-sm-block " data-aos="fade-down" data-aos-duration="900">
          <img src={Seta} styles="width: 50px; margin-top: -90px;" className={styles.seta}/>
        </div>
        <div class="linhabranca text-center" data-aos="fade-up" data-aos-duration="900" className={styles.linhaBranca}>
          <div class="ajustefundo " className={styles.ajustefundo}>
            <div class="fotoaluno" styles="width: 100%;">
              <img src={Foto5}  class="img-fluid" className={styles.foto} alt="Foto da Igreja Batista Central em Ricardo de Albuquerque"/>
            </div>
            <div class="quadinfo" styles="background-color: #fff;" className={styles.quadinfo}>
              <h1 class="fontpreta">enraizada na Palavra</h1>
              <p class="fontpreta font-p-mobile">A igreja bíblica que se aprofunda na Palavra para desenvolver um estilo de vida que se enche do Espírito e se move no sobrenatural.</p>
            </div>
          </div>
        </div>
      </div>

      <div styles="" class="col-md-4 paddingfotos text-center">
        <div class="d-none d-sm-block " data-aos="fade-down" data-aos-duration="900">
          <img src={Seta} styles="width: 50px; margin-top: -90px;" class=""className={styles.seta} alt="Foto da Igreja Batista Central em Ricardo de Albuquerque" />
        </div>
        <div class="linhabranca text-center" data-aos="fade-up" data-aos-duration="900"  className={styles.linhaBranca}>
          <div class="ajustefundo " className={styles.ajustefundo}>
            <div class="fotoaluno" styles="width: 100%;">
              <img src={Foto2} class="img-fluid" className={styles.foto} />
            </div>
            <div class="quadinfo" styles="background-color: #fff;" className={styles.quadinfo}>
              <h1 class="fontpreta">transformadora de ambientes</h1>
              <p class="fontpreta font-p-mobile">A igreja que se aprimora para impactar diferentes ambientes da sociedade a fim de manifestar o Reino de forma inédita.</p>
            </div>
          </div>
        </div>
      </div>

      <div styles="" class="col-md-4 paddingfotos text-center">
        <div class="d-none d-sm-block animate" data-aos="fade-down" data-aos-duration="900">
          <img src={Seta} styles="width: 50px; margin-top: -90px;"  className={styles.seta}/>
        </div>
        <div class="linhabranca text-center" data-aos="fade-up"  data-aos-duration="900" className={styles.linhaBranca}>
          <div class="ajustefundo" className={styles.ajustefundo}>
            <div className={styles.fotoAluno}>
              <img src={Foto6} class="img-fluid" className={styles.foto} alt="Foto da Igreja Batista Central em Ricardo de Albuquerque"/>
            </div>
            <div class="quadinfo" styles="background-color: #fff;" className={styles.quadinfo}>
              <h1 class="fontpreta">relevante na nossa comunidade local</h1>
              <p class="fontpreta font-p-mobile">A igreja lapidada para desenvolver um ministério relevante, profundo e de alta performance onde Deus nos plantou.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <label class="padding-bottom-label"></label>
</section>



<div styles="background-color: #fff;" class="" id="quem-somos">
  <label class="padding-top-label"></label>
  <div styles="" class="container">
    <div styles="" class="row">
      
      <div class="col-md-6 text-start" data-aos="fade-up" >
        <p>A <b>Igreja Batista Central em Ricardo de Albuquerque</b>, situada na cidade do Rio de Janeiro, desde 1978 está a serviço do Senhor e da comunidade de Ricardo de Albuquerque.</p>
      </div>
      <div class="col-lg-6"></div>
    </div>
  </div>
</div>

<div class="text-center" styles="background-color: #fff;" data-aos="fade-up">
  <div  class="d-none d-sm-block pt30 text-start">
    <img class="img-fluid" />
  </div>
  <div styles="" class="container">
    <div styles="" class="row">

      <div styles="" class="col-md-12 pb20">
        <div class="ratio ratio-16x9">
          <iframe width="560" height="315" src="https://youtube.com/embed/lpf9tkvkdDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </div>
  </div>
  <div  class="d-none d-sm-block  text-end">
    <img class="img-fluid pb30" styles="margin-top: -90px;"/>
  </div>
</div>

<div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6" ></div>
      <div class="col-md-6 text-end" className={styles.cultos}>
        <p class="fonttextvideo font-p-mobile">Cultos aos <b>domingos</b> às 9h e 19h, <b>terças</b> às 8h e <b>quartas </b> às 19h30.</p>
      </div>





      <Infos />













      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2186.3791666098878!2d-43.4033800291301!3d-22.83812770494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9963da49d66473%3A0x7b579caaf6d007f7!2sIGREJA%20BATISTA%20CENTRAL%20RICARDO%20ALBUQUERQUE!5e0!3m2!1spt-BR!2sbr!4v1690502155324!5m2!1spt-BR!2sbr" className={styles.mapa} width="400" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      
    </div>
  </div>
          

</div>





<Forms />



</div>


  )


  
}

export default Home;



