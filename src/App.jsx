import "./App.css";
import { Drawer } from "./components/Drawer";
import Home from "./components/Home";

function App() {
  return (
    <div className="main">
      <Drawer />
      <Home />
    </div>
  );
}

export default App;
