//import HeaderCard from './components/HedderCard';
import DividerRedWaves from './components/Divider-RedWaves';
import { Scrollbars } from 'react-custom-scrollbars';
import useWindowDimensions from './components/WindowDimentions';
import CanvasWelcome from './components/three-js-components/CanvasWelcome';


function App() {
  const { height, width } = useWindowDimensions();
  return(
      <Scrollbars style={{ width: width, height: height }}>
        
        <CanvasWelcome text="Welcome" position={[-3, 0, 0]} />
                
        <DividerRedWaves />
        
      </Scrollbars>
  );
}

// <HeaderCard text="Welcome"  letterSpacing="10px"/>
export default App;