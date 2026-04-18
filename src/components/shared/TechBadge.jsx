import { useState } from 'react';

export function TechBadge({ name, color = 'var(--color-primary)' }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-flex items-center font-mono text-xs px-3 py-1.5 transition-all duration-200 cursor-default select-none relative overflow-hidden"
      style={{
        backgroundColor: hovered ? `${color}33` : 'var(--color-bg-elevated)',
        color: hovered ? '#fff' : 'var(--color-text-muted)',
        border: `1px solid ${hovered ? color : 'var(--color-text-faint)'}`,
        boxShadow: hovered ? `0 0 10px ${color}66` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cyberpunk corner detail */}
      <div 
        className="absolute top-0 right-0 w-2 h-2" 
        style={{ borderBottom: `1px solid ${hovered ? color : 'var(--color-text-faint)'}`, borderLeft: `1px solid ${hovered ? color : 'var(--color-text-faint)'}` }} 
      />
      {name}
    </span>
  );
}
