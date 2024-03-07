import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Booking.com</span>
        </a>
        <div className="links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Conatct</a>
          <a href="/">Agents</a>
        </div>
      </div>
      <div className="right">
        <a href="/" className="login">
          Sing in
        </a>
        <a href="/" className="register">
          Sing up
        </a>
        <div className="menu-icon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`${open ? "menu active" : "menu"}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Conatct</a>
          <a href="/">Agents</a>
          <a href="/">Sing in</a>
          <a href="/">Sing up</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
