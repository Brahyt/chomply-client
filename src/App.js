import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(8);
  const [name, setName] = useState('')
  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Press</button>
      <button onClick={() => setCount(count * 2)}>Double It</button>
      <button onClick={() => setCount(0)}>ZERO</button>
      <form action="">
        <input type="text" /

        >
      </form>
    </div>
  );
}

export default App;
