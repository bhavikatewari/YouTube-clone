//the top navigation bar shown on every page 

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#181818" }}>
      <Link to="/" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>
        🎬 MyTube
      </Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
