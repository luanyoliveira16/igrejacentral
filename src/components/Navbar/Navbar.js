import styles from "./Navbar.module.css";
import {Container, Navbar, Nav} from "react-bootstrap"
import About from "../../pages/Home/Home.js";
import Forms from "../Forms/Forms.js";
import Footer from "../Footer/Footer.js";
import ReactDOM from 'react-dom';
import Logo from '../../assets/logoCompleto.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'



function ColorSchemesExample() {

  return (
    <div id='menu' className={styles.menu}>
       <Navbar  data-bs-theme="dark" className={styles.teste2}>
        <Container className={styles.container}>
          <Navbar.Brand href="#home"></Navbar.Brand>
           <AnchorLink href="#carousel"> <img src={Logo}  className={styles.logo}/></AnchorLink>
          <Nav className={styles.nav}>   
            <AnchorLink href="#carousel" className={styles.teste}>Home</AnchorLink>
            <AnchorLink href="#about" className={styles.teste}>Quem Somos</AnchorLink>
            <AnchorLink href="#register" className={styles.teste}>Contato</AnchorLink>
          </Nav>
        </Container>
      </Navbar>
      

      
    </div>

    
  );

  
}

export default ColorSchemesExample;