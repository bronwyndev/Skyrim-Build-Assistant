'use client'

import Image from "next/image";
import Carousel from "../components/organisms/Carousel";
import { EmblaOptionsType } from 'embla-carousel'
import { PerkTree } from "@/models/perk";
import { useState, useEffect } from "react";

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Home() {
  const [perkTrees, setPerkTrees] = useState<PerkTree[]>([]);

  useEffect(() => {
    fetch('/api/perkTrees')
      .then((response) => response.json())
      .then((data) => setPerkTrees(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full">
        <Carousel slides={perkTrees} options={OPTIONS} />
      </div>
    </main>
  );
}
