import React, { useState, useEffect } from "react";
import api from "../../api/Axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AdminTemplate from "../../components/AdminTemplate";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import AddUserModal from "../../components/AddUserModal";
import EditModal from "../../components/EditModal";
import EliminarModal from "../../components/EliminarModal";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState({});
  const [open , setOpen] = useState(false)
  const [openE , setOpenE] = useState(false)
  const [openD , setOpenD] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/usuarios/");
        setUsers(response.data);
      } catch (err) {
        alert("Error al cargar usuarios");
      }
    };
    fetch();
  }, []);

  return (
    <AdminTemplate title="Usuarios">
      <center>
        <Typography sx={{ fontWeight: "bold" }}>
          Lista de usuarios
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            color="warning"
            sx={{marginLeft: 2}}
            onClick={() => {setOpen(true)}}
          >
            Agregar
          </Button>
        </Typography>
      </center>
      <Table sx={{ width: 800 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Cédula
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Usuario
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u) => (
            <TableRow>
              <TableCell align="center">{u.cedula}</TableCell>
              <TableCell align="center">{u.username}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  sx={{ marginRight: 5 }}
                  startIcon={<EditIcon />}
                  color="success"
                  onClick={() => {
                    setSelected(u)
                    setOpenE(true)
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={() => {
                    setSelected(u)
                    setOpenD(true)
                  }}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddUserModal open={open} setOpen={setOpen}/>
      <EditModal open={openE} setOpen={setOpenE} selected={selected} setSelected={setSelected}/>
      <EliminarModal selected={selected} setOpen={setOpenD} open={openD}/>
    </AdminTemplate>
  );
};

export default UsersPage;
