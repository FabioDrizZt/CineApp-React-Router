import { Link } from "react-router-dom";
import { ROUTES } from "../contants/routes";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to={ROUTES.HOME}>Home</Link>
        <Link className="nav-logo" to={ROUTES.MOVIES}>Movies</Link>
        <Link className="nav-logo" to={ROUTES.SERIES}>Series</Link>
        <Link className="nav-logo" to={ROUTES.ABOUT}>About</Link>
      </div>
    </nav>
  )
}
