import React, { useState, useEffect } from "react";
import api from "../api/Axios";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  Select,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

const AddUserModal = (props) => {
  const [roles, setRoles] = useState([]);
  const [emp, setEmp] = useState({ CEDULA: "", NOMBRE: "", APELLIDO: "" });
  const [us, setUs] = useState({
    cedula: "",
    idrol: 0,
    username: "",
    password: "",
  });
  const [usemp, setUsEmp] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    idrol: 0,
    username: "",
    password: "",
  });
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setUsEmp({ ...usemp, idrol: event.target.value });
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/roles/");
        setRoles(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("Error al cargar roles");
      }
    };
    fetch();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
  };

  const onAddClick = async () => {
    setEmp({
      ...emp,
      CEDULA: usemp.cedula,
      NOMBRE: usemp.nombre,
      APELLIDO: usemp.apellido,
    });
    setUs({
      ...us,
      cedula: usemp.cedula,
      idrol: usemp.idrol,
      username: usemp.username,
      password: usemp.password,
    });
    alert("Agregado con exito")
    /*try {
      const response = await api.post("/empleados/", emp);
      console.log(response);
    } catch (err) {
      console.log(err);
    }*/
  };

  return (
    <>
      <Modal open={open} component="form" onClose={handleClose}>
        <Box sx={style}>
          <center>
            <Typography variant="h5" gutterBottom>
              Agregar Empleado
            </Typography>
            <br />
          </center>
          <Box>
            <TextField
              label="Cédula"
              sx={{ marginRight: 2 }}
              variant="outlined"
              value={usemp.cedula}
              onChange={(event) => {
                setUsEmp({ ...usemp, cedula: event.target.value });
              }}
            />
            <TextField
              label="Nombre"
              sx={{ marginRight: 2 }}
              variant="outlined"
              value={usemp.nombre}
              onChange={(event) =>
                setUsEmp({ ...usemp, nombre: event.target.value })
              }
            />
            <TextField
              label="Apellido"
              sx={{ marginRight: 2 }}
              variant="outlined"
              value={usemp.apellido}
              onChange={(event) =>
                setUsEmp({ ...usemp, apellido: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              label="Usuario"
              sx={{ marginRight: 2 }}
              variant="outlined"
              value={usemp.username}
              onChange={(event) =>
                setUsEmp({ ...usemp, username: event.target.value })
              }
            />
            <TextField
              label="Clave"
              sx={{ marginRight: 2 }}
              variant="outlined"
              value={usemp.password}
              onChange={(event) =>
                setUsEmp({ ...usemp, password: event.target.value })
              }
            />
            <FormControl sx={{ width: 220 }}>
              <InputLabel>Rol</InputLabel>
              <Select value={usemp.idrol} label="Rol" onChange={handleChange}>
                {roles.map((u) => (
                  <MenuItem value={u.idRol}>{u.nombre}</MenuItem>
                ))}
              </Select>
              <br />
            </FormControl>
          </Box>
          <center>
            <Button variant="contained" color="success" onClick={onAddClick}>
              Agregar
            </Button>
            <Button
              sx={{ marginLeft: 2 }}
              variant="contained"
              color="error"
              onClick={handleClose}
            >
              Cerrar
            </Button>
          </center>
        </Box>
      </Modal>
    </>
  );
};

export default AddUserModal;
