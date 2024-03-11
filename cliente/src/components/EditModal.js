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

const EditModal = (props) => {
  const { selected, setOpen, open, setSelected } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
  };

  const handleEdit = async () => {
    try {
      const response = await api.post("/usuarios/", selected);
      setOpen(false);
      alert("Editado con éxito");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        open={open}
        autoComplete="off"
        component="form"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style}>
          <center>
            <Typography variant="h5" gutterBottom>
              Editar Usuario
            </Typography>
            <br />
            <TextField
              label="Nombre"
              variant="outlined"
              value={selected.username}
              onChange={(event) =>
                setSelected({ ...selected, username: event.target.value })
              }
              sx={{ marginRight: 4 }}
            />
          </center>
          <br />
          <br />
          <center>
            <Button variant="contained" color="success" onClick={handleEdit}>
              Editar
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

export default EditModal;
