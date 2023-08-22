import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
// import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import {personName,nameList} from './components/DummyData';
import PersonList from "./components/PersonList";




function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Di   Caprio</Heading>
      </Oscar>
      <Greet name='Anvesha' messageCount={10} isLoggedIn={false}/>
      <Person first={personName.first} last={personName.last}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
