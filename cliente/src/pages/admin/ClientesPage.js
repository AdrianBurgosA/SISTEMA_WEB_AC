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

const ClientesPage = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/clientes/");
        setClientes(response.data);
      } catch (err) {
        alert("Error al cargar usuarios");
      }
    };
    fetch();
  }, []);

  return (
    <AdminTemplate title="Clientes">
      <center>
        <Typography sx={{ fontWeight: "bold" }}>Lista de clientes</Typography>
      </center>
      <Table sx={{ width: 800 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }} align="center">Cédula</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">Nombre</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">Apellido</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">Teléfono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((u) => (
            <TableRow>
              <TableCell align="center">{u.cedulacli}</TableCell>
              <TableCell align="center">{u.nombre}</TableCell>
              <TableCell align="center">{u.apellido}</TableCell>
              <TableCell align="center">{u.telefono}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AdminTemplate>
  );
};

export default ClientesPage;
