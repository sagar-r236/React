import { TITLE_IMG_URL } from "../config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => <img id="logo" alt="logo" src={TITLE_IMG_URL} />;

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div
      className="header"
      style={{
        border: "1px solid red",
      }}
    >
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <li>Cart</li>
        </ul>
      </div>
      { 
      isLoggedIn ? 
      (<button onClick={() => setIsLoggedIn(false)}>Login</button>) :
      (<button onClick={() => setIsLoggedIn(true)}>Logout</button>)
      }
    </div>
  );
};

export default HeaderComponent;
