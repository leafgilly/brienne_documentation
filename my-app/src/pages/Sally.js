import { Link } from "react-router-dom";

const Sally = () => {

    //VISITED STATE

    var pagesVisited = JSON.parse(document.cookie);
    pagesVisited["Sally"] = true;
    document.cookie = JSON.stringify(pagesVisited);

    return (
    <><h1>Sally Reed Documentation</h1>
    <p>
        <Link color="red" to="/page2">Go Home</Link>
    </p></>
    );
    
  };
  
  export default Sally;
  