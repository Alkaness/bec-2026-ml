import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { TechBadge } from '../shared/TechBadge';

export function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="cyber-panel overflow-hidden flex flex-col group relative"
      whileHover={{
        borderColor: 'var(--color-primary-light)',
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Top accent bar */}
      <div
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-orange))',
        }}
      />
      {/* Cyber edge glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ boxShadow: 'inset 0 0 20px var(--color-primary-dark)' }} />

      <div className="p-6 flex flex-col flex-1 relative z-10">
        {/* Title */}
        <h3
          className="font-heading tracking-widest text-xl mb-1 uppercase"
          style={{ color: 'var(--color-text)' }}
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <p
          className="font-mono text-xs mb-4"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <div className="mb-4 flex-1">
          <p
            className={`text-sm leading-relaxed ${!expanded ? 'line-clamp-4' : ''}`}
            style={{ color: 'var(--color-text-muted)' }}
          >
            {project.description}
          </p>
          {project.description.length > 200 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 mt-2 text-xs font-mono transition-colors duration-200 cursor-pointer"
              style={{ color: 'var(--color-primary)' }}
            >
              {expanded ? 'Згорнути' : 'Розгорнути'}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>

        {/* Skills demonstrated */}
        {expanded && project.skillsDemonstrated && (
          <div className="mb-4">
            <p
              className="font-mono text-xs font-bold mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              Що прокачав:
            </p>
            <ul className="space-y-1.5">
              {project.skillsDemonstrated.map((skill, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <span style={{ color: 'var(--color-primary)' }} className="shrink-0 mt-0.5">→</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techBadges.map((badge) => (
            <TechBadge key={badge.name} name={badge.name} color={badge.color} />
          ))}
        </div>

        {/* GitHub links */}
        <div className="flex flex-wrap gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                border: '1px solid var(--color-text-faint)',
                color: 'var(--color-text)',
              }}
            >
              <ExternalLink size={14} />
              Відкрити на GitHub
            </a>
          )}
          {project.links && project.links.map((linkObj, idx) => (
            <a
              key={idx}
              href={linkObj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                border: '1px solid var(--color-text-faint)',
                color: 'var(--color-text)',
              }}
            >
              <ExternalLink size={14} />
              {linkObj.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
