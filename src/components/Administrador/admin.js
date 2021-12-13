import React, { useEffect, useState } from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditableTable from "./EditableTable"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import "./admin.css"
 
//importo 
import { getUsuario } from "../../controller/miApp.controller";
import { guardarUsuario } from "../../controller/miApp.controller";
import { deleteUsuario } from "../../controller/miApp.controller";
import { updateUsuario } from "../../controller/miApp.controller";

const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: 10,
    width: "98%",
  },
}));

export default function AbmUsuarios() {

  const clase4 = useStylesButton();
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);


  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }

    return true;
  };

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    const usuarios = await getUsuario()
    setUsuarios(usuarios)
    setLoading(false)
  };

  const subirUsuario = async function (newUsuario) {
    let Usuario = false;
    if (!isEmpty(newUsuario.name) && !isEmpty(newUsuario.email) && !isEmpty(newUsuario.lastname) && !isEmpty(newUsuario.dni) && !isEmpty(newUsuario.password)) {
      Usuario = await guardarUsuario(newUsuario.name, newUsuario.lastname, newUsuario.email, newUsuario.dni, newUsuario.password);
      window.location.reload(true);
    }
    else {
      alert("Completar todos los datos.")
    }
  }

  const editarUsuario = async function (newUsuario) {
    let Usuario = false;

    Usuario = await updateUsuario(newUsuario._id, newUsuario.dni, newUsuario.name, newUsuario.lastname, newUsuario.email, newUsuario.password);
    window.location.reload(true);
  }

  const borrarUsuario = async function (newUsuario) {
    let Usuario = false;

    Usuario = await deleteUsuario(newUsuario._id);
    window.location.reload(true);
  }

  const deleteUsuarios = (usuario, resolve) => {
    const newUsuario = { _id: usuario._id, name: usuario.name, lastname: usuario.lastname, email: usuario.email, dni: usuario.dni, password: usuario.password };
    borrarUsuario(newUsuario)
    resolve()
  };

  const addUsuario = (usuario, resolve) => {
    const newUsuario = { dni: usuario.dni, name: usuario.name, lastname: usuario.lastname, email: usuario.email, password: usuario.password };
    subirUsuario(newUsuario)
    resolve()
  };

  const editUsuario = (oldUsuario, usuario, resolve) => {
    const newUsuario = { dni: usuario.dni, name: usuario.name, lastname: usuario.lastname, email: usuario.email, password: usuario.password };
    editarUsuario(newUsuario)
    resolve();
  };

  const columns = [
    { title: 'DNI', field: 'dni' },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'lastname' },
    { title: 'Email', field: 'email' },
    { title: 'Contraseña', field: 'password' },
    { title: 'Root', field: 'root', editable: 'never' }
  ];

  return (
    <Page pageTitle={'Administrador de usuarios'} Button={<Button>olaa</Button>}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
        <div style={{ padding: 24, width: "100%" }}>
          <Link to="/Signin">
            <Button variant="contained" color="red" className={clase4.button} startIcon={<ExitToAppIcon />}>Cerrar Sesion</Button>
          </Link>
          <br/>
          <br/>
          <EditableTable title={"Usuarios"} data={usuarios} columns={columns} setData={setUsuarios}
            onRowDelete={deleteUsuarios}
            onRowAdd={addUsuario}
            onRowUpdate={editUsuario}
            deleteText={"¿Está seguro de eliminar el usuario?"} isLoading={loading} />
        </div>
      </Scrollbar>
      <Footer />
    </Page>
  )
}