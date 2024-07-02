import React from 'react';
import Heading from '../atoms/Heading';

type PropType = {
    heading: string;
    content?: any | null;
}

const Block: React.FC<PropType> = ({ heading, content }) => {
    return (
        <div className="block flex flex-1">
            <Heading text={heading} level={2} />
            <div>
                {content}
            </div>
        </div>
    );
};

export default Block;