import DividerRedWaves from './components/Divider-RedWaves';
import { Scrollbars } from 'react-custom-scrollbars';
import useWindowDimensions from './components/WindowDimentions';
import CanvasWelcome from './components/three-js-components/CanvasWelcome';


function App() {
  const { height, width } = useWindowDimensions();
  return(
      <Scrollbars style={{ width: width, height: height }}>
        
        <CanvasWelcome IcosahedronAmount={20} />
                
        <DividerRedWaves />
        
      </Scrollbars>
  );
}

export default App;