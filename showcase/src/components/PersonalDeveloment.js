import PDevTextSection from "./PDevTextSection";
import React, { Suspense } from 'react';
import PDEVCanvasSection from "./three-js-components/Components/PDevCanvasSection";
import {
    PDevone,
    PDevtwo,
    PDevthree
} from './store/PDevText';


export default function PersonalDevelopment() {
    
    return(
        <Suspense fallback={<div className="spinner"><div className="spinner-border"></div></div>}>

        <div>
        <div className="PDevcol">
            <div className="PDevrow">
                <PDEVCanvasSection materialNumber={0}/>
                <PDevTextSection title={PDevone.title} location={PDevone.location} paragraph1={PDevone.text_p1} paragraph2={PDevone.text_p2} paragraph3={PDevone.text_p3}/>
            </div>
            <div className="PDevrow">
                <PDevTextSection title={PDevtwo.title} location={PDevtwo.location} paragraph1={PDevtwo.text_p1} paragraph2={PDevtwo.text_p2} paragraph3={PDevtwo.text_p3} link={"https://sponsoranangel.org/"}/>
                <PDEVCanvasSection materialNumber={1}/>
            </div>
            <div className="PDevrow">
                <PDEVCanvasSection materialNumber={2}/>
                <PDevTextSection title={PDevthree.title} location={PDevthree.location} paragraph1={PDevthree.text_p1} paragraph2={PDevthree.text_p2} paragraph3={PDevthree.text_p3} link={"https://www.campsuisse.com/summer-camp/"}/>
            </div>
        </div>
        </div>

        </Suspense>
    );
}
