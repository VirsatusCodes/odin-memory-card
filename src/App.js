import React, {useState, useEffect} from 'react';
import ImgRender from './components/ImgRender'
import './App.css';

const App = ({imgArr}) => {

  const [scores, setScores] = useState(
    {
      roundScore: 0,
      bestScore:0,
  })

  const randomOrderNumbers = () => {
    const randomNumArr = []
    const numberOfImages = 6
    const maxValueInRandomNumArr = 6
    /* for 0-5 values, have to use 6 because of Math.floor */

    while(randomNumArr.length < numberOfImages) {
      const num = Math.floor(Math.random() * maxValueInRandomNumArr)
      
      if(randomNumArr.find(number => number === num) === undefined) {
        randomNumArr.push(num)
      }
    }
    return randomNumArr
  }

  const randomNumArr = randomOrderNumbers()
  /* change this to use effect once clicking changing state
  is functional to rerender on clicking state change */

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
        <ImgRender
          imgSrc = {imgArr[randomNumArr[0]]}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[1]]}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[2]]}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[3]]}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[4]]}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[5]]}/>
      </div>
    </div>
  );
}

export default App;
