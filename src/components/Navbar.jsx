import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav style={style.nav}>
      <h1>Fake Store</h1>
      <div style={style.links}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? style.linkAct : style.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          style={({ isActive }) => (isActive ? style.linkAct : style.link)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => (isActive ? style.linkAct : style.link)}
        >
          Cart
          <span className="cart-count">
            {cartCount > 0 ? `(${cartCount})` : ""}
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

/** @typedef {import("react").CSSProperties} CSSProperties */

/** @type {Record<string, CSSProperties>} */
const style = {
  nav: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    boxShadow: "0 8px 20px rgb(0,0,0,0.75)",
    padding: "8px 24px",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  link: {
    border: "black solid 2px",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "8px 12px",
  },
  linkAct: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "8px",
    padding: "8px 12px",
  },
};
