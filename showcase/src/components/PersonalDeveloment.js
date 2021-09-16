import PDevTextSection from "./PDevTextSection";
import PDEVCanvasSection from "./PDevCanvasSection";
import {
    SAMPLETEXT
} from './store/PDevText';

export default function PersonalDevelopment() {
    return(
        <div className="PDevcol">
            <div className="PDevrow">
                <PDEVCanvasSection title={"CANVAS"} />
                <PDevTextSection title={SAMPLETEXT.SAMPLETEXT_TITLE} textObj={SAMPLETEXT}/>
            </div>
            <div className="PDevrow">
                <PDevTextSection title={SAMPLETEXT.SAMPLETEXT_TITLE} textObj={SAMPLETEXT}/>
                <PDEVCanvasSection title={"CANVAS"} />
            </div>
            <div className="PDevrow">
                <PDEVCanvasSection title={"CANVAS"} />
                <PDevTextSection title={SAMPLETEXT.SAMPLETEXT_TITLE} textObj={SAMPLETEXT}/>
            </div>
        </div>
    );
}
