import PDevTextSection from "./PDevTextSection";
import React, { Suspense } from 'react';
import PDEVCanvasSection from "./three-js-components/Components/PDevCanvasSection";
import {
    SAMPLETEXT
} from './store/PDevText';


export default function PersonalDevelopment() {

    return(
        <Suspense fallback={<div className="spinner"><div className="spinner-border"></div></div>}>

        <div>
        <div className="PDevcol">
            <div className="PDevrow">
                <PDEVCanvasSection materialNumber={0}/>
                <PDevTextSection title={SAMPLETEXT.SAMPLETEXT_TITLE} textObj={SAMPLETEXT}/>
            </div>
            <div className="PDevrow">
                <PDevTextSection title={SAMPLETEXT.SAMPLETEXT_TITLE} textObj={SAMPLETEXT}/>
                <PDEVCanvasSection materialNumber={1}/>
            </div>
            <div className="PDevrow">
                <PDEVCanvasSection materialNumber={2}/>
                <PDevTextSection title={SAMPLETEXT.SAMPLETEXT_TITLE} textObj={SAMPLETEXT}/>
            </div>
        </div>
        </div>

        </Suspense>
    );
}
