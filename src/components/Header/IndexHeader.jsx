import UserDropdown from "./UserDropdown";
import Header from "./Header";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
        <AppBar
          elevation={0}
          position="absolute"
          sx={{ width: `calc(100% - 170px)` }}
        >
          <Box display="flex">
            <Header />
          </Box>
        </AppBar>
      </ThemeProvider>
      <UserDropdown />
    </>
  );
}

export default IndexHeader;
