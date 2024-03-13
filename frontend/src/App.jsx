import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import ListPage from "./pages/listpage/ListPage";
import Profile from "./pages/profile/Profile";
import SinglePage from "./pages/singlepage/SinglePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:id" element={<SinglePage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
