import React , { useState , useRef} from 'react';
import './App.css';
import anime from 'animejs'

import Search from './Components/Search';
import EmojiCointainer from './Components/EmojiContainer';


function App() {
  const [state,setState] = useState('Null')
  const popupRef = useRef(null)

  function loadEmoji(data){
    setState(data)
  }
  function copyEmoji(text){
    navigator.clipboard.writeText(text)
    anime({
      targets: popupRef.current,
      keyframes: [
        {translateX: '-50%', duration: 1},
        {translateY: ['40%','0'], opacity: [0,1], duration: 1000},
        {opacity: [1,0]}
      ]
    })
  }

  return (
    <div className="App">
      <Search loadEmoji={loadEmoji}/>
      <EmojiCointainer data={state} copyEmoji={copyEmoji}/>
      <span ref={popupRef} className="popup">Copied</span>
    </div>
  );
}

export default App;
