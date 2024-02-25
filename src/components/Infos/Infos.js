import styles from "./Infos.module.css";
import fotoGeracaoAtiva from "../../assets/imagesInfos/geracaoAtiva.jpg";
import fotoQuartaKids from "../../assets/imagesInfos/quartaKidsVolta.png";
import fotoOracaoDeboras from "../../assets/imagesInfos/oracaomulheres.jpg";
import fotoCultoMulheres from "../../assets/imagesInfos/diaDasMulheres.png";

import Figure from 'react-bootstrap/Figure';




const Infos = () => {
  return (
    <div className={styles.container}>
          <h1 className={styles.title}>Informativos</h1>

   <div className={styles.infos}>
    

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={fotoQuartaKids}
        className={styles.imagens}
      />
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={fotoOracaoDeboras}
        className={styles.imagens}
      />
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={fotoGeracaoAtiva}
        className={styles.imagens}
      />
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={fotoCultoMulheres}
        className={styles.imagens}
      />
    </Figure>


</div>
    


</div>
  )
}

export default Infos