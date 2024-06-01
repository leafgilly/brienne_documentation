import { Link } from "react-router-dom";

const Morgan = () => {

    var pagesVisited = JSON.parse(document.cookie);
    pagesVisited["Morgan"] = true;
    document.cookie = JSON.stringify(pagesVisited);

    return (
    <><h1>Stella Morgan Becquerel Documentation</h1>
    <p>
        <Link color="red" to="/page2">Go Home</Link>
    </p></>
    );
    
  };
  
  export default Morgan;
  