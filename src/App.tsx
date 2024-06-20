import { GridBackgroundDemo } from "./components/Background";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-bkg text-content">
      <Nav />
      <Header />
      <Hero />
      <GridBackgroundDemo />
      <Footer />
    </div>
  );
}
