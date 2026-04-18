export function WhyBlock({ icon, heading, children, align = 'left' }) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-5 items-start ${
        align === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Icon */}
      <div
        className="shrink-0 w-12 h-12 flex items-center justify-center text-2xl border"
        style={{ 
          backgroundColor: 'var(--color-bg-elevated)', 
          borderColor: 'var(--color-primary-dark)',
          boxShadow: `2px 2px 0px var(--color-primary)`
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div
        className={`flex-1 cyber-panel p-5 border-l-4 ${
          align === 'right' ? 'md:border-l-0 md:border-r-4 md:text-right' : ''
        }`}
        style={{
          borderColor: 'var(--color-primary)',
        }}
      >
        <h3
          className="font-heading tracking-wider text-xl mb-3 uppercase"
          style={{ color: 'var(--color-text)' }}
        >
          {heading}
        </h3>
        <div
          className="text-base leading-relaxed font-sans"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
