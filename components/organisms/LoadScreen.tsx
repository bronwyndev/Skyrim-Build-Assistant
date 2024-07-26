import React, { useState, useEffect } from 'react';
import Heading from '../atoms/Heading';
import { Class } from "@/models/class";

type PropType = {
    setShowLoadScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const fetchClasses = async (): Promise<Class[]> => {
    const response = await fetch('/api/classes');
    if (!response.ok) {
        throw new Error('Failed to fetch classes');
    }
    return response.json();
};

const fetchPerks = async (classId: string): Promise<any[]> => {
    const response = await fetch(`/api/classes/${classId}/perks`);
    if (!response.ok) {
        throw new Error('Failed to fetch perks');
    }
    return response.json();
};

const LoadScreen: React.FC<PropType> = ({ setShowLoadScreen }) => {
    const [classes, setClasses] = useState<Class[]>([]);
    const [selectedClassId, setSelectedClassId] = useState<string>('none');
    const [perks, setPerks] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadClasses = async () => {
            try {
                const data = await fetchClasses();
                setClasses(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        };
        loadClasses();
    }, []);

    useEffect(() => {
        if (selectedClassId !== 'none') {
            const loadPerks = async () => {
                try {
                    const data = await fetchPerks(selectedClassId);
                    setPerks(data);
                } catch (err) {
                    if (err instanceof Error) {
                        setError(err.message);
                    } else {
                        setError('An unknown error occurred');
                    }
                }
            };
            loadPerks();
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
                <select name="class" onChange={handleClassChange} value={selectedClassId}>
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