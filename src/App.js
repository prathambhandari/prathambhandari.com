import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Courses from "./components/Courses";
import Reels from "./components/Reels";

function App() {
  return (
    <div className="App scroll-smooth ">
      {/* <Header /> */}
      <Home />
      <About />
      <Courses/>
      <Project />
      {/* <Reels /> */}
    </div>
  );
}

export default App;
