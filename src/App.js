import React, {useState} from 'react';
import ImgRender from './components/ImgRender'
import './App.css';

const App = ({imgArr}) => {

  const [scores, setScores] = useState(
    {
      roundScore: 0,
      bestScore:0,
      clickedOrNot: {
        stars: false,
        sunset: false,
        mountainReflection: false,
        horses: false,
        house: false,
        snowyMountain: false,
      },
  });

  const onClick = (e) => {
    const {dataset} = e.target

    if(scores.clickedOrNot[dataset.value] === false) {
      setScores({
        ...scores,
        roundScore: scores.roundScore + 1,
        clickedOrNot:{
          ...scores.clickedOrNot,
          [dataset.value]: true,
        }
      })
    } else {
      let highScore = scores.bestScore;
      
      scores.roundScore > scores.bestScore ?
      highScore = scores.roundScore : highScore = scores.bestScore;

      setScores({
        bestScore: highScore,
        roundScore: 0,
        clickedOrNot: {
          stars: false,
          sunset: false,
          mountainReflection: false,
          horses: false,
          house: false,
          snowyMountain: false,
        }
      })
    }
  };

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
  };

  const fileNameFinder = (imgTarget) => {
    const regEx = /(\w+)/g
    return imgTarget.match(regEx)[2]
    /* finds all actual words in the string
    and then returns the 3rd one, which is
    always the actual title of the piece */
  }
  const randomNumArr = randomOrderNumbers();
  console.log(scores)

  return (
    <div className='mainContainer'>
      <div className='greetingMessage'>
        <p>Click an Image! But dont click the same twice.</p>
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
          imgSrc = {imgArr[randomNumArr[0]]}
          stringFinder = {fileNameFinder}
          onClick= {onClick}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[1]]}
          stringFinder = {fileNameFinder}
          onClick= {onClick}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[2]]}
          stringFinder = {fileNameFinder}
          onClick= {onClick}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[3]]}
          stringFinder = {fileNameFinder}
          onClick= {onClick}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[4]]}
          stringFinder = {fileNameFinder}
          onClick= {onClick}/>
        <ImgRender
          imgSrc = {imgArr[randomNumArr[5]]}
          stringFinder = {fileNameFinder}
          onClick= {onClick}/>
      </div>
    </div>
  );
}

export default App;