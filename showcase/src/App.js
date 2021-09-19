import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import useWindowDimensions from './components/WindowDimentions';
import CanvasWelcome from './components/three-js-components/CanvasWelcome';
import DividerRedWaves from './components/Divider-RedWaves';
import CanvasProjects from './components/three-js-components/CanvasProjects';
import DividerRedPeaks from './components/DividerRedPeaks';
import PersonalDevelopment from './components/PersonalDeveloment';
import DividerSteps from './components/DividerSteps';
import FooterContainer from './components/FooterContainer';

function App() {
  const { height, width } = useWindowDimensions();

  const [continueAnyway, setcontinueAnyway] = useState(false)

  if (width > 769 || continueAnyway) {
    return(
      <Scrollbars style={{ width: width, height: height }} >
        
        <CanvasWelcome IcosahedronAmount={20} />
        <DividerRedWaves />
        <CanvasProjects />
        <DividerRedPeaks />
        <PersonalDevelopment />
        <DividerSteps />
        <FooterContainer />
      </Scrollbars>

    );
  } else {
    return (
      <div className="phoneUserDiv"> 
        <p> This site was made for wider screens, and your experience may be effected if you continue.</p>
        <p> <button onClick={() => {
          setcontinueAnyway(true)          
          }}> Continue Anyway </button> </p>
      </div>
    );
  }
}

export default App;