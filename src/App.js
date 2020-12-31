import './App.css';
import Header from './components/layout/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/layout/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
