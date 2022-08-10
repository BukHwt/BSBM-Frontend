import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Mead from "../models/Mead";
import { getSingleMeadData } from "../services/MeadService";
import "./BrewPage.css";

const BrewPage = () => {
  const [brew, setBrew] = useState<Mead>();
  const id: string | undefined = useParams().id;

  useEffect(() => {
    getSingleMeadData(id!).then((response) => {
      setBrew(response);
    });
  }, [id]);

  return (
    <div className="BrewPage">
      <h1>{brew?.brewName}</h1>
      <h2>{brew?.style}</h2>
      <h3>{brew?.author}</h3>
    </div>
  );
};

export default BrewPage;
