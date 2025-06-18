import type { ReactElement } from "react";
import { NavLink } from "react-router";

function SideNav(): ReactElement {
  return (
    <>
      <div className="side-nav">
        <div className="side-nav__group top">
          <NavLink className="side-nav__item" to="/">
            Home
          </NavLink>
          <NavLink className="side-nav__item" to="/contacts">
            Contacts
          </NavLink>
          <NavLink className="side-nav__item" to="/">
            Blog
          </NavLink>
          <NavLink className="side-nav__item" to="/">
            Jobs
          </NavLink>
          <NavLink className="side-nav__item" to="/">
            Projects
          </NavLink>
        </div>
        <div className="side-nav__group bottom">
          <NavLink className="side-nav__item" to="/">
            Settings
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideNav;
