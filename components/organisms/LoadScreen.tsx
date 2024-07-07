import React, { useEffect } from 'react';
import Heading from '../atoms/Heading';

type PropType = {
    setShowLoadScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadScreen: React.FC<PropType> = ({ setShowLoadScreen }) => {

    return (
        <div className="load-screen w-full h-screen flex">
            <div className="load-screen__left w-1/3 p-20 h-full bg-black flex flex-col items-center justify-center">
                <Heading level={1} text="Skyrim Build Planner / Calculator" />
            </div>
            <div className="load-screen__right w-2/3 p-20 h-full bg-grey flex flex-col items-center justify-center">
                <p>Select a class</p>
                <select>
                    <option value="none">None</option>
                    <option value="warrior">Warrior</option>
                    <option value="mage">Mage</option>
                    <option value="thief">Thief</option>
                </select>
                <button onClick={() => setShowLoadScreen(false)}>Start</button>
            </div>
        </div>
    );
};

export default LoadScreen;