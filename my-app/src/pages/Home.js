import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
    <><h1>This is the landing page</h1>
    <p>
        <Link color="red" to="/page2">Next Page</Link>
    </p></>
    );
    
  };
  
  export default Home;
  