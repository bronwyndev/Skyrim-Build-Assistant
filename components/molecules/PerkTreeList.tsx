'use client'

import React, { useEffect, useState } from 'react';
import { PerkTree } from '../../models/perk';

type PropType = {
  perks: PerkTree['perks'];
};

const PerkTreeList: React.FC<PropType> = (props) => {
  const { perks } = props;

  return (
    <canvas>
      {perks.map((perk) => (
        <div key={perk.id}>
          <h3>{perk.name}</h3>
          <p>{perk.description}</p>
        </div>
      ))}
    </canvas>
  );
};

export default PerkTreeList;