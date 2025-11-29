import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import { FEATURES, STEPS } from '../../constants';

export const PhoneModel = ({ scrollY }: { scrollY: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const height = viewport.height; // WebGL Viewport height units

  // --- CONFIGURATION ---
  // Define Scroll Regions in pixels (based on typical 100vh)
  const vh = window.innerHeight;
  
  // Timeline:
  // 0vh - 1vh: Hero (Enter from bottom to Right Side)
  // 1vh - 5vh: Features (Move Center, Rotate Landscape, Cycle Screens)
  // 5vh - 6vh: Transition (Rotate Portrait, Move Left)
  // 6vh - 10vh: How It Works (Stay Left, Cycle Screens)
  // 10vh+: Exit
  
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Current Scroll Progress in "Pages"
    const scrollPage = scrollY / vh;
    
    // Default Target State
    let tPos = new THREE.Vector3(0, -10, 0); // Start offscreen bottom
    let tRot = new THREE.Euler(0, 0, 0);
    
    // --- ANIMATION LOGIC ---

    if (scrollPage < 1) {
        // [HERO PHASE]
        // Enter from bottom to Position (2.5, -0.5, 0)
        const t = Math.min(scrollPage, 1);
        tPos.set(2.5, THREE.MathUtils.lerp(-10, -0.5, t), 0);
        tRot.set(0, -0.3, 0); // Slight angle looking left
    } 
    else if (scrollPage < 5) {
        // [FEATURES PHASE]
        // 1.0 -> 2.0: Move to Center and Rotate Landscape
        // 2.0 -> 5.0: Stay Center, screens change logic handled in render
        
        const localT = Math.min((scrollPage - 1), 1); // Transition period (1 page)
        
        // Lerp from Hero Position (Right) to Center (0,0)
        const startPos = new THREE.Vector3(2.5, -0.5, 0);
        const endPos = new THREE.Vector3(0, 0, 0);
        tPos.lerpVectors(startPos, endPos, localT);
        
        // Rotate Z to -PI/2 (Landscape)
        const startRotY = -0.3;
        const endRotZ = -Math.PI / 2;
        
        // We smooth rotate: Y goes back to 0, Z goes to -90deg
        tRot.y = THREE.MathUtils.lerp(startRotY, 0, localT);
        tRot.z = THREE.MathUtils.lerp(0, endRotZ, localT);
        
        // Add subtle floating breath
        tPos.y += Math.sin(state.clock.elapsedTime) * 0.05;

    } 
    else if (scrollPage < 6) {
        // [TRANSITION PHASE]
        // Move from Center Landscape to Left Portrait
        const localT = scrollPage - 5;
        
        const startPos = new THREE.Vector3(0, 0, 0);
        const endPos = new THREE.Vector3(-2.5, 0, 0);
        tPos.lerpVectors(startPos, endPos, localT);
        
        // Rotate back to Portrait
        const startRotZ = -Math.PI / 2;
        tRot.z = THREE.MathUtils.lerp(startRotZ, 0, localT);
        tRot.y = THREE.MathUtils.lerp(0, 0.3, localT); // Angle slightly right to face content

    } 
    else if (scrollPage < 10) {
        // [HOW IT WORKS PHASE]
        // Anchored Left (-2.5, 0, 0)
        // Move down slightly as we progress through steps to mimic "travel"
        const localT = (scrollPage - 6) / 4; // 0 to 1 over the 4 steps
        
        tPos.set(-2.5, THREE.MathUtils.lerp(0, -1.0, localT), 0);
        tRot.set(0, 0.3, 0);
        
    } else {
        // [EXIT]
        tPos.set(-2.5, -10, 0); // Drop down
    }

    // Apply Smoothing (Damping)
    // Using a lower smoothTime for "static in motion" feel (less springy, more mechanical)
    const smoothTime = 0.15; 
    
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, tPos.x, smoothTime);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, tPos.y, smoothTime);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, tPos.z, smoothTime);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tRot.x, smoothTime);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, tRot.y, smoothTime);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, tRot.z, smoothTime);
  });

  // Calculate current active screen index based on scroll
  const scrollPage = scrollY / vh;
  let activeFeatureIndex = -1;
  let activeStepIndex = -1;
  let mode: 'hero' | 'features' | 'steps' = 'hero';

  if (scrollPage >= 1 && scrollPage < 5) {
      mode = 'features';
      // Map 1.5-2.5 to Index 0, 2.5-3.5 to Index 1, etc.
      if (scrollPage > 1.5) activeFeatureIndex = 0;
      if (scrollPage > 2.5) activeFeatureIndex = 1;
      if (scrollPage > 3.5) activeFeatureIndex = 2;
      if (scrollPage > 4.5) activeFeatureIndex = 3;
  } else if (scrollPage >= 6) {
      mode = 'steps';
      if (scrollPage > 6.5) activeStepIndex = 0;
      if (scrollPage > 7.5) activeStepIndex = 1;
      if (scrollPage > 8.5) activeStepIndex = 2;
      if (scrollPage > 9.5) activeStepIndex = 3;
  }

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]}>
      <PhoneBody />
      <ScreenContent 
        mode={mode} 
        featureIndex={activeFeatureIndex} 
        stepIndex={activeStepIndex} 
      />
    </group>
  );
};

