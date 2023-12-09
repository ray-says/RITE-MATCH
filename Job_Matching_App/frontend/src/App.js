import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import React from "react";
import UserLogin from "./components/user/UserLogin";
import UserSignup from "./components/user/UserSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/layout/theme.css'


function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <main>
          <Routes>
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/" element={<UserLogin />} />
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
