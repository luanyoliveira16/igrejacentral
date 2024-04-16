import styles from './Forms.module.css';
import { useEffect } from 'react';
import Logo  from '../../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css'




const Register = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
 }, []);



  return (
    <div id='register' className={styles.register}>
    <div styles="" class="container">
      <div styles="" class="row" className={styles.order}>
        <div styles="" class="col-lg-4 pt90">
          <img src={Logo}  class="img-fluid" styles="width: 200px;" data-aos="fade-up" data-aos-duration="300" className={styles.logo} alt={styles.logo}/>
          <div class="pt20 iconform" className={styles.iconform}>
            <a href="https://www.instagram.com/familia.central/" data-aos="fade-up" data-aos-duration="900"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/IBCRA42?locale=pt_BR" data-aos="fade-up" data-aos-duration="1500" styles="margin-left: 10px;"><i class="bi bi-facebook"></i></a>
            <a href="https://www.youtube.com/@FamiliaCentralPodcast" data-aos="fade-up" data-aos-duration="1900" styles="margin-left: 10px;"><i class="bi bi-youtube"></i></a>
          </div>

        </div>

        <div class="col-lg-4"></div>
        <div class="col-lg-4 fontinfo pt90" className={styles.texto}>
          <p data-aos="fade-up" data-aos-duration="600"><i class="bi bi-envelope-fill"></i> contato@familiacentral.com.br</p>
          <p data-aos="fade-up" data-aos-duration="900"><i class="bi bi-whatsapp"></i> +55 (21) 3019-0987</p>
          <p data-aos="fade-up" data-aos-duration="1200"><i class="bi bi-geo-alt-fill"></i> IBCRA – Igreja Batista Central em Ricardo de Albuquerque</p>
          <p data-aos="fade-up" data-aos-duration="1500">Rua Umbuzeiro, 260 - Ricardo de Albuquerque, Rio de Janeiro - RJ, 21620-610</p>
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default Register