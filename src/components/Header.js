import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Matt Closson</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>home</div>
        </Link>
        <Link to="/about">
          <div>about</div>
        </Link>
        <Link to="/projects">
          <div>projects</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;