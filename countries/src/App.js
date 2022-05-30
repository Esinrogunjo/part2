import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Frontend from "./components/Frontend";

function App() {
  const [countries, setCountries] = useState([]);
  const [typedText, setTypedText] = useState("");

  const handleChangedText = (e) => {
    setTypedText(e.target.value);
    console.log(typedText);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const data = response.data;
      setCountries(data);
    });
  }, []);

  return (
    <div className="App">
      <>
        <input value={typedText} onChange={handleChangedText} />
      </>
      <>
        <br />
        <Frontend
          countries={countries}
          handleChangedText={handleChangedText}
          typedText={typedText}
        />
      </>
    </div>
  );
}

export default App;
