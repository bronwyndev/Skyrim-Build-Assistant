'use client'

import Image from "next/image";
import Header from "../components/organisms/Header";
import Carousel from "../components/organisms/Carousel";
import { EmblaOptionsType } from 'embla-carousel'
import { PerkTree } from "@/models/perk";
import { useState, useEffect } from "react";

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Home() {
  const [totalCount, setTotalCount] = useState(0);
  const [perkTrees, setPerkTrees] = useState<PerkTree[]>([]);

  useEffect(() => {
    fetch('/api/perkTrees')
      .then((response) => response.json())
      .then((data) => setPerkTrees(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-t-12 p-b-12">
      <div className="w-full flex flex-1">
        <Carousel slides={perkTrees} options={OPTIONS} />
        <Header totalCount={totalCount} />
        <Carousel slides={perkTrees} options={OPTIONS} setTotalCount={setTotalCount} />
      </div>
    </main>
  );
}
