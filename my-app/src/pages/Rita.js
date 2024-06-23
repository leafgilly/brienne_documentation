import { Link } from "react-router-dom";

const Rita = () => {

    //VISITED STATE

    var pagesVisited = JSON.parse(document.cookie);
    pagesVisited["Rita"] = true;
    document.cookie = JSON.stringify(pagesVisited);

    return (
    <><h1>Margarita Zeppeli Documentation</h1>
    <p>
        <Link style={{color: 'red'}} to="/">Go Home</Link>
    </p></>
    );
    
  };
  
  export default Rita;
  