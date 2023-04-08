export default function Navbar() {
     return (
          <div className="navbar flex">
               <img src="logo.png" className="left-navbar" />
               <div className="mid-text">
                    <h2>College Recommendation System</h2>
               </div>
               <div className="rightt-navbar">
                    <button className="butt">Login</button>
                    <button className="butt">Sign up</button>
               </div>
          </div>
     )
}