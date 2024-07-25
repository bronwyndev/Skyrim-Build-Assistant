import React, { useState, useEffect } from 'react';
import Heading from '../atoms/Heading';
import { Class } from "@/models/class";

type PropType = {
    setShowLoadScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadScreen: React.FC<PropType> = ({ setShowLoadScreen }) => {
    const [classes, setClasses] = useState<Class[]>([]);
    const [selectedClassId, setSelectedClassId] = useState<string>('none');
    const [perks, setPerks] = useState<any[]>([]);
    
    useEffect(() => {
        fetch('/api/classes')
          .then((response) => response.json())
          .then((data) => setClasses(data));
      }, []);
  
      useEffect(() => {
        if (selectedClassId !== 'none') {
            // Fetch the perks for the selected class
            // This assumes you have an endpoint to fetch perks by class ID
            fetch(`/api/classes/${selectedClassId}/perks`)
              .then((response) => response.json())
              .then((data) => setPerks(data));
        } else {
            setPerks([]); // Reset perks if 'None' is selected
        }
    }, [selectedClassId]);

    const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedClassId(event.target.value);
    };

    return (
        <div className="load-screen w-full h-screen flex">
            <div className="load-screen__left w-1/3 p-20 h-full bg-black flex flex-col items-center justify-center">
                <Heading level={1} text="Skyrim Build Planner / Calculator" />
            </div>
            <div className="load-screen__right w-2/3 p-20 h-full bg-grey flex flex-col items-center justify-center">
                <p>Select a class</p>
                <select name='class' onChange={handleClassChange} value={selectedClassId}>
                    <option value="none">None</option>
                    {classes.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <button onClick={() => setShowLoadScreen(false)}>Start</button>
            </div>
        </div>
    );
};

export default LoadScreen;