import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
     const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
     return (
          <div className="navbar flex">
               <img src="logo.png" className="left-navbar" />
               <div className="mid-text">
                    <h2>College Recommendation System</h2>
               </div>
               <div className="rightt-navbar">
                    {isAuthenticated ?
                         <button className="butt flex" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
                         : <button className="butt flex" onClick={() => loginWithRedirect()}>Login</button>
                    }
                    {
                         isAuthenticated && <p className=" flex">{user.email}</p>
                    }
               </div>
          </div>
     )
}