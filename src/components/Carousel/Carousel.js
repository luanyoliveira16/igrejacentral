import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import styles from './Carousel.module.css';
import Foto1 from '../../assets/ibcra.jpg';
import Foto3 from '../../assets/foto3.jpg';
import Foto7 from '../../assets/foto7.jpg';



const IndividualIntervalsExample = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
 }, []);

  return (
    <div id='carousel' className={styles.container}>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-aos-anchor-placement="top-center">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
  
    <div class="carousel-item active" >
      <img src={Foto1} class="d-block w-100" alt="Foto da Igreja Batista Central em Ricardo de Albuquerque"/>
      <label className={styles.familia}>UMA IGREJA NO CORAÇÃO DE RICARDO!</label>
        <label className={styles.corpoDeCristo}>Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</label>
    </div>
    
    <div class="carousel-item">
      <img src={Foto3} class="d-block w-100" alt="Foto da Igreja Batista Central em Ricardo de Albuquerque"/>
      <label className={styles.familia}>UMA IGREJA NO CORAÇÃO DE RICARDO!</label>
        <label className={styles.corpoDeCristo}>Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</label>
    </div>
    <div class="carousel-item">
      <img src={Foto7} class="d-block w-100" alt="Foto da Igreja Batista Central em Ricardo de Albuquerque"/>
      <label className={styles.familia}>UMA IGREJA NO CORAÇÃO DE RICARDO!</label>
        <label className={styles.corpoDeCristo}>Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</label>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default IndividualIntervalsExample



 /* function IndividualIntervalsExample() {
          return (
           
            <Carousel>
            
              <Carousel.Item interval={1000}>

              <div class="carousel-caption text-start position-absolute top-50 translate-middle-y margintop">
        <h5 class="fontbanner pb20">UMA FAMÍLIA PARA PERTENCER!</h5>
        <em className={styles.corpoDeCristo}>Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</em>

      </div>
              
                <img
                  className="d-block w-100"
                  src={Foto1}
                  alt="First slide"
                />
          </Carousel.Item>
          
              <Carousel.Item interval={500}>
              <div class="carousel-caption text-start position-absolute top-50 translate-middle-y margintop">
        <h5 class="fontbanner pb20">UMA FAMÍLIA PARA PERTENCER!</h5>
        <em className={styles.corpoDeCristo} href="processo-seletivo.html">Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</em>
</div>
                <img
                  className="d-block w-100"
                  src={Foto3}
                  alt="Second slide"
                />
                
              </Carousel.Item>

              <Carousel.Item>
              <div class="carousel-caption text-start position-absolute top-50 translate-middle-y margintop">
        <h5 class="fontbanner pb20">UMA FAMÍLIA PARA PERTENCER!</h5>
        <em className={styles.corpoDeCristo} href="processo-seletivo.html">Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</em>
</div>
                <img
                  className="d-block w-100"
                  src={Foto4}
                  alt="Third slide"
                />
               
              </Carousel.Item>

              <Carousel.Item interval={500}>
              <div class="carousel-caption text-start position-absolute top-50 translate-middle-y margintop">
        <h5 class="fontbanner pb20">UMA FAMÍLIA PARA PERTENCER!</h5>
        <em className={styles.corpoDeCristo} href="processo-seletivo.html">Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</em>
</div>
                <img
                  className="d-block w-100"
                  src={Foto7}
                  alt="Second slide"
                />
               
              </Carousel.Item>

              <Carousel.Item interval={500}>
              <div class="carousel-caption text-start position-absolute top-50 translate-middle-y margintop">
        <h5 class="fontbanner pb20">UMA FAMÍLIA PARA PERTENCER!</h5>
        <em className={styles.corpoDeCristo} href="processo-seletivo.html">Assim como cada um de nós tem um corpo com muitos membros e esses membros não exercem todos a mesma função, assim também em Cristo nós, que somos muitos, formamos um corpo, e cada membro está ligado a todos os outros.
Romanos 12:4-5</em>
</div>
                <img
                  className="d-block w-100"
                  src={Foto8}
                  alt="Second slide"
                />
               
              </Carousel.Item>

            </Carousel>
            
          );
        }
        
   export default IndividualIntervalsExample;   */