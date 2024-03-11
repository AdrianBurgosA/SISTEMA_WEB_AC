import React, { useState, useEffect } from "react";
import AdminTemplate from "../../components/AdminTemplate";
import { Button, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import api from "../../api/Axios";

const TicketsPage = () => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [user, setUser] = useState({});

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

  const handleSearch = async () => {
    try {
      const response = await api.get(`/tickets/${user.id}`);
      setTickets(response.data);
    } catch (err) {
      alert("Error al cargar los tickets");
    }
  };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const nothing = (
    <center>
      <Typography>No hay tickets aún</Typography>
    </center>
  );

  const tableData = (
    <TableBody>
      {tickets.map((u) => (
        <TableRow>
          <TableCell align="center">{u.idtramite}</TableCell>
          <TableCell align="center">{u.idestado}</TableCell>
          <TableCell align="center">{u.cedulacli}</TableCell>
          <TableCell align="center">{u.cfecha}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  return (
    <AdminTemplate title="Tickets">
      <center>
        <Typography sx={{ fontWeight: "bold" }}>Tickets</Typography>
      </center>
      <FormControl sx={{ width: 800 }}>
        <InputLabel>Usuario</InputLabel>
        <Select value={user} label="Usuario" onChange={handleChange}>
          {users.map((u) => (
            <MenuItem value={u}>{u.username}</MenuItem>
          ))}
        </Select>
        <br />
      </FormControl>
      <center>
        <Button variant="contained" onClick={handleSearch} sx={{ width: 200 }}>
          Consultar
        </Button>
      </center>
      <br />
      <br />
      <Table sx={{ width: 800 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Trámite
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Estado
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Cliente
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Fecha
            </TableCell>
          </TableRow>
        </TableHead>
        {tickets.length === 0 ? nothing : tableData}
      </Table>
    </AdminTemplate>
  );
};

export default TicketsPage;
