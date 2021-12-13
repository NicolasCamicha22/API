import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagenes/logo.png';
import fotoDashboard from '../../imagenes/teamwork-chico.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./LandingPage.css";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LockIcon from '@material-ui/icons/Lock';
import Grid from "@material-ui/core/Grid";
 

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
    padding: 24,
    height: "100%",
  },
}));


export default function () {
  const classes = useStyles();
  return (
    <div class="container-fluid">
      <Grid container spacing={15}>
        <Grid item xs={6} sm={4}>
          <img src={logo} alt="alternative" />
        </Grid>
        <Grid item xs={6} sm={4}></Grid>
        <Grid item xs={6} sm={4}>
          <br />
          <br />
          <br />
          <center>
            <Link to="/SignIn">
              <Button
                color="inherit"
                startIcon={<LockIcon />}>
                Iniciar Sesion</Button>
            </Link>
            <IconButton edge="start" className={classes.InstagramIcon} color="inherit" aria-label="menu" href="https://www.instagram.com/observatoriopyme/" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton edge="start" className={classes.LinkedInIcon} color="inherit" aria-label="menu" href="https://www.linkedin.com/in/observatoriopyme/" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton edge="start" className={classes.FacebookIcon} color="inherit" aria-label="menu" href="https://www.facebook.com/fundacionobservatoriopyme" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton edge="start" className={classes.TwitterIcon} color="inherit" aria-label="menu" href="https://twitter.com/FOPyME" target="_blank">
              <TwitterIcon />
            </IconButton>
          </center>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <br />
          <br />
          <center><h3>Bienvenidos al Termometro PyME!</h3>
            <p>Conoce el estado de tu empresa en relacion al sector.</p>
            <Link to="/Encuesta">
              <Button variant="contained" color="secondary">Realizar Consulta</Button>
            </Link>
          </center>
        </Grid>
        <Grid item xs={2} sm={2}></Grid>
        <Grid item xs={6} sm={6}>
          <center><h4>Benchmark</h4>
            <img src={fotoDashboard} alt="alternative" />
          </center>
        </Grid>
      </Grid>
    </div>

  )
}