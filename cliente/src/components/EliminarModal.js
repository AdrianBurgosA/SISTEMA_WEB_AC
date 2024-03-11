import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import api from "../api/Axios";

const EliminarModal = (props) => {
  const { selected, setOpen, open } = props;

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

  const onDeleteClick = async () => {
    try {
      const response = await api.delete(`/usuarios/${selected.id}`);
      setOpen(false);
      alert("Se ha eliminado con exito.");
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
              ¿Seguro que desea eliminar a {selected.nombre}?
            </Typography>
            <br />
          </center>
          <br />
          <center>
            <Button variant="contained" color="success" onClick={onDeleteClick}>
              Eliminar
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

export default EliminarModal;
