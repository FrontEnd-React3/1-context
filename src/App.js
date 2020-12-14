import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./ComponentC";
import ComponentE from "./ComponentE";
import { UserProvider } from "./userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Vishwas">
      <ComponentC /><br/>
      <ComponentE />
      </UserProvider>
    </div>
  );
}

export default App;
