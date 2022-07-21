import './App.css';
import Home from "./components/Home";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Home />
      </ThemeProvider> 
    </div>
  );
}

export default App;
