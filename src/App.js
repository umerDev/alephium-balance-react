import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { useState } from "react";
import { Counter } from "./Component/Counter";
import { CounterContext } from "./Component/CounterContext";
import { AppRoutes } from "./Component/Routes";

function App() {
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <CounterContext.Provider value={[count, setCounter]}>
        <Counter />
        <AppRoutes></AppRoutes>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
