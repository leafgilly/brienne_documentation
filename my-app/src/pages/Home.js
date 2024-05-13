import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
    <><h1>Home</h1>
    <p>
        <Link color="red" to="/blogs">blog</Link>
    </p></>
    );
    
  };
  
  export default Home;
  