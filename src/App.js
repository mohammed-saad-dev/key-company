import NavBar from "./components/NavBar";
import Main from './components/Main';
import People from "./components/People";
import './css file/App.css';
function App() {
  return (
    <div className="App container">
      <NavBar/>
      <Main/>
      <People/>
    </div>
  );
}

export default App;

