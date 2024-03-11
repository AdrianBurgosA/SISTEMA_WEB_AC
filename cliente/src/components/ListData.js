import React from "react";
import MessageCard from "../components/MessageCard";
import { Data } from "../data/Data";
import { List } from "@mui/material";

const ListData = () => {
  return (
    <List
      sx={{ width: 360, bgcolor: "#4A4A56", height: 810 }}
    >
      {Data.map((d) => (
        <MessageCard
          nombre={d.nombre}
          icon={d.icon}
          color={d.color}
          mensaje={d.mensaje}
          bgcolor="#4A4A56"
          fontColor="white"
        />
      ))}
    </List>
  );
};

export default ListData;
