import Mead from "../models/Mead";
import "./BrewCard.css";

interface Props {
  singleMead: Mead;
}

const BrewCard = ({ singleMead }: Props) => {
  return (
    <li className="BrewCard">
      <h3>Brew:{singleMead.brewName}</h3>
      <p>Style:{singleMead.style}</p>
    </li>
  );
};

export default BrewCard;
