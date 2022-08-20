import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Mead from "../models/Mead";
import "./BrewCard.css";
import Horn from "./assets/horn.svg";

interface Props {
  singleMead: Mead;
}

const BrewCard = ({ singleMead }: Props) => {
  const { user } = useContext(AuthContext);
  return (
    <li className="BrewCard">
      {singleMead.authorUID === user?.uid! ? <button>Edit</button> : <></>}
      <Link to={`/${encodeURI(singleMead._id!)}`}>
        <img src={Horn} alt="brew" />
      </Link>
      <Link to={`/${encodeURI(singleMead._id!)}`}>
        <h3>{singleMead.brewName}</h3>
      </Link>
      <p>Style:{singleMead.style}</p>
      <p>OG:{parseFloat(singleMead.OG).toFixed(3)}</p>
    </li>
  );
};

export default BrewCard;
