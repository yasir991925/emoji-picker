import React , { useState} from 'react';
import './App.css';
import Search from './Components/Search';
import EmojiCointainer from './Components/EmojiContainer';

function App() {
  const [state,setState] = useState([])

  function loadEmoji(data){
    setState(data)
  }

  return (
    <div className="App">
      <Search loadEmoji={loadEmoji}/>
      <EmojiCointainer data={state} />
    </div>
  );
}

export default App;
