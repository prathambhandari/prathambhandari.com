import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Courses from "./components/Courses";
import Ser from "./components/Ser";

function App() {
  return (
    <div className="App scroll-smooth ">
      {/* <Home /> */}
      <About />
      <Courses />
      <Ser />
      <Project />
    </div>
  );
}

export default App;
