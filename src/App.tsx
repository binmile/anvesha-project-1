import "./App.css";
import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  const personName = {
    first: "Alice",
    last: "Chopra",
  };

  const nameList = [
    {
      first: "Bob",
      last: "Sharma",
    },
    {
      first: "Lara",
      last: "Queens",
    },
    {
      first: "John",
      last: "Jadeja",
    },
  ];
  return (
    <div className="App">
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Di   Caprio</Heading>
      </Oscar>
      <Greet name='Anvesha' messageCount={10} isLoggedIn={false}/>
    </div>
  );
}

export default App;
