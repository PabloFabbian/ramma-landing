import Hero from "./components/Hero/Hero";
import MusicSection from "./components/MusicSection/MusicSection";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import TourSection from "./components/TourSection/TourSection";
import MerchSection from "./components/MerchSection/MerchSection";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <MusicSection />
      <TourSection />
      <MerchSection />
      <Newsletter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;