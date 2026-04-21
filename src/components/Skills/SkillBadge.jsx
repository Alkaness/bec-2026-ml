import { useState } from 'react';

export function SkillBadge({ name, detail, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-default group relative"
      style={{
        backgroundColor: hovered ? `${color}15` : 'var(--color-bg-surface)',
        borderLeft: `4px solid ${color}`,
        borderTop: '1px solid var(--color-bg-elevated)',
        borderRight: '1px solid var(--color-bg-elevated)',
        borderBottom: '1px solid var(--color-bg-elevated)',
        boxShadow: hovered ? `2px 2px 0px ${color}` : 'none',
        transform: hovered ? 'translate(-2px, -2px)' : 'translate(0, 0)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex-1 min-w-0">
        <p
          className="font-mono text-sm font-bold uppercase break-words"
          style={{ color: hovered ? '#fff' : color }}
        >
          {name}
        </p>
        {detail && (
          <p
            className="text-xs mt-1 font-sans leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {detail}
          </p>
        )}
      </div>
    </div>
  );
}
