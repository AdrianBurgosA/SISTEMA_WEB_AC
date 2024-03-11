import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { Container, TextField, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import api from "../api/Axios";

const MessageModal = (props) => {
  const { nombre, mensaje, open, setOpen } = props;
  const id = 5;
  const [ticket, setTicket] = useState({
    idus: 5,
    idtramite: 0,
    idestado: 0,
    cedulacli: "",
    fecha: new Date(),
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [messages, setMessages] = useState([{ sender: nombre, text: mensaje }]);
  const [newMessage, setNewMessage] = useState("");
  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState({ idrol: 0, nombre: "" });
  const [tramites, setTramites] = useState([]);
  const [tramite, setTramite] = useState({ idtramite: 0, nombre: "" });

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "Me", text: newMessage }]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const response = await api.get("/estados/");
        setEstados(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTramites = async () => {
      try {
        const response = await api.get("/tramites/");
        setTramites(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTramites();
    fetchEstados();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",
    borderRadius: 10,
    p: 4,
    display: "flex",
  };

  const handleTramiteChange = (event) => {
    setTramite(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {messages.map((message, index) =>
                message.sender !== "Me" ? (
                  <Paper
                    key={index}
                    sx={{ padding: 2, bgcolor: "#ECE5DD", marginBottom: 2 }}
                  >
                    <strong>{message.sender}:</strong> {message.text}
                  </Paper>
                ) : (
                  <Paper key={index} sx={{ padding: 2, bgcolor: "#128c7e" }}>
                    <strong>{message.sender}:</strong> {message.text}
                  </Paper>
                )
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Escribe un mensaje"
                variant="outlined"
                fullWidth
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#128c7e" }}
                onClick={handleSendMessage}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ marginLeft: 2 }}>
            <center>
              <Typography sx={{ fontWeight: "bold" }}>Ticket</Typography>
              <br />
              <FormControl sx={{ width: 200 }}>
                <InputLabel>Trámite</InputLabel>
                <Select
                  value={tramite}
                  label="Usuario"
                  onChange={handleTramiteChange}
                >
                  {tramites.map((u) => (
                    <MenuItem value={u}>{u.nombre}</MenuItem>
                  ))}
                </Select>
                <br />
              </FormControl>
              <FormControl sx={{ width: 200 }}>
                <InputLabel>Estado</InputLabel>
                <Select
                  value={estado}
                  label="Usuario"
                  onChange={handleEstadoChange}
                >
                  {estados.map((u) => (
                    <MenuItem value={u}>{u.nombre}</MenuItem>
                  ))}
                </Select>
                <br />
              </FormControl>
              <TextField
                label="Cédula"
                variant="outlined"
                value={ticket.cedulacli}
                sx={{ width: 200 }}
                onChange={(event) =>
                  setTicket({ ...ticket, cedulacli: event.target.value })
                }
              />
            </center>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MessageModal;
