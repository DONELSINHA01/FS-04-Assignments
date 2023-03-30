
import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  let [names, setNames] = useState('');
  let [name, setName] = useState([]);

  const handleChange = (event) => {
    setNames(event.target.value);
  }
  const handleClick = () => {
    setName(() => {
      return [...name, names];
    });
    setNames('');

  }

  return (
    <div className="App">
      <input type="text" value ={names} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>submit</button>

      <ul>
        {name.map((i)=>{
          return <List value={i}/>;
        })}
      </ul>
    </div>
  );
}

export default App;
