import type { ReactElement } from "react";
import "./Navbar.scss";
import type { NavLinkRenderProps } from "react-router";
import { NavLink } from "react-router";

interface RouteItem {
  name: string;
  route: string;
}

function Navbar(): ReactElement {
  const routes: RouteItem[] = [
    {
      name: "home",
      route: "/",
    },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav__group">
          {/* Branding */}
          <NavLink className="nav__item" to="/">
            {"< JEHOFF />"}
          </NavLink>
        </div>
        <div className="nav__group">
          {/* <button */}
          {/*   type="button" */}
          {/*   className="btn__icon btn--lime-outline" */}
          {/*   onClick={(): void => setNavState(!navState)} */}
          {/* > */}
          {/*   <AlignJustifyIcon /> */}
          {/* </button> */}
          {routes.map((val: RouteItem, index: number): ReactElement => {
            const _val: string = val.name.toUpperCase();

            return (
              <NavLink
                key={index}
                className={({ isActive }: NavLinkRenderProps): string =>
                  `nav__item ${isActive ? "nav--active" : ""}`
                }
                to={val.route}
              >
                {_val}
              </NavLink>
            );
          })}
        </div>
      </nav>
      {/* {navState && ( */}
      {/*   <div className="nav__mobile-group"> */}
      {/*     {routes.map((val: any, index: number): ReactElement => { */}
      {/*       let _val: string = val.name.toUpperCase(); */}
      {/**/}
      {/*       return ( */}
      {/*         <NavLink */}
      {/*           key={index} */}
      {/*           className={({ isActive }: NavLinkRenderProps): string => */}
      {/*             `nav__mobile-item ${isActive ? "nav--active" : ""}` */}
      {/*           } */}
      {/*           to={val.route} */}
      {/*         > */}
      {/*           <span>{_val}</span> */}
      {/*         </NavLink> */}
      {/*       ); */}
      {/*     })} */}
      {/*   </div> */}
      {/* )} */}
    </>
  );
}

export default Navbar;
