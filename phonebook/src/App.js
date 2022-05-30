import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import Personform from "./components/Personform";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState({ name: "", phone: "" });

  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (value, field) => {
    setNewName({ ...newName, [field]: value });
  };

  const addName = (e) => {
    e.preventDefault();
    let goOn = true;
    if (newName.name === "") {
      return alert("Name cannot be empty");
    }
    persons.map((person) => {
      if (person.name === newName.name) {
        goOn = false;
        return alert(newName.name + " is taken!!!");
      }
      return goOn;
    });

    if (goOn) {
      const Typedname = {
        name: newName.name,
        phone: newName.phone,
      };

      setPersons(persons.concat(Typedname));

      setNewName({ name: "", phone: "" });
    }
  };

  const personsToDisplay = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleChangeSearch={handleChangeSearch} />
      <Personform
        newName={newName}
        handleChange={handleChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <ol key={Math.random()}>
        {personsToDisplay.map((person) => {
          return <Person key={person.name} person={person} />;
        })}
      </ol>
    </div>
  );
};

export default App;
