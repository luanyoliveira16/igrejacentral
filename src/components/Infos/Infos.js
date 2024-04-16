import styles from "./Infos.module.css";
import fotoGeracaoAtiva from "../../assets/imagesInfos/geracaoAtiva.jpg";
import fotoQuartaKids from "../../assets/imagesInfos/quartaKidsVolta.png";
import fotoCultoJovem from "../../assets/imagesInfos/cultoJovem.jpg";
import fotoTerca from "../../assets/imagesInfos/oracaomulheres.jpg";


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
        src={fotoCultoJovem}
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
        src={fotoTerca}
        className={styles.imagens}
      />
    </Figure>


</div>
    


</div>
  )
}

export default Infos