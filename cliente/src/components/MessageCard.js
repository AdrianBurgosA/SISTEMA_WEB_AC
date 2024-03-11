import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import MessageModal from "./MessageModal";

const MessageCard = (props) => {
  const [open, setOpen] = useState(false);

  const onHandleModal = () => {
    setOpen(true);
  };

  return (
    <>
      <ListItem sx={{ backgroundColor: props.bgColor }}>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: props.color }}>{props.icon}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ color: props.fontColor }}>
              <strong>{props.nombre}</strong>
            </Typography>
          }
          secondary={
            <Typography sx={{ color: props.fontColor }}>
              {props.mensaje}
            </Typography>
          }
          onClick={() => {onHandleModal()}}
        />
      </ListItem>
      <MessageModal
        nombre={props.nombre}
        mensaje={props.mensaje}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default MessageCard;
