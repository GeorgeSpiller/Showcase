import React from 'react';
import SimpleFont from './SimpleFont';
import {
    projectThree,
} from './TextAttributes';

export default function PorjTwo() {
    return (
        <React.Fragment>
            <SimpleFont 
                message={projectThree.p1_title_message}
                position={projectThree.p1_title_position}
                size={projectThree.p1_title_size}
            />
            <SimpleFont 
                message={projectThree.p1_body_message}
                position={projectThree.p1_body_position}
                size={projectThree.p1_body_size}
            />
        </React.Fragment>
    )
  }
