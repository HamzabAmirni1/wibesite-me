import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const CarViewer3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 260;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background to fit card gradient

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3, 10);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2; // Don't let user go under floor
    controls.minDistance = 3;
    controls.maxDistance = 20;

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0x6366f1, 0.6); // Purple backlight tint
    dirLight2.position.set(-5, 5, -7);
    scene.add(dirLight2);

    let loadedObject: THREE.Group | null = null;

    // 6. Loader
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      '/models/car/google.mtl',
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          '/models/car/google.obj',
          (object) => {
            // Center the model in the scene
            const box = new THREE.Box3().setFromObject(object);
            const center = new THREE.Vector3();
            box.getCenter(center);
            object.position.sub(center); // Move center to 0,0,0

            // Adjust scale
            const size = new THREE.Vector3();
            box.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 5.5 / maxDim; // Normalize to fit scene viewport
            object.scale.set(scale, scale, scale);

            scene.add(object);
            loadedObject = object;
            setLoading(false);
          },
          undefined,
          (err) => {
            console.error('Error loading OBJ:', err);
            setError('Failed to load 3D OBJ model');
            setLoading(false);
          }
        );
      },
      undefined,
      (err) => {
        console.error('Error loading MTL:', err);
        // Fallback to loading OBJ without materials if MTL fails
        const objLoader = new OBJLoader();
        objLoader.load(
          '/models/car/google.obj',
          (object) => {
            const box = new THREE.Box3().setFromObject(object);
            const center = new THREE.Vector3();
            box.getCenter(center);
            object.position.sub(center);

            const size = new THREE.Vector3();
            box.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 5.5 / maxDim;
            object.scale.set(scale, scale, scale);

            // Apply default metallic material
            object.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x6366f1,
                  metalness: 0.8,
                  roughness: 0.2,
                });
              }
            });

            scene.add(object);
            loadedObject = object;
            setLoading(false);
          },
          undefined,
          (err2) => {
            console.error('Error loading OBJ fallback:', err2);
            setError('Failed to load 3D model');
            setLoading(false);
          }
        );
      }
    );

    // 7. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Auto rotate the car slowly
      if (loadedObject) {
        loadedObject.rotation.y += 0.005;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[260px] flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-indigo-500">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Loading 3D Model...</span>
        </div>
      )}
      {error && (
        <div className="text-red-500 text-xs font-semibold p-4 text-center">
          ⚠️ {error}
        </div>
      )}
      <div ref={containerRef} className="w-full h-full min-h-[260px] cursor-grab active:cursor-grabbing" />
    </div>
  );
};

export default CarViewer3D;
