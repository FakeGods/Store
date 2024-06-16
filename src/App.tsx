import { GridBackgroundDemo } from "./components/Background";
import Nav from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-bkg text-content">
      <Nav />
      <GridBackgroundDemo />
    </div>
  );
}
