import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { EastBlueSection } from './components/EastBlueSection';
import { CrewSection } from './components/CrewSection';
import { MapSection } from './components/MapSection';
import { DevilFruitSection } from './components/DevilFruitSection';
import { BattlesSection } from './components/BattlesSection';
import { TreasureSection } from './components/TreasureSection';

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create an audio element for atmospheric music
    // Using a subtle epic/orchestral track placeholder
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3');
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        autoPlayAudio();
      }
    }
  }, [isMuted]);

  const autoPlayAudio = async () => {
    try {
      await audioRef.current?.play();
    } catch (error) {
      console.log("Audio autoplay prevented by browser. User must interact first.");
      setIsMuted(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-ocean-900 text-white min-h-screen selection:bg-gold-500/30 selection:text-gold-200 overflow-hidden">
      <HeroSection isMuted={isMuted} toggleMute={toggleMute} />
      <EastBlueSection />
      <CrewSection />
      <MapSection />
      <DevilFruitSection />
      <BattlesSection />
      <TreasureSection />
    </div>
  );
}
