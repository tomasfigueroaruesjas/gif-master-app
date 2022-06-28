import "./App.css";
import { BrowserRouter as Browser }  from 'react-router-dom';
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <Browser>
      <RoutesApp />
    </Browser>
  )
}

export default App;
