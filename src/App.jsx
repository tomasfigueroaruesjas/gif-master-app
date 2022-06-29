import "./App.css";
import { BrowserRouter as Browser }  from 'react-router-dom';
import RoutesApp from "./routes/RoutesApp";
import NavbarApp from './components/NavbarApp'
import GifSearch from './components/GifSearch'

function App() {
  return (
    <Browser>
      <NavbarApp />
      <GifSearch />
      <RoutesApp />
    </Browser>
  )
}

export default App;
