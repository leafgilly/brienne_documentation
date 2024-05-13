import { Outlet, Link } from "react-router-dom";

const Page2 = () => {
    return (
     <><h1>This is the second page</h1>
     <p>
        <Link color="red" to="/">Home</Link>
    </p></>
    )
  };
  
  export default Page2;
  