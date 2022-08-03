import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Mead from "../models/Mead";
import { getMeadData } from "../services/MeadService";
import BrewCard from "./BrewCard";
import "./Main.css";

const Main = () => {
  const { user } = useContext(AuthContext);
  const [meads, setMead] = useState<Mead[]>();

  const getAndSetMead = () => {
    getMeadData().then((response) => {
      setMead(response);
    });
  };

  useEffect(() => {
    getAndSetMead();
    console.log(meads);
  }, [user]);

  return (
    <div className="Main">
      <ul>
        {meads?.map((mead) => (
          <BrewCard key={mead._id} singleMead={mead} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
