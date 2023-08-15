import styles from "./Footer.module.css";
import Hipias from '../../assets/hipias.png'

const Footer = () => {
  return (
    <div >
  <div className={styles.rodape} >
      <div className={styles.copy}>
        &copy; Copyright <strong><span>IBCRA</span></strong>. All Rights Reserved
      </div>
      <div className={styles.credito}>
        Desenvolvimento e Criação de Site realizados por <a href="https://www.youtube.com/@4rievilo515" className={styles.nome}> @4rievilo</a>
      </div>
    </div>
</div>
  )
}

export default Footer