import "xp.css/dist/XP.css";
import greenHill from "./assets/greenHillZone.jpg";
import HomePage from "./components/HomePage.js";

function App() {
  return (
    <div className="App">
      <div
        className="content"
        style={{
          backgroundImage: `url(${greenHill})`,
          backgroundSize: "cover",
        }}
      ></div>
      <HomePage />
    </div>
  );
}

export default App;
