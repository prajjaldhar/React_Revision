import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WeatherCard from "./components/WeatherCard";
import Calculator from "./components/Calculator";
import StopWatch from "./components/StopWatch";
import ProductCard from "./components/ProductCard";
import BulbToggle from "./components/BulbToggle";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/productcard">ProductCard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <WeatherCard
                data={45}
                location={"Jaipur"}
                pic={
                  "https://cdn.getyourguide.com/img/tour/d730e95c56a4bd61.jpeg/98.jpg"
                }
              />
            }
          />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="/bulbtoggle" element={<BulbToggle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
