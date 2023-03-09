import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  stars,
  sunset,
  mountainReflection,
  horses,
  house,
  snowyMountain} from './imgs/imgCompilation'

const imgArr = [stars,
                sunset,
                mountainReflection,
                house,
                snowyMountain,
                horses]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App imgArr={imgArr}/>
  </React.StrictMode>
);
