import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import Personform from "./components/Personform";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState({ name: "", phone: "" });

  const [search, setSearch] = useState("");
  const findOne = (id) => {
    return persons.find((person) => person.id === id);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (value, field) => {
    setNewName({ ...newName, [field]: value });
  };
  const Delete = (id) => {
    const person = findOne(id);

    if (window.confirm(`Are you sure you want delete ${person.name}`)) {
      personService.deleteOne(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    } else {
      alert(`deleting ${person.name} cancled `);
    }
  };
  const create = (e) => {
    e.preventDefault();
    let goOn = true;
    if (newName.name === "") {
      return alert("Name cannot be empty");
    }
    persons.map((person) => {
      if (person.name.toLowerCase() === newName.name.toLowerCase()) {
        goOn = false;
        if (
          window.confirm(
            `${person.name} already exist, do you want to change the number`
          )
        ) {
          const newPerson = { ...person, number: newName.phone };
          personService.update(person.id, newPerson).then((retrunedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id != retrunedPerson.id ? person : retrunedPerson
              )
            );
          });
        } else {
          return alert(newName.name + " is taken!!!");
        }
      }
      return goOn;
    });

    if (goOn) {
      const Typedname = {
        name: newName.name,
        number: newName.phone,
      };
      personService.create(Typedname).then((response) => {
        setPersons(persons.concat(response));

        setNewName({ name: "", phone: "" });
      });
    }
  };

  const personsToDisplay = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  const hook = () => {
    personService.getAll().then((response) => setPersons(response));
    // axios.get("http://localhost:3001/persons").then((response) => {
    //   setPersons(response.data);
    // });
  };

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleChangeSearch={handleChangeSearch} />
      <Personform
        newName={newName}
        handleChange={handleChange}
        addName={create}
      />
      <h2>Numbers</h2>
      <ol key={Math.random()}>
        {personsToDisplay.map((person) => {
          return (
            <Person key={person.name} person={person} handleDelete={Delete} />
          );
        })}
      </ol>
    </div>
  );
};

export default App;
