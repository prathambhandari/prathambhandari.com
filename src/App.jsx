import { useMemo } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const location = useLocation();
  const routes = useMemo(() => ["/about", "/skills", "/projects"], []);
  const currentIndex = routes.indexOf(location.pathname);

  return (
    <div className="min-h-screen bg-stone-200 text-neutral-900 flex flex-col lg:flex-row">
      {/* Mobile Top Nav */}
      <nav className="lg:hidden w-full py-8 flex justify-center bg-orange-800">
        <div
          className="flex gap-8 transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(${-currentIndex * 100 + 100}px)` }}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive
                  ? "text-2xl font-medium text-white"
                  : "text-lg text-orange-300"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive
                  ? "text-2xl font-medium text-white"
                  : "text-lg text-orange-300"
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive
                  ? "text-2xl font-medium text-white"
                  : "text-lg text-orange-300"
              }`
            }
          >
            Projects
          </NavLink>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav className="bg-orange-800 hidden lg:flex w-[40%] 2xl:w-[35%] min-h-screen flex-col justify-center items-center fixed left-0 top-0">
        <div
          className="flex flex-col items-center transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateY(${-currentIndex * 56 + 56}px)` }}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-300 py-3 ${
                isActive
                  ? "text-3xl xl:text-4xl 2xl:text-5xl font-medium text-white"
                  : "text-lg xl:text-xl 2xl:text-2xl text-orange-300 hover:text-orange-200"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `transition-all duration-300 py-3 ${
                isActive
                  ? "text-3xl xl:text-4xl 2xl:text-5xl font-medium text-white"
                  : "text-lg xl:text-xl 2xl:text-2xl text-orange-300 hover:text-orange-200"
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-all duration-300 py-3 ${
                isActive
                  ? "text-3xl xl:text-4xl 2xl:text-5xl font-medium text-white"
                  : "text-lg xl:text-xl 2xl:text-2xl text-orange-300 hover:text-orange-200"
              }`
            }
          >
            Projects
          </NavLink>
        </div>
      </nav>

      {/* Content Area */}
      <main className="w-full lg:w-[60%] 2xl:w-[65%] min-h-0 lg:min-h-screen lg:ml-[40%] 2xl:ml-[35%] flex items-start lg:items-center justify-center overflow-hidden">
        <div
          key={location.pathname}
          className="animate-fade-slide-up w-full flex items-start lg:items-center justify-center"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
