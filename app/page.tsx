'use client'

import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import Carousel from "../components/organisms/Carousel";
import { EmblaOptionsType } from 'embla-carousel'
import { PerkTree } from "@/models/perk";
import { useState, useEffect } from "react";

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Home() {
  const [totalCount, setTotalCount] = useState(0);
  const [perkTrees, setPerkTrees] = useState<PerkTree[]>([]);

  useEffect(() => {
    const starContainer = document.getElementById('star-container');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      starContainer?.appendChild(star);

      const circleSize = Math.random();
      if (circleSize > 0.9) {
        star.classList.add('large');
      } else if (circleSize < 0.5) {
        star.classList.add('small');
      }

      setTimeout(() => {
        animateStar(star);
      }, Math.random() * 5000);
    }

    function animateStar(star: HTMLDivElement) {
      const fadeDuration = getRandomNumber(5, 10) * 1000;
      star.style.transition = `opacity ${fadeDuration}ms`;
      star.style.opacity = '0.6';

      setTimeout(() => {
        star.style.opacity = '0';
      }, fadeDuration);

      setTimeout(() => {
        animateStar(star);
      }, fadeDuration * 2 + getRandomNumber(5, 20) * 1000);
    }

    function getRandomNumber(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
  }, []);

  useEffect(() => {
    fetch('/api/perkTrees')
      .then((response) => response.json())
      .then((data) => setPerkTrees(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-t-12 p-b-12">
      <div className="starry-sky" id="star-container"></div>
      <div className="w-full flex flex-1">
        <Header totalCount={totalCount} />
        <Carousel slides={perkTrees} options={OPTIONS} setTotalCount={setTotalCount} />
        <Footer />
      </div>
    </main>
  );
}