// --- SUBCOMPONENTS ---

const PhoneBody = () => (
    <>
      <RoundedBox args={[1.5, 3, 0.15]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.2} />
      </RoundedBox>
      <RoundedBox args={[1.52, 3.02, 0.14]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
      </RoundedBox>
    </>
);

const ScreenContent = ({ mode, featureIndex, stepIndex }: { mode: string, featureIndex: number, stepIndex: number }) => {
    return (
        <group position={[0, 0, 0.08]}>
            {/* Base Screen (Black) */}
            <RoundedBox args={[1.4, 2.9, 0.01]} radius={0.05} smoothness={4}>
                <meshStandardMaterial color="#000" metalness={0.5} roughness={0.2} />
            </RoundedBox>

            {/* Dynamic Content Layer */}
            <group position={[0, 0, 0.02]}>
                
                {/* HERO SCREEN */}
                {mode === 'hero' && (
                    <group>
                        <mesh position={[0, 1.2, 0]}>
                            <planeGeometry args={[1.2, 0.2]} />
                            <meshBasicMaterial color="#fff" />
                        </mesh>
                        <mesh position={[0, 0, 0]}>
                             <planeGeometry args={[0.5, 0.5]} />
                             <meshBasicMaterial color="#333" />
                        </mesh>
                        <Text position={[0, -0.5, 0]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">
                            KrewsUp
                        </Text>
                    </group>
                )}

                {/* FEATURE SCREENS (Landscape UI) */}
                {mode === 'features' && featureIndex >= 0 && (
                     <group rotation={[0, 0, Math.PI / 2]}> 
                        {/* Note: Parent is rotated landscape, so we counter-rotate UI if we want it Upright relative to world? 
                            No, the phone is landscape, so the UI should be landscape relative to the phone body (which is portrait). 
                            Wait, if phone rotates Z: -90, top becomes left. 
                            So we design UI as if phone is vertical, and it rotates with phone.
                        */}
                        <mesh position={[0, 0, -0.001]}>
                             <planeGeometry args={[1.3, 2.8]} />
                             <meshBasicMaterial color="#111" />
                        </mesh>
                        
                        <Text position={[0, 0.5, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle" maxWidth={1}>
                            {FEATURES[featureIndex]?.title || "Feature"}
                        </Text>
                        <Text position={[0, 0, 0]} fontSize={0.1} color="gray" anchorX="center" anchorY="middle" maxWidth={1} textAlign="center">
                            {FEATURES[featureIndex]?.description || ""}
                        </Text>
                        
                        {/* Fake UI Elements */}
                         <mesh position={[0, -0.8, 0]}>
                             <planeGeometry args={[0.8, 0.15]} />
                             <meshBasicMaterial color="#fff" />
                        </mesh>
                     </group>
                )}
                
                {/* STEPS SCREENS (Portrait UI) */}
                {mode === 'steps' && stepIndex >= 0 && (
                     <group>
                        <mesh position={[0, 1.2, 0]}>
                            <planeGeometry args={[1.4, 0.4]} />
                            <meshBasicMaterial color="#222" />
                        </mesh>
                        <Text position={[0, 1.2, 0.01]} fontSize={0.15} color="white">
                            {STEPS[stepIndex]?.number}
                        </Text>
                        
                        {/* Main Content Area */}
                        <mesh position={[0, 0.2, 0]}>
                            <planeGeometry args={[1.2, 1.5]} />
                            <meshBasicMaterial color="#1a1a1a" />
                        </mesh>
                        
                        <Text position={[0, 0.5, 0.01]} fontSize={0.18} color="white" maxWidth={1.1} textAlign="center">
                            {STEPS[stepIndex]?.title}
                        </Text>

                         <mesh position={[0, -1, 0]}>
                             <planeGeometry args={[1.2, 0.3]} />
                             <meshBasicMaterial color="#fff" />
                        </mesh>
                     </group>
                )}

            </group>
        </group>
    )
}
