import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>
          Filter search with{" "}
          <input value={search} type="text" onChange={handleChangeSearch} />
        </p>
      </div>
      <form onSubmit={addName}>
        <div>
          name:{" "}
          <input
            value={newName.name}
            onChange={(e) => handleChange(e.target.value, "name")}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newName.phone}
            onChange={(e) => handleChange(e.target.value, "phone")}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol key={Math.random()}>
        {personsToDisplay.map((person) => {
          return (
            <li key={person.name}>
              {person.name} {person.phone}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
