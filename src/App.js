import { ThemeProvider } from "styled-components";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Country, Home } from "./pages";
import { GlobalStyle } from "./utils/GlobalStyles";
import "./App.css";
import useTheme from "./hooks/useTheme";
import Layout from "./layout/Layout";
import CountriesContextProvider from "./context/countryContext";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <CountriesContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="country/:name" element={<Country />} />
            </Route>
          </Routes>
        </CountriesContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
