import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { getSingleUserData, sendNewUserData } from "../services/UserService";

const Header = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
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
        {user ? <p>{user.uid}</p> : <p>Sign In With Google</p>}
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
          <h1 className="fuzzy"> RecipBee </h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
