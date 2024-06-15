import { Link } from "react-router-dom";

const Brienne = () => {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    function revealTextBox() {
        document.getElementById("appearingTextBox").style.display = 'inherit';
    }

    return (
    <><h1>"Brienne Williams" Documentation</h1>
    <h1 onClick={revealTextBox}>Threat Level: S (previously E)</h1>
    <div id="appearingTextBox" style={{textAlign:'center', display:'none'}}>
        <form method="post" onSubmit={handleSubmit}>
            <label>
                <input name="myInput" defaultValue="???" />
            </label>
            <br></br>
            <button type="submit" style={{marginTop:"0.5%"}}>Enter</button>
        </form>
    </div>
    <h2>Previous Names</h2>
    <ul>
        <li>Brienne Williams</li>
        <li>Jordyn Jones</li>
        <li>Eleanor Rigby</li>
        <li>Benjamin Williams</li>
        <li>Adrian Marshall</li>
        <li>Taylor McDaniels</li>
        <li>NEW LIST OF GENERIC NAMES</li>
        <li>LIST OF FUTURE GENERIC NAMES TO USE</li>
        <li>Emma Smith</li>
        <li>Olivia Thompson</li>
        <li>Isabella 'Izzy' Stewart</li>
        <li>Ava Marie Thompson</li>
        <li>Sophia Brown</li>
        <li>Emily Robertson</li>
        <li>Madison Scott</li>
        <li>Mia Anderson</li>
        <li>Hannah Reid</li>
        <li>Abigail Murray</li>
        <li>Lily Young</li>
        <li>Noah Anderson</li>
        <li>Ethan White</li>
        <li>Jacob Macdonald</li>
        <li>Liam Clark</li>
        <li>Logan Campbell</li>
        <li>Jane Doe</li>
    </ul>
    <h2>Stand and Supernatural Abilities</h2>
    <h4>Paperback Writer</h4>
    <p>Paperback Writer manifests as a plain number 2 pencil with wickedly sharp lead. The Stand is able to perfectly alter the text on any physical object. Handwriting, text color, and general wear/age of the text will be perfectly replicated as needed. While not a traditional combat Stand, Paperback Writer has and can be used like a shiv.</p>
    <h4>Paperback Writer REWRITE</h4>
    <p>EVERYTHING I THINK BECOMES REAL INSTANTANEOUSLY</p>
    <h2>Known Relationships</h2>
    <h2>Psychological Profile</h2>
    <h2>Relevant Cases</h2>
    <h2>Author's Notes</h2>
    <p>
        <Link style={{color: 'red'}} to="/page2">Go Home</Link>
    </p></>
    );
    
  };
  
  export default Brienne;
  