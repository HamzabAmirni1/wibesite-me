import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 120;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Constants & Variables
    const PARTICLE_COUNT = 160;
    const MAX_DISTANCE = 40;
    
    // Mouse interaction variables
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    // Track dark mode status
    const isDarkMode = () => document.documentElement.classList.contains('dark');
    
    // Theme colors helper
    const getColors = () => {
      if (isDarkMode()) {
        return {
          particle: new THREE.Color('#818cf8'), // Indigo-400
          line: new THREE.Color('#312e81'),     // Indigo-900
          particleHover: new THREE.Color('#22d3ee') // Cyan-400
        };
      } else {
        return {
          particle: new THREE.Color('#4f46e5'), // Indigo-600
          line: new THREE.Color('#e0e7ff'),     // Indigo-100
          particleHover: new THREE.Color('#06b6d4') // Cyan-600
        };
      }
    };

    let colors = getColors();

    // 3. Create Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];
    const particleSizes = new Float32Array(PARTICLE_COUNT);

    // Randomize initial positions & velocities
    const boundsX = 140;
    const boundsY = 80;
    const boundsZ = 60;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * boundsX * 2;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * boundsY * 2;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * boundsZ * 2;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
        z: (Math.random() - 0.5) * 0.15
      });

      // Randomized sizes for depth
      particleSizes[i] = Math.random() * 2.5 + 1.0;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    // Create a circular particle texture using HTML Canvas
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Gradient fill for soft glowing circular particle
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleMaterial = new THREE.PointsMaterial({
      color: colors.particle,
      size: 2.2,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: createCircleTexture()
    });

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // 4. Create Line Connections
    // Dynamic lines buffer size: worst case is everyone connected (too big), 
    // let's cap at max expected connections to save memory
    const MAX_CONNECTIONS = 600;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(MAX_CONNECTIONS * 2 * 3); // 2 vertices per line, 3 coords per vertex
    const lineColors = new Float32Array(MAX_CONNECTIONS * 2 * 3);

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      depthWrite: false
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 5. Theme mutation observer
    const observer = new MutationObserver(() => {
      colors = getColors();
      particleMaterial.color.copy(colors.particle);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // 6. Interactive & Resize Events
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize to -1 to 1
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 7. Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse coordinates (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Parallax effect: tilt camera slightly
      camera.position.x = mouse.x * 25;
      camera.position.y = mouse.y * 20;
      camera.lookAt(0, 0, 0);

      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      
      let lineIndex = 0;
      const linePosAttr = lineGeometry.attributes.position.array as Float32Array;
      const lineColorAttr = lineGeometry.attributes.color.array as Float32Array;

      // Reset lines
      linePosAttr.fill(0);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Move particle
        const i3 = i * 3;
        positions[i3] += particleVelocities[i].x;
        positions[i3 + 1] += particleVelocities[i].y;
        positions[i3 + 2] += particleVelocities[i].z;

        // Bounce back from boundaries
        if (Math.abs(positions[i3]) > boundsX) particleVelocities[i].x *= -1;
        if (Math.abs(positions[i3 + 1]) > boundsY) particleVelocities[i].y *= -1;
        if (Math.abs(positions[i3 + 2]) > boundsZ) particleVelocities[i].z *= -1;

        // Subtle mouse push effect
        // Project mouse coordinates back into 3D space approximately
        const mouseProjX = mouse.x * boundsX * 0.8;
        const mouseProjY = mouse.y * boundsY * 0.8;
        
        const dx = positions[i3] - mouseProjX;
        const dy = positions[i3 + 1] - mouseProjY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        if (distToMouse < 35) {
          const force = (35 - distToMouse) * 0.005;
          positions[i3] += (dx / distToMouse) * force;
          positions[i3 + 1] += (dy / distToMouse) * force;
        }

        // Check for connections
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const j3 = j * 3;
          const dx2 = positions[i3] - positions[j3];
          const dy2 = positions[i3 + 1] - positions[j3 + 1];
          const dz2 = positions[i3 + 2] - positions[j3 + 2];
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);

          if (dist < MAX_DISTANCE && lineIndex < MAX_CONNECTIONS) {
            const lineI = lineIndex * 6;
            
            // Start point
            linePosAttr[lineI] = positions[i3];
            linePosAttr[lineI + 1] = positions[i3 + 1];
            linePosAttr[lineI + 2] = positions[i3 + 2];

            // End point
            linePosAttr[lineI + 3] = positions[j3];
            linePosAttr[lineI + 4] = positions[j3 + 1];
            linePosAttr[lineI + 5] = positions[j3 + 2];

            // Color gradient/fade based on distance
            const alpha = 1.0 - (dist / MAX_DISTANCE);
            
            // Copy line colors
            const lineColor = colors.line;
            const particleHover = colors.particleHover;
            const finalColor = distToMouse < 35 ? particleHover : lineColor;

            const colorI = lineIndex * 6;
            
            // Set colors for both vertices
            lineColorAttr[colorI] = finalColor.r * alpha * 0.5;
            lineColorAttr[colorI + 1] = finalColor.g * alpha * 0.5;
            lineColorAttr[colorI + 2] = finalColor.b * alpha * 0.5;

            lineColorAttr[colorI + 3] = finalColor.r * alpha * 0.5;
            lineColorAttr[colorI + 4] = finalColor.g * alpha * 0.5;
            lineColorAttr[colorI + 5] = finalColor.b * alpha * 0.5;

            lineIndex++;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      // Slow rotating of the entire constellation group
      particlePoints.rotation.y += 0.0004;
      lineSegments.rotation.y += 0.0004;
      
      particlePoints.rotation.x += 0.0002;
      lineSegments.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Memory cleanup
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default ThreeBackground;
