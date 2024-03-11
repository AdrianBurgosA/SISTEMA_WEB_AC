import React from "react";
import AgentTemplate from "../../components/AgentTemplate";
import { Stack } from "@mui/material";
import ListMessages from '../../components/ListMessages'
import {Mensajes} from '../../data/Mensajes'


const Dash = () => {
  const ayer = [];
  const antiguo = [];
  return (
    <AgentTemplate title="Chats">
      <Stack direction={{ xs: "column", sm: "row" }}>
        <div>
        <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{marginTop: 10}}
          >
            <div style={{marginLeft: 10}}>
              <ListMessages mensajes={Mensajes} titulo="Hoy" fondo="#128c7e"/>
            </div>
            <div style={{marginLeft: 10}}>
              <ListMessages mensajes={ayer} titulo="Ayer" fondo="#DAA052"/>
            </div>
            <div style={{marginLeft: 10}}>
              <ListMessages mensajes={antiguo} titulo="Antiguo" fondo="#F05454"/>
            </div>
          </Stack>
        </div>
      </Stack>
    </AgentTemplate>
  );
};

export default Dash;
