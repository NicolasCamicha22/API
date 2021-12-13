import 'github-markdown-css'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import React from 'react'
import "./About.css";
import uade from "./LogoUADE.png";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import { injectIntl } from 'react-intl'
import Footer from '../Footer/Footer';
 
const AboutPage = ({ intl }) => {
  return (
    <Page pageTitle={intl.formatMessage({ id: 'Informacion' })}>
      <Scrollbar
        style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        {intl.formatMessage({ id: ' ' })}
        <br />
        <div class="Cuadrado">
        <font face="Courier New">
        <h1>API Benchmarking</h1>
        <pre>
        <p>Desarrollada por el grupo 6 API UADE segundo cuatrimestre 2020</p>
        <br></br>
        <p> * Alcantara Yrigoyen, Stefano Guillermo <b>Legajo : 1058188</b></p>
        <p> * Camicha, Nicolas                      <b>Legajo : 1101634</b></p>
        <p> * Girardi, Facundo Martin               <b>Legajo : 1084454</b></p>
        <p> * Marchant Rojas, Luis Jose Javier      <b>Legajo : 1042891</b></p>
        <p> * Venzmer, Nicolas Alejandro            <b>Legajo : 1076345</b></p>
        <br></br>
        <p>Profesores</p>

        <p> * Sarasa, Maria Paula                   <b>Legajo : 0094259</b></p>    
        <p> * Malio, Tomas Horacio                  <b>Legajo : 1037546</b></p>
        <br></br>
        <img src={uade} alt="Logo Uade" /> 
        </pre>
        </font>
    </div> 
    </Scrollbar>
    <Footer/>
    </Page>
  )
}
export default injectIntl(AboutPage)
