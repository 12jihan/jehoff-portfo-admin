import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideNav from "./components/SideNav/SideNav";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Navbar /> */}
        <div
          className="
          main-content"
        >
          <aside>
            <SideNav />
          </aside>
          <main>
            <Outlet />
          </main>
        </div>
        {/* <Footer /> */}
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default routes;
