import windowsXP from "../assets/windowsXP.png";

export default function NavBar() {
  return (
    <div>
    <div className="navbar">
            <a id="navbar-item" href="#home"><button>Home</button></a>
            <a id="navbar-item" href="#about"><button>About</button></a>
            <a id="navbar-item" href="#contact"><button>Contact</button></a>
        </div> 
        <div id="start-button" href="#home"><img src={windowsXP} alt=""></img></div>
    </div>
  )
}