import './App.css';
import ServiceProvider from './core/service/provider/provider';
import Home from './features/Home/index';

function App() {
  return (
    <ServiceProvider>
      <div className="App">
        <Home />
      </div>
    </ServiceProvider>
  );
}

export default App;
