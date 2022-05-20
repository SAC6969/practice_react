import './App.css';
import Test from './Test';

function App() {
  const name = 'Akash';
  const isloggedin = true
  return (
    <div className="App">
      {!isloggedin && 'hey '}
      {isloggedin && `hey ${name}`}
      <Test />
    </div>
  );
}

export default App;
