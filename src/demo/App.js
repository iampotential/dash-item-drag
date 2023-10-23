/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';

import { DashItemDrag } from '../lib';

const App = () => {

    const [state, setState] = useState({value:'', label:'Type Here'});
    const setProps = (newProps) => {
            setState(newProps);
        };

    return (
        <div>
            <DashItemDrag
                setProps={setProps}
                {...state}
            />
        </div>
    )
};


export default App;
