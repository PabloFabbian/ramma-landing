import Hero from "./components/Hero/Hero";
import MusicSection from "./components/MusicSection/MusicSection";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import TourSection from "./components/TourSection/TourSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <MusicSection />
      <TourSection />
    </ThemeProvider>
  );
}

export default App;