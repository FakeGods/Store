import { GridBackgroundDemo } from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
//import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-bkg text-content">
      <Header />
      <GridBackgroundDemo />
      <Footer />
    </div>
  );
}
