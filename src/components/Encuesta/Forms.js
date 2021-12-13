import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Encuesta.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import banner from '../../imagenes/banner5.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
 
//importo 
import { guardarEncuestaResp, getEncuestaID } from "../../controller/miApp.controller";

const useStylesGrid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: "100%",
        color: theme.palette.text.secondary,
    },
}));

const useStylesButton = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
        width: "98%",
    },
}));

export default function Forms(props) {

    const clase5 = useStylesGrid();
    const clase4 = useStylesButton();
    const [encuestas, setEncuestas] = useState([]);
    const history = useHistory();

    const [pregunta1, setPregunta1] = React.useState('');
    const [pregunta2, setPregunta2] = React.useState('');
    const [pregunta3, setPregunta3] = React.useState('');
    const [pregunta4, setPregunta4] = React.useState('');
    const [pregunta5, setPregunta5] = React.useState('');

    const handlePregunta1 = (event) => {
        setPregunta1(event.target.value);
    }
    const handlePregunta2 = (event) => {
        setPregunta2(event.target.value);
    }
    const handlePregunta3 = (event) => {
        setPregunta3(event.target.value);
    }
    const handlePregunta4 = (event) => {
        setPregunta4(event.target.value);
    }
    const handlePregunta5 = (event) => {
        setPregunta5(event.target.value);
    }

    useEffect(() => {
        getEncuesta(props.match.params.id)
    }, [props.match.params.id]);

    const getEncuesta = async (id) => {
        const encuestas = await getEncuestaID(id)
        setEncuestas(encuestas[0])
    };
    const idbusqueda = props.match.params.id

    const isEmpty = (stringToValidate) => {
        if (stringToValidate !== undefined && stringToValidate !== null) {
            return stringToValidate.length === 0
        }

        return true;
    };

    const subirRespuesta = async function () {
        let Respuesta = false;
        const valorPregunta1 = encuestas.pregunta1 ? !isEmpty(pregunta1) : true
        const valorPregunta2 = encuestas.pregunta2 ? !isEmpty(pregunta2) : true
        const valorPregunta3 = encuestas.pregunta3 ? !isEmpty(pregunta3) : true
        const valorPregunta4 = encuestas.pregunta4 ? !isEmpty(pregunta4) : true
        const valorPregunta5 = encuestas.pregunta5 ? !isEmpty(pregunta5) : true
        if (valorPregunta1 && valorPregunta2 && valorPregunta3 && valorPregunta4 && valorPregunta5) {
            Respuesta = await guardarEncuestaResp(encuestas, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, idbusqueda);
            return true
        }
        else {
            alert("Completar todos los datos.")
            return false
        }
    }

    const redirect = async () => {
        const ok = await subirRespuesta()
        //const ok = true
        if (ok) {
            history.push("/Contacto/" + encuestas._id)
        }
    }

    return (
        <Page pageTitle={'Cuestionario Api Benchmark'}>
            <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
                <img src={banner} width="100%" height="25%" alt="Logo" />
                <br />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={clase5.paper}><h2>{encuestas.titulo}</h2></Paper>
                    </Grid>
                </Grid>
                <br />

                {encuestas.pregunta1 &&
                    <>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={clase5.paper}><h2>{encuestas.pregunta1}</h2></Paper>
                            </Grid>
                        </Grid>
                        <br />
                        <RadioGroup aria-label="Preguntas" name="Preguntas" value={pregunta1} onChange={handlePregunta1}>
                            <center>
                                {encuestas.P1respuesta1 &&
                                    <FormControlLabel value={encuestas.P1respuesta1} control={<Radio />} label={encuestas.P1respuesta1} />
                                }
                                {encuestas.P1respuesta2 &&
                                    <FormControlLabel value={encuestas.P1respuesta2} control={<Radio />} label={encuestas.P1respuesta2} />
                                }
                                {encuestas.P1respuesta3 &&
                                    <FormControlLabel value={encuestas.P1respuesta3} control={<Radio />} label={encuestas.P1respuesta3} />
                                }
                                {encuestas.P1respuesta4 &&
                                    <FormControlLabel value={encuestas.P1respuesta4} control={<Radio />} label={encuestas.P1respuesta4} />
                                }
                                {encuestas.P1respuesta5 &&
                                    <FormControlLabel value={encuestas.P1respuesta5} control={<Radio />} label={encuestas.P1respuesta5} />
                                }
                            </center>
                        </RadioGroup>
                    </>
                }
                <br />
                {encuestas.pregunta2 &&
                    <>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={clase5.paper}><h2>{encuestas.pregunta2}</h2></Paper>
                            </Grid>
                        </Grid>
                        <br />
                        <RadioGroup aria-label="Preguntas2" name="Preguntas2" value={pregunta2} onChange={handlePregunta2}>
                            <center>
                                {encuestas.P2respuesta1 &&
                                    <FormControlLabel value={encuestas.P2respuesta1} control={<Radio />} label={encuestas.P2respuesta1} />
                                }
                                {encuestas.P2respuesta2 &&
                                    <FormControlLabel value={encuestas.P2respuesta2} control={<Radio />} label={encuestas.P2respuesta2} />
                                }
                                {encuestas.P2respuesta3 &&
                                    <FormControlLabel value={encuestas.P2respuesta3} control={<Radio />} label={encuestas.P2respuesta3} />
                                }
                                {encuestas.P2respuesta4 &&
                                    <FormControlLabel value={encuestas.P2respuesta4} control={<Radio />} label={encuestas.P2respuesta4} />
                                }
                                {encuestas.P2respuesta5 &&
                                    <FormControlLabel value={encuestas.P2respuesta5} control={<Radio />} label={encuestas.P2respuesta5} />
                                }
                            </center>
                        </RadioGroup>
                    </>
                }
                <br />
                {encuestas.pregunta3 &&
                    <>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={clase5.paper}><h2>{encuestas.pregunta3}</h2></Paper>
                            </Grid>
                        </Grid>
                        <br />
                        <RadioGroup aria-label="Preguntas3" name="Preguntas3" value={pregunta3} onChange={handlePregunta3}>
                            <center>
                                {encuestas.P3respuesta1 &&
                                    <FormControlLabel value={encuestas.P3respuesta1} control={<Radio />} label={encuestas.P3respuesta1} />
                                }
                                {encuestas.P3respuesta2 &&
                                    <FormControlLabel value={encuestas.P3respuesta2} control={<Radio />} label={encuestas.P3respuesta2} />
                                }
                                {encuestas.P3respuesta3 &&
                                    <FormControlLabel value={encuestas.P3respuesta3} control={<Radio />} label={encuestas.P3respuesta3} />
                                }
                                {encuestas.P3respuesta4 &&
                                    <FormControlLabel value={encuestas.P3respuesta4} control={<Radio />} label={encuestas.P3respuesta4} />
                                }
                                {encuestas.P3respuesta5 &&
                                    <FormControlLabel value={encuestas.P3respuesta5} control={<Radio />} label={encuestas.P3respuesta5} />
                                }
                            </center>
                        </RadioGroup>
                    </>
                }
                <br />
                {encuestas.pregunta4 &&
                    <>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={clase5.paper}><h2>{encuestas.pregunta4}</h2></Paper>
                            </Grid>
                        </Grid>
                        <br />
                        <RadioGroup aria-label="Preguntas4" name="Preguntas4" value={pregunta4} onChange={handlePregunta4}>
                            <center>
                                {encuestas.P4respuesta1 &&
                                    <FormControlLabel value={encuestas.P4respuesta1} control={<Radio />} label={encuestas.P4respuesta1} />
                                }
                                {encuestas.P4respuesta2 &&
                                    <FormControlLabel value={encuestas.P4respuesta2} control={<Radio />} label={encuestas.P4respuesta2} />
                                }
                                {encuestas.P4respuesta3 &&
                                    <FormControlLabel value={encuestas.P4respuesta3} control={<Radio />} label={encuestas.P4respuesta3} />
                                }
                                {encuestas.P4respuesta4 &&
                                    <FormControlLabel value={encuestas.P4respuesta4} control={<Radio />} label={encuestas.P4respuesta4} />
                                }
                                {encuestas.P4respuesta5 &&
                                    <FormControlLabel value={encuestas.P4respuesta5} control={<Radio />} label={encuestas.P4respuesta5} />
                                }
                            </center>
                        </RadioGroup>
                    </>
                }
                <br />
                {encuestas.pregunta5 &&
                    <>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={clase5.paper}><h2>{encuestas.pregunta5}</h2></Paper>
                            </Grid>
                        </Grid>
                        <br />
                        <RadioGroup aria-label="Preguntas5" name="Preguntas5" value={pregunta5} onChange={handlePregunta5}>
                            <center>
                                {encuestas.P5respuesta1 &&
                                    <FormControlLabel value={encuestas.P5respuesta1} control={<Radio />} label={encuestas.P5respuesta1} />
                                }
                                {encuestas.P5respuesta2 &&
                                    <FormControlLabel value={encuestas.P5respuesta2} control={<Radio />} label={encuestas.P5respuesta2} />
                                }
                                {encuestas.P5respuesta3 &&
                                    <FormControlLabel value={encuestas.P5respuesta3} control={<Radio />} label={encuestas.P5respuesta3} />
                                }
                                {encuestas.P5respuesta4 &&
                                    <FormControlLabel value={encuestas.P5respuesta4} control={<Radio />} label={encuestas.P5respuesta4} />
                                }
                                {encuestas.P5respuesta5 &&
                                    <FormControlLabel value={encuestas.P5respuesta5} control={<Radio />} label={encuestas.P5respuesta5} />
                                }
                            </center>
                        </RadioGroup>
                    </>
                }
                <Button
                    variant="contained"
                    color="Primary"
                    className={clase4.button}
                    startIcon={<NavigateNextIcon />}
                    onClick={() => { redirect() }}
                >
                    Siguiente
      </Button>
            </Scrollbar>
            <Footer />
        </Page>
    );
}