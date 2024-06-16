import { GridBackgroundDemo } from "./components/Background";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bkg text-content">
      <Nav />
      <GridBackgroundDemo />
      <Footer />
    </div>
  );
}
