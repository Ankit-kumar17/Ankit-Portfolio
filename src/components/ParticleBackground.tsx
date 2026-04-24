import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Fewer, smaller particles for a minimal look
    const particleCount = 400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const primaryColor = new THREE.Color("hsl(177, 70%, 50%)");
    const accentColor = new THREE.Color("hsl(280, 70%, 60%)");
    const dimColor = new THREE.Color("hsl(210, 30%, 40%)");

    for (let i = 0; i < particleCount; i++) {
      const radius = 6 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 5;

      const colorChoice = Math.random();
      let color;
      if (colorChoice < 0.3) {
        color = primaryColor.clone();
      } else if (colorChoice < 0.5) {
        color = accentColor.clone();
      } else {
        color = dimColor.clone();
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 1.5 + 0.3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float uTime;
        uniform float uPixelRatio;
        
        void main() {
          vColor = color;
          
          vec3 pos = position;
          pos.x += sin(uTime * 0.15 + position.y * 0.3) * 0.15;
          pos.y += cos(uTime * 0.1 + position.x * 0.3) * 0.15;
          pos.z += sin(uTime * 0.08 + position.z * 0.2) * 0.1;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * uPixelRatio * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= 0.35;
          
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle connecting lines — fewer and more transparent
    const lineGeometry = new THREE.BufferGeometry();
    const lineCount = 60;
    const linePositions = new Float32Array(lineCount * 6);
    const lineColors = new Float32Array(lineCount * 6);

    for (let i = 0; i < lineCount; i++) {
      const idx1 = Math.floor(Math.random() * particleCount);
      const idx2 = Math.floor(Math.random() * particleCount);

      linePositions[i * 6] = positions[idx1 * 3];
      linePositions[i * 6 + 1] = positions[idx1 * 3 + 1];
      linePositions[i * 6 + 2] = positions[idx1 * 3 + 2];
      linePositions[i * 6 + 3] = positions[idx2 * 3];
      linePositions[i * 6 + 4] = positions[idx2 * 3 + 1];
      linePositions[i * 6 + 5] = positions[idx2 * 3 + 2];

      const lineColor = primaryColor.clone().lerp(accentColor, Math.random());
      lineColors[i * 6] = lineColor.r;
      lineColors[i * 6 + 1] = lineColor.g;
      lineColors[i * 6 + 2] = lineColor.b;
      lineColors[i * 6 + 3] = lineColor.r;
      lineColors[i * 6 + 4] = lineColor.g;
      lineColors[i * 6 + 5] = lineColor.b;
    }

    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.04,
      blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // One subtle wireframe icosahedron — very transparent
    const icoGeometry = new THREE.IcosahedronGeometry(2, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(4, -1, -6);
    scene.add(icosahedron);

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;

      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = elapsedTime * 0.005;
      lines.rotation.y = elapsedTime * 0.015;
      lines.rotation.x = elapsedTime * 0.005;

      icosahedron.rotation.x = elapsedTime * 0.05;
      icosahedron.rotation.z = elapsedTime * 0.03;

      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.01;
      camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.01;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
