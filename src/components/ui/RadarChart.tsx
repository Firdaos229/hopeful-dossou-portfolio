"use client";

import { useEffect, useRef } from "react";

interface RadarData {
  label: string;
  value: number;
}

interface RadarChartProps {
  data: RadarData[];
  size?: number;
}

export function RadarChart({ data, size = 200 }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.38;
    const n = data.length;
    const angleStep = (2 * Math.PI) / n;

    ctx.clearRect(0, 0, size, size);

    // Grid circles
    [0.25, 0.5, 0.75, 1].forEach((scale) => {
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + r * scale * Math.cos(angle);
        const y = cy + r * scale * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(0, 123, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Spokes
    for (let i = 0; i < n; i++) {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
      ctx.strokeStyle = "rgba(0, 123, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Data polygon
    ctx.beginPath();
    data.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const val = d.value / 100;
      const x = cx + r * val * Math.cos(angle);
      const y = cy + r * val * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0, "rgba(0, 217, 255, 0.3)");
    grad.addColorStop(1, "rgba(0, 123, 255, 0.1)");
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = "#007BFF";
    ctx.lineWidth = 2;
    ctx.shadowColor = "#007BFF";
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Labels
    ctx.font = "10px Inter, sans-serif";
    ctx.fillStyle = "#9CA3AF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    data.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const labelR = r + 22;
      const x = cx + labelR * Math.cos(angle);
      const y = cy + labelR * Math.sin(angle);
      ctx.fillText(d.label, x, y);
    });
  }, [data, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="mx-auto"
      style={{ maxWidth: "100%" }}
    />
  );
}
