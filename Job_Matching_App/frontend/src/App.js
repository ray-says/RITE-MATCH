import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import React from "react";
import UserLogin from "./components/user/UserLogin";
import UserSignup from "./components/user/UserSignup";
import Jobs from "./components/jobs/Jobs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/layout/theme.css'


function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <main>
          <Routes>
            <Route path="/signup" Component={UserSignup} />
            <Route path="/login" Component={UserLogin} />
            <Route path="/jobs" Component={Jobs}/>
            <Route path="/" Component={UserLogin} />
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
