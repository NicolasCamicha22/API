import React from 'react';
import "./Footer.css";
import logo from '../../imagenes/logo2.png';
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
})); 

function Footer() {
  const classes = useStyles();
  return (
    <div className="main-footer">
        <div id="izquierda">
          <br/>
          <center><a href="https://www.observatoriopyme.org.ar/" target="_blank" rel="noopener noreferrer" > <img src={logo} width="70px" alt="Logo"/></a></center>
          <div id="derecha">
          <center>
          <IconButton edge="start" className={classes.InstagramIcon} color="primary"  aria-label="menu" href="https://www.instagram.com/observatoriopyme/" target="_blank">
            <InstagramIcon/>
          </IconButton>
          <IconButton edge="start" className={classes.LinkedInIcon} color="primary"  aria-label="menu" href="https://www.linkedin.com/in/observatoriopyme/" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton edge="start" className={classes.FacebookIcon} color="primary" aria-label="menu" href="https://www.facebook.com/fundacionobservatoriopyme" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton edge="start" className={classes.TwitterIcon} color="primary" aria-label="menu" href="https://twitter.com/FOPyME" target="_blank">
            <TwitterIcon />
          </IconButton>
              <Button 
                href="https://www.observatoriopyme.org.ar/newsite/contacto/"
                fontFamily= "Bauer Bodoni"
                color="primary"
                target="_blank"
                >
                Contacto
              </Button>
          </center>
          </div>
        </div>
          <p fontFamily= "Bauer Bodoni">
            <center>© Fundación Observatorio Pyme © 2020. Todos los derechos reservados. Telefono (+5411-4381-3331) Av. de Mayo 1147, Piso 3. Buenos Aires. Argentina</center>  
          </p>
      </div>
  );
}

export default Footer;