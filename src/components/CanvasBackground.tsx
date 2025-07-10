'use client'; // Penting: Ini menandakan komponen ini hanya berjalan di sisi klien

import React, { useRef, useEffect, useCallback } from 'react';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const initCanvas = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;

    let w = c.width = window.innerWidth;
    let h = c.height = window.innerHeight;
    const ctx = c.getContext('2d');

    if (!ctx) return;

    const opts = {
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: .05,
      spawnChance: 1,
      sparkChance: .1,
      sparkDist: 10,
      sparkSize: 2,

      color: 'hsl(hue,100%,light%)',
      baseLight: 50,
      addedLight: 10, // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: .01,
      addedLightInputMultiplier: .02,

      cx: w / 2,
      cy: h / 2,
      repaintAlpha: .04,
      hueChange: .1
    };

    let tick = 0;
    const lines: Line[] = []; // Gunakan array tipe Line
    let dieX = w / 2 / opts.len;
    let dieY = h / 2 / opts.len;

    const baseRad = Math.PI * 2 / 6;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    // Definisi Class Line di dalam scope fungsi initCanvas
    class Line {
      x: number;
      y: number;
      addedX: number;
      addedY: number;
      rad: number;
      lightInputMultiplier: number;
      color: string;
      cumulativeTime: number;
      time: number;
      targetTime: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.addedX = 0;
        this.addedY = 0;

        this.rad = 0;

        this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

        this.color = opts.color.replace('hue', String(tick * opts.hueChange)); // Konversi ke string
        this.cumulativeTime = 0;

        this.time = 0;
        this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

        this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
        this.addedX = Math.cos(this.rad);
        this.addedY = Math.sin(this.rad);
        this.beginPhase(); // Panggil beginPhase setelah properti dasar diinisialisasi
      }

      reset() {
        this.x = 0;
        this.y = 0;
        this.addedX = 0;
        this.addedY = 0;

        this.rad = 0;

        this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

        this.color = opts.color.replace('hue', String(tick * opts.hueChange));
        this.cumulativeTime = 0;

        this.beginPhase();
      }

      beginPhase() {
        this.x += this.addedX;
        this.y += this.addedY;

        this.time = 0;
        this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

        this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
        this.addedX = Math.cos(this.rad);
        this.addedY = Math.sin(this.rad);

        if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) {
          this.reset();
        }
      }

      step(ctx: CanvasRenderingContext2D) {
        ++this.time;
        ++this.cumulativeTime;

        if (this.time >= this.targetTime) {
          this.beginPhase();
        }

        const prop = this.time / this.targetTime;
        const wave = Math.sin(prop * Math.PI / 2);
        const x = this.addedX * wave;
        const y = this.addedY * wave;

        // Hitung posisi akhir partikel utama
        const particleX = opts.cx + (this.x + x) * opts.len;
        const particleY = opts.cy + (this.y + y) * opts.len;

        // Hitung nilai terang (light) yang dinamis dan buat string warna final
        const lightValue = opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier);
        const finalColor = this.color.replace('light', String(lightValue));

        // Terapkan efek dan gambar partikel utama
        ctx.shadowBlur = prop * opts.shadowToTimePropMult;
        ctx.fillStyle = ctx.shadowColor = finalColor;
        ctx.fillRect(particleX, particleY, 2, 2);

        // Secara acak buat dan gambar percikan (sparks)
        if (Math.random() < opts.sparkChance) {
          const sparkX = particleX + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2;
          const sparkY = particleY + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2;
          ctx.fillRect(sparkX, sparkY, opts.sparkSize, opts.sparkSize);
        }
      }
    } // Akhir definisi Class Line

    const loop = () => {
      tick++;

      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      if (lines.length < opts.count && Math.random() < opts.spawnChance) {
        lines.push(new Line());
      }

      lines.forEach(line => line.step(ctx));

      animationFrameId.current = window.requestAnimationFrame(loop);
    };

    loop(); // Mulai loop animasi

    const handleResize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, w, h);

      opts.cx = w / 2;
      opts.cy = h / 2;

      dieX = w / 2 / opts.len;
      dieY = h / 2 / opts.len;

      // Reset lines on resize to prevent particles going out of bounds badly
      lines.length = 0;
      for (let i = 0; i < opts.count; i++) {
        lines.push(new Line());
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Dependensi kosong, hanya berjalan sekali saat komponen dipasang

  useEffect(() => {
    initCanvas();
  }, [initCanvas]); // Panggil initCanvas saat komponen dipasang

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0" // fixed, isi seluruh layar, di belakang elemen lain
      style={{
        backgroundColor: '#0a0a0a' // Atur background di sini atau melalui CSS global
      }}
    />
  );
};

export default CanvasBackground;