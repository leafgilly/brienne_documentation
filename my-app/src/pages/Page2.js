import { Link } from "react-router-dom";
import DocList from "./DocList";

const Page2 = () => {
    return (
     <><>
     <div class='document'>
     <h1>Informer Company Internal Team Documentation</h1>
        <p>
          <Link style={{color: 'red'}} to="/">Go to Page1</Link>
        </p>
        </div>
        </><DocList />
        </>
    )
  };
  
  export default Page2;
  