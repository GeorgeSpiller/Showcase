import DividerRedWaves from './components/Divider-RedWaves';
import DividerRedPeaks from './components/DividerRedPeaks';
import FooterInfo from './components/FooterInfo';
import { Scrollbars } from 'react-custom-scrollbars';
import useWindowDimensions from './components/WindowDimentions';
import CanvasWelcome from './components/three-js-components/CanvasWelcome';
import CanvasProjects from './components/three-js-components/CanvasProjects';
import React, { useState } from 'react';


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
        <FooterInfo />

      </Scrollbars>

    );
  } else {
    return (
      <div className="smallWidthDiv footerFonts"> 
        <p> This site was made for wider screens, and your experience may be effected if you continue.</p>
        <p> <button onClick={() => {
          setcontinueAnyway(true)
          console.log(continueAnyway)
          
          }}> Continue Anyway </button> </p>
      </div>
    );
  }
}

export default App;