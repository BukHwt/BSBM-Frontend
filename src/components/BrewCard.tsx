import { Link } from "react-router-dom";
import Mead from "../models/Mead";
import "./BrewCard.css";

interface Props {
  singleMead: Mead;
}

const BrewCard = ({ singleMead }: Props) => {
  return (
    <li className="BrewCard">
      <Link to={`/${encodeURI(singleMead._id!)}`}>
        <h3>{singleMead.brewName}</h3>
      </Link>
      <p>Style:{singleMead.style}</p>
      <p>OG:{parseFloat(singleMead.OG).toFixed(3)}</p>
    </li>
  );
};

export default BrewCard;
