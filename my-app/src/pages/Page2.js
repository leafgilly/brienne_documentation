import { Link } from "react-router-dom";
import DocList from "./DocList";

const Page2 = () => {
    return (
     <><><h1>This is the second page</h1>
        <p>
          <Link style={{color: 'red'}} to="/">Go to Page1</Link>
        </p></><DocList />
        </>
    )
  };
  
  export default Page2;
  