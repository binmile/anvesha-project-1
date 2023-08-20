import "./App.css";
import {personList} from './components/DummyData';
import ListAndKeys from "./components/ListAndKeys";

import PersonList from "./components/PersonList";




function App() {
  console.log(personList);
  return (
    <div className="App">
      
      <ListAndKeys persons={personList}/>
    </div>
  );
}

export default App;
