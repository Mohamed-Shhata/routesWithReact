import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import NavBarCom from "./components/NavBarCom";
import UserProfileCom from "./components/UserProfileCom";

import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBarCom />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<UserProfileCom />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
