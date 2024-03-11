import React, { useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { List, ListSubheader } from "@mui/material";

import MessageCard from "./MessageCard";

const ListMessages = (props) => {
  const { mensajes, titulo, fondo } = props;
  return (
    <List 
    sx={{ width: 360, bgcolor: "white", height: 810 }}
    subheader={
        <ListSubheader component="div" sx={{bgcolor: fondo, color: 'white'}}>
            {titulo}
        </ListSubheader>
    }
    >
      {mensajes.map((m) => (
        <MessageCard
          color="#128c7e"
          icon={<WhatsAppIcon sx={{ color: "#F7F7F8" }} />}
          nombre={m.nombre}
          mensaje={m.mensaje}
          bgcolor="white"
          fontColor="black"
        />
      ))}
    </List>
  );
};

export default ListMessages;
