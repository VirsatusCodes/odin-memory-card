import React, {useState, useEffect} from 'react';
import ImgRender from './components/ImgRender'
import './App.css';

const App = () => {

  const [scores, setScores] = useState(
    {
      roundScore: 0,
      bestScore:0,
  })

  const randomOrderNumbers = () => {
    const randomNumArr = []
    const numberOfImages = 10
    const maxValueInRandomNumArr = 10
    /* for 0-9 values, have to use 10 because of Math.floor */

    while(randomNumArr.length < numberOfImages) {
      const num = Math.floor(Math.random() * maxValueInRandomNumArr)
      
      if(randomNumArr.find(number => number === num) === undefined) {
        randomNumArr.push(num)
      }
    }
    return randomNumArr
  }
  
  return (
    <div className='mainContainer'>
      <div className='greetingMessage'>
        <p>Click an Image!</p>
      </div>
      <div className='scoreContainers'>
        <div className='score'>
        your current score is:{scores.roundScore}
        </div>
        <div className='score'>
        your best score is:{scores.bestScore}
        </div>
      </div>
      <div className='imgContainers'>
        <ImgRender/>
        <ImgRender/>
      </div>
    </div>
  );
}

export default App;
