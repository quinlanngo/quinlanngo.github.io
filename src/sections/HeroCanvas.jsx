import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './HeroCanvas.css';

function HeroCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.setZ(30);

    const geometry = new THREE.ConeGeometry(20, 40, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff00ff,
      flatShading: true,
      shininess: 20,
    });
    geometry.computeVertexNormals();
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.03);
    const keyLight = new THREE.PointLight(0xffffff, 10, 0, 1.5);
    keyLight.position.set(-25, 20, 20);
    const rimLight = new THREE.PointLight(0x8888ff, 1.5, 0, 2);
    rimLight.position.set(20, -10, -25);

    scene.add(keyLight, rimLight, ambientLight);

    // Stars now orbit around the cone instead of sitting static in space
    const stars = [];

    function addStar() {
      const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      // Orbit parameters, randomized per star
      const radius = THREE.MathUtils.randFloat(30, 70); // distance from center
      const angle = Math.random() * Math.PI * 2; // starting position around the orbit
      const speed = 0.1;
      const y = THREE.MathUtils.randFloatSpread(60); 
      const tilt = THREE.MathUtils.randFloatSpread(0.5); 

      stars.push({ mesh: star, radius, angle, speed, y, tilt });

      star.position.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
      scene.add(star);
    }

    Array(500).fill().forEach(addStar);

    let animationId;
    function animate() {
      animationId = requestAnimationFrame(animate);

      // Update each star's position along its orbit
      stars.forEach((s) => {
        s.angle += s.speed * 0.01;
        s.mesh.position.x = Math.cos(s.angle) * s.radius;
        s.mesh.position.z = Math.sin(s.angle) * s.radius;
        s.mesh.position.y = s.y + Math.sin(s.angle) * s.tilt * s.radius;
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

export default HeroCanvas;