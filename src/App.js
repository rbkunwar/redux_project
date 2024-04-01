import logo from "./logo.svg";
import "./App.css";
import { FormContainer } from "./components/FormContainer";
import { DispalyContainer } from "./components/DispalyContainer";

function App() {
  return (
    <div className="App App-header">
      <div className="parent-contgainer"></div>
      <header className=" main">
        <FormContainer />

        <hr />

        <DispalyContainer />
      </header>
    </div>
  );
}

export default App;
