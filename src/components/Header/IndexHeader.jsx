import AvatarUser from "./AvatarUser";
import Header from "./Header";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logout from "./Logout";

import { whoAmI } from "../../lib/auth";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Router from "next/router";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  marginLeft: theme.spacing(3.5),
  paddingBottom: theme.spacing(1),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 50,
    textAlign: "center",
    alignItems: "center",
  },
}));

const whiteTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
  },
});

function IndexHeader() {
  const drawerWidth = 420; // -- tamaño de sidebar
  /* const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();
*/
  function Usuario() {
    const [user, setUser] = useState({});
    useEffect(() => {
      const token =
        window.localStorage.getItem("token") ||
        window.sessionStorage.getItem("token");
      if (!token) {
        redirectToLogin();
      } else {
        (async () => {
          try {
            const data = await whoAmI();
            if (data.error === "Unauthorized") {
              // User is unauthorized and there is no way to support the User, it should be redirected to the Login page and try to logIn again.
              redirectToLogin();
            } else {
              setUser(data.payload);
            }
          } catch (error) {
            // If we receive any error, we should be redirected to the Login page
            redirectToLogin();
          }
        })();
      }
    }, []);

    function redirectToLogin() {
      Router.push("/auth/login");
    }

    function handleLogout(e) {
      e.preventDefault();

      removeToken();
      redirectToLogin();
    }
    if (user.hasOwnProperty("username")) {
      return (
        <>
          <h3>¡ Bienvenido {user.username} !</h3>
        </>
      );
    }
  }
  return (
    <>
      <ThemeProvider theme={whiteTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            elevation={1}
            position="static"
            sx={{ display: "inline-block" }}
          >
            <StyledToolbar>
              <AvatarUser />

              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Tasks
              </Typography>
              <Usuario />
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                {/*<div className="counter-todos">
                  <h3>
                    N° Tareas: <span>{todosCount}</span>
                  </h3>
                  <h3>
                    Pendientes: <span>{pendingTodosCount}</span>
                  </h3>
  </div>*/}
              </Typography>
              <Logout
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              />
            </StyledToolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default IndexHeader;
