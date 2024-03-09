import React, { useState } from "react";
import login from "../../image/login.jpg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const theme = createTheme();
  const [userRequest, setUserRequest] = useState({
    u: "",
    p: "",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    /*try{
      const response = api.get(`/${userRequest.u}/${userRequest.p}`)
      navigate("/contactos")
      alert(`Bienvenido!`)
    }catch(err){
      console.log(`Error: ${err.message}`);
    }try{
      const response = api.get(`/${userRequest.u}/${userRequest.p}`)
      navigate("/contactos")
      alert(`Bienvenido!`)
    }catch(err){
      console.log(`Error: ${err.message}`);
    }*/
    navigate("/admin")
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              `url(${login})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Usuario"
                name="username"
                value={userRequest.u}
                onChange={(event) =>
                  setUserRequest({
                    ...userRequest,
                    u: event.target.value,
                  })
                }
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                value={userRequest.p}
                onChange={(event) =>
                  setUserRequest({
                    ...userRequest,
                    p: event.target.value,
                  })
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#223A7A",
                  mt: 3,
                  mb: 2,
                }}
                onClick={handleSubmit}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
