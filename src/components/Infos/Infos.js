import styles from "./Infos.module.css";
import retiro from "../../assets/imagesInfos/retiro.jpg";
import escolaDeMusica from "../../assets/imagesInfos/escolamusica.jpg";
import fotoGeracaoAtiva from "../../assets/imagesInfos/geracaoAtiva.jpg";
import fotoMulheres from "../../assets/imagesInfos/mulheres.jpg";
import pastel from "../../assets/imagesInfos/pastel.png";
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
        src={escolaDeMusica}
        className={styles.imagens}
      />
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={fotoMulheres}
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
        src={retiro}
        className={styles.imagens}
      />
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={pastel}
        className={styles.imagens}
      />
    </Figure>

</div>
    


</div>
  )
}

export default Infos