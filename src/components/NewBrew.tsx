import { FormEvent, useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { sendNewMeadData } from "../services/MeadService";
import "./NewBrew.css";

const NewBrew = () => {
  const [author, setAuthor] = useState("");
  const [brewName, setBrewName] = useState("");
  const { user } = useContext(AuthContext);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    sendNewMeadData(author, brewName);
    setAuthor("");
    setBrewName("");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="NewBrew">
      <h1>Add A New Brew!</h1>
      <p>Please fill out the form below to add your brew</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="author">Enter Author's Name</label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="brewName">Enter Brew Name</label>
        <input
          type="text"
          name="brewName"
          id="brewName"
          value={brewName}
          onChange={(e) => setBrewName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBrew;
