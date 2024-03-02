import Home from "../pages/Home";
import Contact from "../pages/Contact";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </Router>
  );
};
