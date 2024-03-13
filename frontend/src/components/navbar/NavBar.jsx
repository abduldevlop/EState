import { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Booking.com</span>
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/list">All lists</Link>
          <Link to="/">About</Link>
          <Link to="/">Conatct</Link>
        </div>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Jhone doa</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/" className="login">
              Sing in
            </a>
            <a href="/" className="register">
              Sing up
            </a>
          </>
        )}
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
