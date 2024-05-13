import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <p>A permanent link tree for a list of documents.</p>
      <Outlet />
    </>
  )
};

export default Layout;
