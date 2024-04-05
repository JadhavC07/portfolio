import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="justify-content-center jimu-primary-loading"></div>
    </div>
  );
};
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </div>

    // <>
    //   <Navbar />
    //   <Outlet />
    // </>
  );
}

export default App;
