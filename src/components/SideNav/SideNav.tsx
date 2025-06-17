import type { ReactElement } from "react";

function SideNav(): ReactElement {
  return (
    <>
      <div className="side-nav">
        <div className=" side-nav__group">
          <div className="side-nav__item">Home</div>
          <div className="side-nav__item">Home</div>
          <div className="side-nav__item">Home</div>
          <div className="side-nav__item">Home</div>
          <div className="side-nav__item">Home</div>
        </div>
        <div className=" side-nav__group"></div>
      </div>
    </>
  );
}

export default SideNav;
