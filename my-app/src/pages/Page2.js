import { Outlet, Link } from "react-router-dom";
import DocList from "./DocList";

const Page2 = () => {
    return (
     <><><h1>This is the second page</h1>
        <p>
          <Link color="red" to="/">Go to Page1</Link>
        </p></><DocList />
        <h1>Testing Out Some Glitch Paragraphs</h1>
        </>
    )
  };
  
  export default Page2;
  