import "./App.css";
import {nameList, personList} from './components/DummyData'
import Container from './components/Container';
import UseEffect from "./components/UseEffect";





function App() {
  return (
    <div className="App">
     <UseEffect names={nameList}/>
    </div>
  );
}

export default App;
