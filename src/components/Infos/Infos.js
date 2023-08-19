import styles from "./Infos.module.css";
import fotoConferencia from "../../assets/imagesInfos/conferenciaJovem.jpg";
import fotoObreiros from "../../assets/imagesInfos/obreiros.jpg";
import fotoGeracaoAtiva from "../../assets/imagesInfos/geracaoAtiva.jpg";
import fotoMulheres from "../../assets/imagesInfos/mulheres.jpg";
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
        src={fotoConferencia}
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
        src={fotoObreiros}
        className={styles.imagens}
      />
    </Figure>

</div>
    


</div>
  )
}

export default Infos