import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { getSingleUserData, sendNewUserData } from "../services/UserService";

const Header = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // console.log(user);

    if (user) {
      getSingleUserData(user?.uid!).then((response) => {
        if (!response) {
          sendNewUserData(user?.uid!, user?.displayName!).then(() => {});
        }
      });
    }
  }, [user]);

  return (
    <header className="Header">
      <div className="google">
        {user ? (
          <p>Welcome back {user.displayName}!</p>
        ) : (
          <p>Sign In With Google</p>
        )}
        {user ? (
          <button className="google-btn head-btn" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <button className="google-btn head-btn" onClick={signInWithGoogle}>
            Sign In
          </button>
        )}
      </div>
      <Link className="header-link" to="/">
        <div className="header-container">
          <h1> RecipBee </h1>
        </div>
      </Link>
      <div>TODO SEARCH BAR</div>
      <nav>
        <ul>
          <Link className="new-brew-link" to="/newbrew">
            <li>Add a New Brew</li>
          </Link>
          <li>LINK 2</li>
          <li>LINK 3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
