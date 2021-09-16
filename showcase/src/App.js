import DividerRedWaves from './components/Divider-RedWaves';
import DividerRedPeaks from './components/DividerRedPeaks';
import FooterContainer from './components/FooterContainer';
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
        <FooterContainer />
        
        {/* Plan:
        - Next section located iether benieth or as a button
          to different page (below Porject Canvas)
        - This new section is dedicated to other 
          CV info (GAP Year, switzerland, ect. ect) 
        - Various, simpler Div sections with one half canvas,
          the other half text desription.
        - Canvas to contain cube with images as textures. Cube
          animates to show each face (image)
         */}

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