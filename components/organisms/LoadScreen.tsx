import React, { useState, useEffect } from 'react';
import Heading from '../atoms/Heading';
import { Class } from "@/models/class";

type PropType = {
    setShowLoadScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadScreen: React.FC<PropType> = ({ setShowLoadScreen }) => {
    const [classes, setClasses] = useState<Class[]>([]);
    
    useEffect(() => {
        fetch('/api/classes')
          .then((response) => response.json())
          .then((data) => setClasses(data));
      }, []);
  
    return (
        <div className="load-screen w-full h-screen flex">
            <div className="load-screen__left w-1/3 p-20 h-full bg-black flex flex-col items-center justify-center">
                <Heading level={1} text="Skyrim Build Planner / Calculator" />
            </div>
            <div className="load-screen__right w-2/3 p-20 h-full bg-grey flex flex-col items-center justify-center">
                <p>Select a class</p>
                <select>
                    <option value="none">None</option>
                    {classes.map((c) => (
                        <option value={c.id}>{c.name}</option>
                    ))}
                </select>
                <button onClick={() => setShowLoadScreen(false)}>Start</button>
            </div>
        </div>
    );
};

export default LoadScreen;