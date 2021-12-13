import React, { useEffect, useState } from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import EditableTable from "./EditableTable"
import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import "./ABEncuestas.css"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import PollIcon from '@material-ui/icons/Poll';

//importo 
import { getEncuesta } from "../../controller/miApp.controller";
import { deleteEncuesta } from "../../controller/miApp.controller";
 
const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: 10,
    width: "48%",
  },
}));

export default function AbmEncuestas() {

  const clase4 = useStylesButton();
  const [encuestas, setEncuestas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTEncuesta()
  }, []);

  const getTEncuesta = async () => {
    const encuestas = await getEncuesta()
    setEncuestas(encuestas)
    setLoading(false)
  };

  const borrarEncuesta = async function (newEncuesta) {
    let Encuesta = false;
    Encuesta = await deleteEncuesta(newEncuesta._id, newEncuesta.titulo, newEncuesta.sector, newEncuesta.tamaño, newEncuesta.date);
    window.location.reload(true);
  }

  const deleteEncuestas = (encuesta, resolve) => {
    const newEncuesta = { _id: encuesta._id };
    borrarEncuesta(newEncuesta)
    resolve()

  };

  const columns = [
    { title: 'Titulo', field: 'titulo' },
    { title: 'Sector', field: 'sector' },
    { title: 'Tamaño', field: 'tamaño' },
    { title: 'Fecha Creacion', field: 'date' },
  ];

  return (
    <Page pageTitle={'Administrador de encuestas'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
        <div style={{ padding: 24, width: "100%" }}>
          <Link to="/NuevaEncuesta">
            <Button variant="contained" color="secondary" className={clase4.button} startIcon={<PollIcon />}>Generar Nueva Encuesta</Button>
          </Link>
          <Link to="/Signin">
            <Button variant="contained" color="red" className={clase4.button} startIcon={<ExitToAppIcon />}>Cerrar Sesion</Button>
          </Link>
          <br />
          <br />
          <EditableTable title={"Encuestas"} data={encuestas} columns={columns} setData={setEncuestas}
            onRowDelete={deleteEncuestas}
            deleteText={"¿Está seguro de eliminar la encuesta?"} isLoading={loading} />
        </div>
      </Scrollbar>
      <Footer />
    </Page>
  )
}