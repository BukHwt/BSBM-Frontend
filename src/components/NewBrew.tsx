import { FormEvent, useContext, useState } from "react";
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
  const [OG, setOG] = useState(0);
  const [FG, setFG] = useState(0);
  const [recipe, setRecipe] = useState("");

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
    setRecipe("");
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
      FG,
      recipe
    );
    resetAllStates();
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div className="NewBrew main">
      <div className="new-brew-cta">
        <h1>Add A New Brew!</h1>
        <p>Please fill out the form below to add your brew</p>
      </div>
      <form onSubmit={submitHandler}>
        <label htmlFor="brewName">Enter Brew Name</label>
        <input
          type="text"
          name="brewName"
          id="brewName"
          value={brewName}
          onChange={(e) => setBrewName(e.target.value)}
        />
        <label htmlFor="style">Select Brew Style</label>
        <div className="radio-inputs">
          <div>
            <p>Traditional/Show Mead</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="traditional"
              checked={style === "traditional"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Melomel</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="melomel"
              checked={style === "melomel"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Sparkling Mead</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="sparkling"
              checked={style === "sparkling"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Sack Mead</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="sack"
              checked={style === "sack"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Braggot</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="braggot"
              checked={style === "braggot"}
              onChange={(e) => setStyle(e.target.value)}
            />
          </div>
          <div>
            <p>Pyment</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="pyment"
              checked={style === "pyment"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Cyser</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="cyser"
              checked={style === "cyser"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Metheglin</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="metheglin"
              checked={style === "metheglin"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Hydromel/Short Mead</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="hydromel"
              checked={style === "hydromel"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Great Mead</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="great"
              checked={style === "great"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <p>Bochet</p>
            <input
              type="radio"
              name="style"
              id="style"
              value="bochet"
              checked={style === "bochet"}
              onChange={(e) => setStyle(e.target.value)}
            />
          </div>
        </div>
        {/* Edited to use radio button, leaving if ever want to change to text */}
        {/* <input
          type="text"
          name="style"
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        /> */}
        <label htmlFor="author">Enter Author's Name</label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="volume">Gallons Brewed</label>
        <input
          type="number"
          name="volume"
          id="volume"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <label htmlFor="brewDate">Brew Started</label>
        <input
          type="date"
          name="brewDate"
          id="brewDate"
          value={brewDate}
          onChange={(e) => setBrewDate(e.target.value)}
        />
        <label htmlFor="honey">Honey</label>
        <input
          type="text"
          name="honey"
          id="honey"
          placeholder="Pure 'n' Simple Honey"
          value={honey}
          onChange={(e) => {
            setHoney(e.target.value);
          }}
        />
        <label htmlFor="honeyVariety">Honey Variety</label>
        <select
          name="honeyVariety"
          id="honeyVariety"
          value={honeyVariety}
          onChange={(e) => {
            setHoneyVariety(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Please Select Below
          </option>
          <option value="alfalfa">Alfalfa</option>
          <option value="blueberry">Blueberry</option>
          <option value="buckwheat">Buckwheat</option>
          <option value="clover">Clover</option>
          <option value="cotton">Cotton</option>
          <option value="grape">Grape</option>
          <option value="mesquite">Mesquite</option>
          <option value="mint">Mint</option>
          <option value="orangeblossom">Orange Blossom</option>
          <option value="other">Other - Specify in Recipe</option>
          <option value="prune">Prune</option>
          <option value="sourwood">Sourwood</option>
        </select>
        <label htmlFor="honeyAmount">Pounds of Honey Used</label>
        <input
          type="number"
          name="honeyAmount"
          id="honeyAmount"
          value={honeyAmount}
          onChange={(e) => {
            setHoneyAmount(parseFloat(e.target.value));
          }}
        />
        <label htmlFor="base">Base Used</label>
        <input
          type="text"
          name="base"
          id="base"
          placeholder="Aquafina"
          value={base}
          onChange={(e) => {
            setBase(e.target.value);
          }}
        />
        <label htmlFor="baseAmount">Gallons of Base Used</label>
        <input
          type="number"
          name="baseAmount"
          id="baseAmount"
          value={baseAmount}
          onChange={(e) => {
            setBaseAmount(parseFloat(e.target.value));
          }}
        />
        <label htmlFor="OG">Target OG</label>
        <input
          type="number"
          name="OG"
          id="OG"
          value={OG}
          onChange={(e) => {
            setOG(parseFloat(e.target.value));
          }}
        />
        <label htmlFor="FG">Target FG</label>
        <input
          type="number"
          name="FG"
          id="FG"
          value={FG}
          onChange={(e) => {
            setFG(parseFloat(e.target.value));
          }}
        />
        <label htmlFor="recipe">Recipe:</label>
        <input
          height="100px"
          type="text"
          name="recipe"
          id="recipe"
          value={recipe}
          onChange={(e) => {
            setRecipe(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBrew;
