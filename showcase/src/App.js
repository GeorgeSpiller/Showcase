import HeaderCard from './components/HedderCard';
import DividerRedWaves from './components/Divider-RedWaves';
import CanvasEnv from './components/three-js-components/canvas';
import { Scrollbars } from 'react-custom-scrollbars';
import useWindowDimensions from './components/WindowDimentions';


function App() {
  const { height, width } = useWindowDimensions();
  return(
      <Scrollbars style={{ width: width, height: height }}>
        <HeaderCard text="Welcome"  letterSpacing="10px"/>
        <DividerRedWaves />
        <CanvasEnv />
      </Scrollbars>
  );
}


export default App;