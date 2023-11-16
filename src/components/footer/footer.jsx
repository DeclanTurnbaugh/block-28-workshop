import { Link } from "react-router-dom";

export default function Footer() {
  return(
    <div id="footer">
      <Link to="/">HOME</Link>
      <Link to="/red">RED</Link>
      <Link to="/green">GREEN</Link>
      <Link to="/blue">BLUE</Link>
      <Link to="/purple">PURPLE</Link>
    </div>
  )
}