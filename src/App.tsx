import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first:'Alice',
    last:'Chopra',
  }

  const nameList=[
    {
      first:'Bob',
      last:'Sharma'
    },
    {
      first:'Lara',
      last:'Queens'
    },
    {
      first:'John',
      last:'Jadeja'
    }
  ]
  return (
    <div className="App">
      <Greet name="Anvesha" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
