import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import db from "./db/quotes.json"


const arrayColors = ["#ff5f7c", "#ffb8ec", "#ffbf75", "#c8ad8d", "#ff8862", "#3f8880", "#FFE4C4", "#00c6ab", "#ff81ff", "#7052ff", "#ebb7ce", "#20c67a" ]


const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length
  const randomIndex = Math.floor(Math.random() * quantityValues)
  return arrayElements[randomIndex];
};


function App() {
  

  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  };

  // console.log(getRandom(db));
  
  return (
    <div className="App" style ={{backgroundColor: color }}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color}
      />
    </div>
  )
}

export default App
