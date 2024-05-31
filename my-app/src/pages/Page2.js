import { Outlet, Link } from "react-router-dom";
import DocList from "./DocList";

const Page2 = () => {
    return (
     <><><h1>This is the second page</h1>
        <p>
          <Link color="red" to="/">Go to Page1</Link>
        </p></><DocList />
        <h1>Testing Out Some Glitch Paragraphs</h1>
        {/* TODO:
        1. PROGRAM IN LOCKING BRIENNE'S FILE UNTIL ALL OTHERS HAVE BEEN EXPLORED
        2. PROGRAM IN LOCKING THE USER OUT OF A PAGE THAT THEY HAVE FINISHED EXPLORING
        3. INPUT DUMMY TEXT AND JUST START CODING WEIRD INTERACTIONS PER CHARACTER
        4. CREATE A TEXT ENTRY BOX IN BRIENNE THAT IS INACTIVE EVEN TO 'BRIENNE WILLIAMS' UNTIL LATER */}
        
        </>
    )
  };
  
  export default Page2;
  