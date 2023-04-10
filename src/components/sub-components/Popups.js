import React from 'react'
import Popup1 from './projects/Popup1';
import Popup2 from './projects/Popup2';
import Popup3 from './projects/Popup3';


function Popups(props) {

    return <div>
        <Popup1 trigger={props.trigger1} setTrigger={props.setTrigger1} />
        <Popup2 trigger={props.trigger2} setTrigger={props.setTrigger2} />
        <Popup3 trigger={props.trigger3} setTrigger={props.setTrigger3} />
    </div>
}

export default Popups;
