import React, { useState } from 'react'
import ReactDom from 'react-dom/client'
import './index.sass'
import Cardcomponent from './Card.jsx'
import PropTypes from 'prop-types'
import prop from 'prop'

const Tapper = () => {

    const [cunt, Up_cunt] = useState(0);

    const inc_bitch = (input_value) => Up_cunt(cunt + 2);

    return (
        <>

            <p>This is no. of cunt vansh have : {cunt}</p>
            <button onClick={inc_bitch}></button>

        </>
    );

}

const root = ReactDom.createRoot(document.getElementById('root'));

// Tapper.PropTypes = {

//     username: PropTypes.string

// }


root.render(
    <>
        <Tapper />
    </>
);