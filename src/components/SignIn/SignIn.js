import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Paper from '@material-ui/core/Paper'
import banner from '../../imagenes/banner1.jpg';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { useIntl } from 'react-intl'
import Typography from '@material-ui/core/Typography'
import Footer from "../Footer/Footer"
import loginimg from '../../imagenes/login.png';
//importo llamada a endpoint
import { login } from "../../controller/miApp.controller";
 

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 'auto',
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: "100%",
      height: "100%",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: 192,
    height: 192,
    color: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: `100%`,
  },
}))

export default function SignIn(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usuarioValido, setUsuarioValido] = React.useState(false);
  const [usuarioRoot, setUsuarioRoot] = React.useState(false);

  const classes = useStyles();
  const intl = useIntl()

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }


  //Ejecuto el endopoint para validar login
  const validarLogin = async function () {
    let datos = {
      email: email,
      password: password

    }

    let getLogin = await login(datos);

    if (getLogin.rdo === 0) {
      setUsuarioValido(true);
    }
    if (getLogin.rdo === 2) {
      setUsuarioRoot(true);
    }
    if (getLogin.rdo === 1) {
      alert(getLogin.mensaje)
    }

  }

  //Valido campos y llamo endpoint
  const loginUser = () => {
    if (email !== "" && password !== "") {
      validarLogin();
    }
    else {
      alert("Debe completar usuario y password");
    }


  }
  const redirect = () => {
    if (usuarioRoot) {
      return <Redirect to="/Administrador" />
    }
    else if (usuarioValido) {
      return <Redirect to="/ABEncuestas" />
    }
  }

  return (

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }} >
      {redirect()}
      <Page pageTitle={intl.formatMessage({ id: 'sign_in' })}>
        <Paper className={classes.paper} elevation={6}>
          <img src={banner} width="100%" height="25%" alt="Logo" />
          <div className={classes.container}>
            <img src={loginimg} width="200px" alt="Logo" />
            <Typography component="h1" variant="h5">
              {intl.formatMessage({ id: ' ' })}
            </Typography>
            <form className={classes.form}>
              <TextField

                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoFocus
                label="Mail"
                id="email"
                inputProps={{
                  type: "email",
                  onChange: (event) => handleEmail(event),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Contraseña"
                id="pass"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                inputProps={{
                  type: "password",
                  onChange: (event) => handlePassword(event),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={loginUser}
              >
                Iniciar Sesion
                </Button>
            </form>
          </div>
        </Paper>
        <Footer />
      </Page>
    </div>
  )
}