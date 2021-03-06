import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import Maincontent from "./components/Maincontent";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "98vw",
        margin: "0",
        padding: "0",
        background: "#ee0979",
        background: "-webkit-linear-gradient(to right, #ff6a00, #ee0979)",
        background: "linear-gradient(to right, #ff6a00, #ee0979)",
      }}
    >
      <ButtonAppBar></ButtonAppBar>
      <Maincontent></Maincontent>
    </div>
  );
}

export default App;
