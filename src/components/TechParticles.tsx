'use client'; // This directive is essential for client-side functionality

import React, { useEffect, useRef, useCallback, useState } from 'react';

// --- Type Definitions for Clarity and Safety ---
interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  phase: number;
}

interface MouseBall extends Ball {
  type: 'mouse';
}

// --- Constants (originally global variables) ---
const BALL_NUM = 30; // Number of particles/balls

const ball_color = {
  r: 207,
  g: 255,
  b: 4,
}; // Color of the particles (yellow-ish green)

const R = 2; // Radius of each particle
const alpha_f = 0.03; // Alpha phase change factor

// Line properties
const link_line_width = 0.8;
const dis_limit = 260; // Max distance for lines to be drawn between particles
const add_mouse_point = true; // Whether the mouse position adds a "ball"

// --- TechParticles Component ---
const TechParticles = () => {
  // --- Refs to persist values across renders ---
  const canvasRef = useRef<HTMLCanvasElement>(null); // Reference to the canvas DOM element
  const animationFrameId = useRef<number | null>(null); // Stores the ID of the requestAnimationFrame loop
  const ballsRef = useRef<(Ball | MouseBall)[]>([]); // Array to hold all particle objects
  const mouseInRef = useRef(false); // Flag for mouse entering/leaving canvas
  const mouseBallRef = useRef<MouseBall>({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0, // Mouse ball radius is 0, it's just a point
    type: 'mouse', // Special type for mouse "ball"
    alpha: 1, // Add missing properties to conform to Ball
    phase: 0,
  });

  // --- State for canvas dimensions (to trigger re-renders on resize) ---
  const [canW, setCanW] = useState(0);
  const [canH, setCanH] = useState(0);

  // --- Helper Functions (memoized with useCallback) ---

  const randomNumFrom = useCallback((min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }, []);

  const randomArrayItem = useCallback((arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }, []);

  const getRandomSpeed = useCallback((pos: string) => {
    const min = -1;
    const max = 1;
    switch (pos) {
      case 'top':
        return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
      case 'right':
        return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
      case 'bottom':
        return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
      case 'left':
        return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
      default:
        return [0, 0]; // Default fallback
    }
  }, [randomNumFrom]);

  const randomSidePos = useCallback((length: number) => {
    return Math.ceil(Math.random() * length);
  }, []);

  const getRandomBall = useCallback((): Ball => {
    const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch (pos) {
      case 'top':
        return {
          x: randomSidePos(canW),
          y: -R,
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'right':
        return {
          x: canW + R,
          y: randomSidePos(canH),
          vx: getRandomSpeed('right')[0],
          vy: getRandomSpeed('right')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'bottom':
        return {
          x: randomSidePos(canW),
          y: canH + R,
          vx: getRandomSpeed('bottom')[0],
          vy: getRandomSpeed('bottom')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'left':
        return {
          x: -R,
          y: randomSidePos(canH),
          vx: getRandomSpeed('left')[0],
          vy: getRandomSpeed('left')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      default:
        return { x: 0, y: 0, vx: 0, vy: 0, r: R, alpha: 1, phase: 0 };
    }
  }, [canW, canH, getRandomSpeed, randomArrayItem, randomNumFrom, randomSidePos]);

  const getDisOf = useCallback((b1: Ball, b2: Ball) => {
    const delta_x = Math.abs(b1.x - b2.x);
    const delta_y = Math.abs(b1.y - b2.y);
    return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
  }, []);

  // --- Canvas Initialization ---
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Set canvas dimensions to window inner dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Update state, triggering re-render if dimensions changed
      setCanW(window.innerWidth);
      setCanH(window.innerHeight);
    }
  }, []); // No dependencies needed as it accesses window directly

  // --- Ball Initialization ---
  const initBalls = useCallback(() => {
    // Clear existing balls before re-initialization
    ballsRef.current = [];
    for (let i = 1; i <= BALL_NUM; i++) {
      ballsRef.current.push({
        x: randomSidePos(canW),
        y: randomSidePos(canH),
        vx: getRandomSpeed('top')[0], // Initial speed can be random from any side
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      });
    }
  }, [canW, canH, getRandomSpeed, randomNumFrom, randomSidePos]);

  // --- Animation Loop Functions ---

  const renderBalls = useCallback((ctx: CanvasRenderingContext2D) => {
    ballsRef.current.forEach((b) => {
      // Only render particles that are not the mouse "type"
      if (!('type' in b)) {
        ctx.fillStyle = `rgba(${ball_color.r},${ball_color.g},${ball_color.b},${b.alpha})`;
        ctx.beginPath();
        ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }
    });
  }, []);

  const updateBalls = useCallback(() => {
    const new_balls: (Ball | MouseBall)[] = [];
    ballsRef.current.forEach((b) => {
      b.x += b.vx;
      b.y += b.vy;

      // Keep ball if it's within a reasonable margin of the canvas
      if (b.x > -50 && b.x < canW + 50 && b.y > -50 && b.y < canH + 50) {
        new_balls.push(b);
      }

      // Alpha (opacity) change effect
      b.phase += alpha_f;
      b.alpha = Math.abs(Math.cos(b.phase));
    });

    ballsRef.current = new_balls; // Update the balls array
  }, [canW, canH]);

  const renderLines = useCallback((ctx: CanvasRenderingContext2D) => {
    let fraction, alpha;
    for (let i = 0; i < ballsRef.current.length; i++) {
      for (let j = i + 1; j < ballsRef.current.length; j++) {
        fraction = getDisOf(ballsRef.current[i], ballsRef.current[j]) / dis_limit;

        if (fraction < 1) {
          alpha = (1 - fraction).toString(); // Calculate alpha based on distance

          ctx.strokeStyle = `rgba(150,150,150,${alpha})`; // Gray lines with varying opacity
          ctx.lineWidth = link_line_width;

          ctx.beginPath();
          ctx.moveTo(ballsRef.current[i].x, ballsRef.current[i].y);
          ctx.lineTo(ballsRef.current[j].x, ballsRef.current[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }, [getDisOf]);

  const addBallIfy = useCallback(() => {
    // Add new balls if the count is below the desired number
    if (ballsRef.current.length < BALL_NUM) {
      ballsRef.current.push(getRandomBall());
    }
  }, [getRandomBall]);

  // The main animation loop function
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canW, canH); // Clear the entire canvas

    renderBalls(ctx); // Draw all particles
    renderLines(ctx); // Draw lines between particles
    updateBalls(); // Update particle positions and properties
    addBallIfy(); // Add new particles if needed

    // Request next animation frame
    animationFrameId.current = window.requestAnimationFrame(render);
  }, [canW, canH, renderBalls, renderLines, updateBalls, addBallIfy]);

  // --- Mouse Event Handlers ---
  const handleMouseEnter = useCallback(() => {
    mouseInRef.current = true;
    if (add_mouse_point) {
      ballsRef.current.push(mouseBallRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseInRef.current = false;
    if (add_mouse_point) {
      // Remove the mouse "ball" from the array
      ballsRef.current = ballsRef.current.filter((b) => !('type' in b));
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (mouseInRef.current) {
      mouseBallRef.current.x = e.pageX;
      mouseBallRef.current.y = e.pageY;
    }
  }, []);

  // --- useEffect for Component Lifecycle Management ---
  useEffect(() => {
    // Initialize canvas and balls when component mounts
    initCanvas();
    initBalls();

    // Start the animation loop
    animationFrameId.current = window.requestAnimationFrame(render);

    // Event listener for window resize
    const handleResize = () => {
      initCanvas(); // Reinitialize canvas size
      initBalls(); // Reinitialize balls to adapt to new size
    };
    window.addEventListener('resize', handleResize);

    // Event listeners for mouse interaction on the canvas
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup function: runs when component unmounts
    return () => {
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current); // Stop the animation loop
      }
      window.removeEventListener('resize', handleResize); // Remove resize listener
      if (canvas) {
        // Remove mouse listeners
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [initCanvas, initBalls, render, handleMouseEnter, handleMouseLeave, handleMouseMove]); // Dependencies for useEffect

  // --- JSX for the component ---
  return (
    <canvas
      id="nokey"
      ref={canvasRef}
      className="absolute inset-0 z-0" // Positions canvas as absolute background
      style={{
        display: 'block', // Removes default browser margins/padding
        backgroundColor: 'transparent', // Ensures canvas background is transparent
      }}
    ></canvas>
  );
};

export default TechParticles;