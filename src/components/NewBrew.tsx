import { FormEvent, useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { sendNewMeadData } from "../services/MeadService";
import "./NewBrew.css";

const NewBrew = () => {
  const [brewName, setBrewName] = useState("");
  const [style, setStyle] = useState("");
  const [author, setAuthor] = useState("");
  const [volume, setVolume] = useState(0);
  const [brewDate, setBrewDate] = useState("");
  const [honey, setHoney] = useState("");
  const [honeyVariety, setHoneyVariety] = useState("");
  const [honeyAmount, setHoneyAmount] = useState(0);
  const [base, setBase] = useState("");
  const [baseAmount, setBaseAmount] = useState(0);
  const [OG, setOG] = useState(0.0);
  const [FG, setFG] = useState(0.0);

  const { user } = useContext(AuthContext);

  const resetAllStates = () => {
    setBrewName("");
    setStyle("");
    setAuthor("");
    setVolume(0);
    setBrewDate("");
    setHoney("");
    setHoneyVariety("");
    setHoneyAmount(0);
    setBase("");
    setBaseAmount(0);
    setOG(0);
    setFG(0);
  };

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    sendNewMeadData(
      brewName,
      style,
      author,
      user?.uid!,
      volume,
      brewDate,
      honey,
      honeyVariety,
      honeyAmount,
      base,
      baseAmount,
      OG,
      FG
    );
    resetAllStates();
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="NewBrew">
      <h1>Add A New Brew!</h1>
      <p>Please fill out the form below to add your brew</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="brewName">Enter Brew Name</label>
        <input
          type="text"
          name="brewName"
          id="brewName"
          value={brewName}
          onChange={(e) => setBrewName(e.target.value)}
        />
        <label htmlFor="style">Enter Brew Style</label>
        <input
          type="text"
          name="style"
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
        <label htmlFor="author">Enter Author's Name</label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="volume">Brew Amount</label>
        <input
          type="number"
          name="volume"
          id="volume"
          min="0"
          step="any"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBrew;
