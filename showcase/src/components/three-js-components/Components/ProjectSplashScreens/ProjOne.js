import React from 'react';
import SimpleFont from './SimpleFont';
import {
    projectOne,
} from './TextAttributes';

export default function PorjOne(props) {
    return (
        <React.Fragment>
            <SimpleFont 
                message={projectOne.p1_title_message}
                position={projectOne.p1_title_position}
                size={projectOne.p1_title_size}
                fadeInDelay={false}
            />
            <SimpleFont 
                message={projectOne.p1_body_message}
                position={projectOne.p1_body_position}
                size={projectOne.p1_body_size}
                fadeInDelay={false}
            />
        </React.Fragment>
    )
  }
