import React from 'react';
import SimpleFont from './SimpleFont';
import {
    projectTwo,
} from '../../../store/TextAttributes';

export default function PorjTwo() {
    return (
        <React.Fragment>
            <SimpleFont 
                message={projectTwo.p1_title_message}
                position={projectTwo.p1_title_position}
                size={projectTwo.p1_title_size}
                fadeInDelay={false}
            />
            <SimpleFont 
                message={projectTwo.p1_body_message}
                position={projectTwo.p1_body_position}
                size={projectTwo.p1_body_size}
                color={"#000000"}
                fadeInDelay={true}
            />
        </React.Fragment>
    )
  }
