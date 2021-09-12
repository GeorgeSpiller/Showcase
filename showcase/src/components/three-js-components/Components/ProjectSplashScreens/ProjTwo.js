import React from 'react';
import SimpleFont from './SimpleFont';
import {
    projectTwo,
} from './TextAttributes';

export default function PorjTwo() {
    return (
        <React.Fragment>
            <SimpleFont 
                message={projectTwo.p1_title_message}
                position={projectTwo.p1_title_position}
                size={projectTwo.p1_title_size}
            />
            <SimpleFont 
                message={projectTwo.p1_body_message}
                position={projectTwo.p1_body_position}
                size={projectTwo.p1_body_size}
            />
        </React.Fragment>
    )
  }
