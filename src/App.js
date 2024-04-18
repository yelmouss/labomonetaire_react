import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import DummyComponent from "./components/DummyComponent ";
import Services from "./components/Services";
import PresentationSection from "./components/PresentationSection";
import ProductSection from "./components/ProductSection";
import VideoSection from "./components/VideoSection";
import ContactSection from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App  flex flex-col min-h-screen ">
        <Header />
        <FirstSection />
        <PresentationSection />
        <SecondSection />
        <DummyComponent />
        <Services />
        <ProductSection />
        <VideoSection />
        <ContactSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

//0679694931

export default App;
