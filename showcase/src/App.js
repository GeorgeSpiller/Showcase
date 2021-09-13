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

  return(
      <Scrollbars style={{ width: width, height: height }} >
        
        <CanvasWelcome IcosahedronAmount={20} />
        <DividerRedWaves />
        <CanvasProjects />
        <DividerRedPeaks />
        <FooterInfo />

      </Scrollbars>
  );
}

export default App;