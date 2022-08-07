import React from 'react';
import {useState} from 'react';
import DialogBox from "./DialogBox";

const Nav = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(isShown => !isShown);
    };

    return (
        <div className="Nav">
            <button onClick={handleClick} className="filter">Filter</button>
            {
                isShown && <DialogBox />
            }
        </div>
    )
}


export default Nav;