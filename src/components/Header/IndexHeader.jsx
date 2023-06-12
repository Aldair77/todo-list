import AvatarUser from "./AvatarUser";
import Header from "./Header";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreVertIcon sx={{ fontSize: 30 }}/>
              </IconButton>
            </StyledToolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default IndexHeader;
