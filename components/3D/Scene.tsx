import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { PhoneModel } from './PhoneModel';

export const Scene: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Sync scroll for the 3D model
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        
        {/* Environment Reflections */}
        <Environment preset="studio" />
        
        {/* The Hero Model */}
        <PhoneModel scrollY={scrollY} />
      </Canvas>
    </div>
  );
};