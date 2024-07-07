import React from 'react';
import Block from '../molecules/Block';

const Footer: React.FC = () => {
    return (
        <footer className="w-full flex justify-between">
            <Block heading="Skyrim Perk Calculator" />
            <Block heading="Socials" />
        </footer>
    );
};

export default Footer;