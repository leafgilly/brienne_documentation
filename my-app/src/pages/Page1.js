import { Outlet, Link } from "react-router-dom";

const Page1 = () => {
    return (
    <><h1>This is the landing page</h1>
    <p>
        <Link color="red" to="/page2">Go To Page2</Link>
    </p></>
    );
    
  };
  
  export default Page1;
  