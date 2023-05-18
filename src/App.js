import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Loader from "./Components/Loader";
// import TopHeader from "./Components/TopHeader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
        <div>
          <Routes>
            <Route path="/makeovers" element={(loading ? <Loader/> : <Home />)} />
          </Routes>
        </div>
      )
}

export default App;
