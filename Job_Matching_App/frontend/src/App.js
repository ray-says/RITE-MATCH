import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="index">
      <div className="div">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="overlap-group">
          <img
            className="img"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65502d8a6a9c13303aa0a9fc/releases/65502e3372a3867b242e4a63/img/rectangle-4.png"
          />
          <div className="rectangle-3" />
          <div className="text-wrapper">Password</div>
          <div className="text-wrapper-2">Username</div>
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="text-wrapper-3">Login</div>
        </div>
      </div>
    </div>
  );
}

export default App;
