import React, { useRef, useEffect } from 'react';

/**
 * VideoWaveCanvas - Animated audio waveform + play button visual
 * Used as a decorative hero visual on the Videos page.
 */
const VideoWaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const BAR_COUNT = 60;

    const draw = () => {
      t += 0.03;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Background glow
      const grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.6);
      grad.addColorStop(0, 'rgba(239,68,68,0.08)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Waveform bars
      const barW = W / (BAR_COUNT * 1.6);
      const gap = (W - barW * BAR_COUNT) / (BAR_COUNT + 1);

      for (let i = 0; i < BAR_COUNT; i++) {
        const phase = (i / BAR_COUNT) * Math.PI * 4;
        const amp = (Math.sin(phase + t) * 0.5 + 0.5) * (H * 0.5) + H * 0.08;
        const x = gap + i * (barW + gap);
        const y = (H - amp) / 2;

        // Color pulse: red → pink → red
        const hue = 340 + Math.sin(phase + t * 0.5) * 30;
        const alpha = 0.4 + (amp / (H * 0.6)) * 0.5;
        ctx.fillStyle = `hsla(${hue}, 90%, 60%, ${alpha})`;

        const radius = barW / 2;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, amp, radius);
        ctx.fill();
      }

      // Center play button circle
      const cx = W / 2;
      const cy = H / 2;
      const pulse = 1 + Math.sin(t * 2) * 0.04;
      const r = Math.min(W, H) * 0.13 * pulse;

      // Glow ring
      ctx.beginPath();
      ctx.arc(cx, cy, r + 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(239,68,68,0.3)';
      ctx.lineWidth = 10;
      ctx.stroke();

      // Red circle
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(220,38,38,0.88)';
      ctx.fill();

      // Play triangle
      const ts = r * 0.42;
      ctx.beginPath();
      ctx.moveTo(cx - ts * 0.6, cy - ts);
      ctx.lineTo(cx - ts * 0.6, cy + ts);
      ctx.lineTo(cx + ts, cy);
      ctx.closePath();
      ctx.fillStyle = 'white';
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default VideoWaveCanvas;
