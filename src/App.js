import './App.css';
import { Route } from 'react-router-dom'
import PopularWords from "./components/PopularWords"
import Evntz from './components/EVNTZ';
import YrWeekend from "./components/YrWeeknd"

function App() {
  return (
    <div>
      <Route path="/popularwords">
        <PopularWords />
      </Route>

      <Route path="/evntz">
        <Evntz />
      </Route>

      <Route>
        <YrWeekend path="/yrweeknd"/>
      </Route>
    </div>
    
  );
}

export default App;
