import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Mead from "../models/Mead";
import { getSingleAuthorMeadData } from "../services/MeadService";
import BrewCard from "./BrewCard";
import "./YourBrews.css";

const YourBrews = () => {
  const { user } = useContext(AuthContext);
  const [yourMeads, setYourMeads] = useState<Mead[]>();

  useEffect(() => {
    const getAndSetYourMeads = () => {
      getSingleAuthorMeadData(user?.uid!).then((response) => {
        setYourMeads(response);
      });
    };
    getAndSetYourMeads();
    console.log(user);
  }, [user]);

  return (
    <div className="YourBrews">
      <ul className="your-brews-list">
        {yourMeads?.map((mead) => (
          <BrewCard key={mead._id} singleMead={mead} />
        ))}
      </ul>
    </div>
  );
};

export default YourBrews;
