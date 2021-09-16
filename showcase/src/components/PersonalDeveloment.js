import PDevTextSection from "./PDevTextSection";
import PDEVCanvasSection from "./PDevCanvasSection";

export default function PersonalDevelopment() {
    return(
        <div className="PDevcol">
            <div className="PDevrow">
                <PDEVCanvasSection title={"CANVAS"} />
                <PDevTextSection title={"SOME TEXT"} text={"Madagascar"}/>
            </div>
            <div className="PDevrow">
                <PDevTextSection title={"SOME TEXT"} text={"South Africa"}/>
                <PDEVCanvasSection title={"CANVAS"} />
            </div>
            <div className="PDevrow">
                <PDEVCanvasSection title={"CANVAS"} />
                <PDevTextSection title={"SOME TEXT"} text={"Switzerland"}/>
            </div>
        </div>
    );
}
