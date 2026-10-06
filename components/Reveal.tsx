'use client';
import { useEffect, useRef } from 'react';
export default function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const element = ref.current; if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return; const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { element.classList.remove('reveal-pending'); observer.disconnect(); } }, { threshold: 0.08 }); if (element.getBoundingClientRect().top > window.innerHeight) { element.classList.add('reveal-pending'); observer.observe(element); } return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
