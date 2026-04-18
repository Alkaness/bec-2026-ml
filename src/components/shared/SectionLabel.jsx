export function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div 
        className="font-heading text-xl tracking-widest px-2 py-1"
        style={{ 
          color: 'var(--color-bg)', 
          backgroundColor: 'var(--color-primary)',
          textShadow: '1px 1px 0 rgba(255,255,255,0.5)'
        }}
      >
        {String(number).padStart(2, '0')}
      </div>
      <div 
        className="font-mono text-sm tracking-[0.2em] relative uppercase"
        style={{ color: 'var(--color-text)' }}
      >
        <span style={{ color: 'var(--color-orange)' }}>//</span> {label}
      </div>
    </div>
  );
}
