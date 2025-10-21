import Hero from "./components/Hero/Hero";
import MusicSection from "./components/MusicSection/MusicSection";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import TourSection from "./components/TourSection/TourSection";
import MerchSection from "./components/MerchSection/MerchSection";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
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