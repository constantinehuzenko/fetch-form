import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FormPage } from "./pages/Form/Form.page";
import { Footer } from "./components/Footer/Footer";
import "./common/styles.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <FormPage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
