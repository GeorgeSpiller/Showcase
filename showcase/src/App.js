import DividerRedWaves from './components/Divider-RedWaves';
import DividerRedPeaks from './components/DividerRedPeaks';
import FooterInfo from './components/FooterInfo';
import { Scrollbars } from 'react-custom-scrollbars';
import useWindowDimensions from './components/WindowDimentions';
import CanvasWelcome from './components/three-js-components/CanvasWelcome';
import CanvasProjects from './components/three-js-components/CanvasProjects';
import React  from 'react';


function App() {
  const { height, width } = useWindowDimensions();
  if (width > 769) {
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
        <p> Nah mate, no phones allowed, this site looks so much better in HDDDDDDDDDD</p>
        <p> Get urself over to a laptop or PC for the full experience. Or... turn ur phone sideways??</p>
      </div>
    );
  }
}

export default App;