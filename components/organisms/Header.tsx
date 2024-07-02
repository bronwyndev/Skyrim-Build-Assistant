import React from 'react';
import Block from '../molecules/Block';

type PropType = {
    totalCount: number;
}

const Header: React.FC<PropType> = ({ totalCount }) => {
    return (
        <header className="w-full flex justify-center absolute">
            <div className="header-block flex w-2/3 my-6 p-2 bg-black border-y border-white">
                <Block heading="Total perk count" content={totalCount} />
                <Block heading="Level" content={totalCount + 1} />
                <Block heading="Class" />
            </div>
        </header>
    );
};

export default Header;