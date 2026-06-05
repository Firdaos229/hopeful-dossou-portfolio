// Pure SVG radar chart — no client JS needed

interface RadarPoint {
  label: string;
  value: number; // 0–1
}

const defaultPoints: RadarPoint[] = [
  { label: "SIEM", value: 0.9 },
  { label: "Threat Hunting", value: 0.85 },
  { label: "Incident Response", value: 0.88 },
  { label: "Log Analysis", value: 0.92 },
  { label: "Scripting", value: 0.82 },
  { label: "Systèmes", value: 0.88 },
  { label: "Réseaux", value: 0.85 },
];

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleIndex: number,
  total: number
): [number, number] {
  const angle = (Math.PI * 2 * angleIndex) / total - Math.PI / 2;
  return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
}

export function SkillsRadar({ points = defaultPoints }: { points?: RadarPoint[] }) {
  const cx = 110;
  const cy = 110;
  const maxR = 80;
  const total = points.length;

  // Outer polygon points (max)
  const outerPoints = points
    .map((_, i) => polarToCartesian(cx, cy, maxR, i, total))
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  // Data polygon points
  const dataPoints = points
    .map((p, i) => polarToCartesian(cx, cy, maxR * p.value, i, total))
    .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");

  // Concentric rings (25%, 50%, 75%, 100%)
  const rings = [0.25, 0.5, 0.75, 1];

  // Axis lines
  const axes = points.map((_, i) => {
    const [x, y] = polarToCartesian(cx, cy, maxR, i, total);
    return { x, y };
  });

  // Label positions (slightly outside)
  const labels = points.map((p, i) => {
    const [x, y] = polarToCartesian(cx, cy, maxR + 18, i, total);
    return { ...p, x, y };
  });

  return (
    <svg viewBox="0 0 220 220" className="w-full max-w-xs mx-auto" fill="none">
      {/* Concentric rings */}
      {rings.map((r, ri) => {
        const pts = points
          .map((_, i) => polarToCartesian(cx, cy, maxR * r, i, total))
          .map(([x, y]) => `${x},${y}`)
          .join(" ");
        return (
          <polygon
            key={ri}
            points={pts}
            stroke={ri === 3 ? "rgba(0,123,255,0.3)" : "rgba(0,123,255,0.1)"}
            strokeWidth={ri === 3 ? 1 : 0.5}
            fill="none"
          />
        );
      })}

      {/* Axis lines */}
      {axes.map(({ x, y }, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={x}
          y2={y}
          stroke="rgba(0,123,255,0.15)"
          strokeWidth={0.5}
        />
      ))}

      {/* Data area */}
      <polygon
        points={dataPoints}
        fill="rgba(0,123,255,0.15)"
        stroke="#007BFF"
        strokeWidth={1.5}
      />

      {/* Data dots */}
      {points.map((p, i) => {
        const [x, y] = polarToCartesian(cx, cy, maxR * p.value, i, total);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={2.5}
            fill="#00D9FF"
            style={{ filter: "drop-shadow(0 0 4px rgba(0,217,255,0.8))" }}
          />
        );
      })}

      {/* Labels */}
      {labels.map(({ label, x, y }, i) => {
        const textAnchor =
          x < cx - 5 ? "end" : x > cx + 5 ? "start" : "middle";
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            fontSize={7}
            fill="#8892a4"
            fontFamily="'Courier New', monospace"
            letterSpacing={0.5}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
