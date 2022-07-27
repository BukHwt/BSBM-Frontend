import { useEffect, useState } from "react";

// import AuthContext from "../context/AuthContext";
import Mead from "../models/Mead";
import { getMeadData } from "../services/MeadService";
import "./Main.css";

const Main = () => {
  // const { user } = useContext(AuthContext);
  const [mead, setMead] = useState<Mead[]>();

  const getAndSetMead = () => {
    getMeadData().then((response) => {
      setMead(response);
    });
  };

  useEffect(() => {
    getAndSetMead();
    console.log(mead);
  }, []);

  return <div className="Main">Main works</div>;
};

export default Main;
