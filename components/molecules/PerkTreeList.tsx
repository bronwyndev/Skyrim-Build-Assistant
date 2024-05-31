'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Perk, PerkTree } from '../../models/perk';

type PropType = {
  perks: PerkTree['perks'];
};


const PerkTreeList: React.FC<PropType> = (props) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { perks } = props;

  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return; // Shouldn't happen, but just in case...

    const context = canvas.getContext('2d');
    if (!context) return; // Shouldn't happen, but just in case...

    let previousPerk: Perk | null = null;

    // Loop through the perks, and let's draw!
    perks.forEach((perk) => {
      
      // Check for previous perk, if yes then let's draw a connecting lines
      // We do this first so that the lines are drawn below the stars
      if (previousPerk) {
        context.beginPath();
        context.moveTo(previousPerk.coords.x, previousPerk.coords.y);
        context.lineTo(perk.coords.x, perk.coords.y);
        context.lineWidth = 2;
        context.strokeStyle = 'yellow';
        context.stroke();
      }

      // Let's draw a star for the perk
      context.beginPath();
      context.arc(perk.coords.x, perk.coords.y, 6, 0, 2 * Math.PI);
      context.fillStyle = 'yellow';
      context.shadowColor = 'yellow';
      context.shadowBlur = 8;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.fill();

      // Reset shadow properties so it doesn't affect other drawings
      context.shadowColor = 'transparent';
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      // Set previous perk to current perk, so that we can draw a line to it in the next iteration
      previousPerk = perk;

    });

  }, []);

  return (
    <canvas ref={canvasRef}>
    </canvas>
  );
};

export default PerkTreeList;